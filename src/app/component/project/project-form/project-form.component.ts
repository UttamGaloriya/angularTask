import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  projectForm!: FormGroup;
  projectDetailsForm!: FormGroup;
  reader = new FileReader();
  image: string[] = [];
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.myForm()
  }
  myForm() {
    this.projectForm = this.fb.group(
      {
        projectDetails: this.fb.group({
          organization: ['', Validators.required],
          category: ['', Validators.required],
          activity: ['', Validators.required],
          title: ['', [Validators.required, this.validateString]],
          minimum: ['', Validators.required],
          maximum: ['', Validators.required],
          description: ['', Validators.required],

        }, {
          validator: this.ageValidator('minimum', 'maximum')
        }),
        projectName: ['', Validators.required],
        projectFile: [Validators.required],
        projectCost: this.fb.array([this.projectCost()]),
        projectIncludes: this.fb.array([this.projectIncludes()]),
        projectDate: this.fb.array([this.projectDate()])
      });
  }
  get getProjectDetails() {
    return this.projectForm.get('projectDetails') as FormGroup;
  }
  //project 
  projectCost() {
    return this.fb.group({
      cost: ['', [Validators.required]],
      duration: ['', [Validators.required]]
    })
  }
  get getProjectCost() {
    return this.projectForm.controls['projectCost'] as FormArray
  }
  addProjectCost() {
    this.getProjectCost.push(this.projectCost())
  }
  removeProjectCost(index: number) {
    this.getProjectCost.removeAt(index)
  }
  //
  projectIncludes() {
    return this.fb.group({
      description: ['', [Validators.required, this.validateString]],
      includesCondition: ['', Validators.required]
    })
  }
  get getProjectIncludes() {
    return this.projectForm.controls['projectIncludes'] as FormArray
  }
  addProjectIncludes() {
    this.getProjectIncludes.push(this.projectIncludes())
  }
  removeProjectIncludes(index: number) {
    this.getProjectIncludes.removeAt(index)
  }
  //myDate
  projectDate() {
    return this.fb.group({
      date: ['', Validators.required]
    })
  }
  get getProjectDate() {
    return this.projectForm.controls['projectDate'] as FormArray
  }

  addProjectDate() {
    this.getProjectDate.push(this.projectDate())
  }

  removeProjectDate(index: number) {
    this.getProjectDate.removeAt(index)
  }

  onFileChange(event: any) {
    this.image = []
    for (let file of event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image.push(reader.result as string);
        console.log(this.image)
      };
    }
    this.projectForm.get('projectFile')?.setValue(this.image)
  }

  projectNameFunction(event: any) {
    this.projectForm.get('projectName')?.setValue(event.value)
  }

  submit() {
    console.log("Submitted");
    this.userService.addProjectData(this.projectForm.value)
    console.log(this.projectForm.value)
    this.router.navigateByUrl('/list')
  }


  validateString(control: FormControl) {
    const trimmedValue = control.value.trim();
    if (trimmedValue === '') {
      return { spacesOnly: true };
    }
    return null;
  }
  ageValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value >= matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  removeImg(i: number) {
    this.image.splice(i, 1)
    this.projectForm.get('projectFile')?.setValue(this.image)
  }
}


