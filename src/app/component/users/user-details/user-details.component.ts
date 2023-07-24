import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  projectForm!: FormGroup;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
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

        }),
        projectName: ['', Validators.required],
        projectFile: [[], Validators.required],
        projectCost: this.fb.array([this.projectCost()]),
        projectIncludes: this.fb.array([this.projectIncludes()]),
        projectDate: this.fb.array([this.projectDate()])
      }

    )
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
    for (let file of event.target.files) {
      console.log(file)
    }
    this.projectForm.get('projectFile')?.setValue(event)
  }

  projectNameFunction(event: any) {
    this.projectForm.get('projectName')?.setValue(event.value)
  }

  submit() {
    console.log("Submitted");
    this.userService.addUserData(this.projectForm.value)
    console.log(this.projectForm.value)
  }


  validateString(control: FormControl) {
    const trimmedValue = control.value.trim();
    if (trimmedValue === '') {
      return { spacesOnly: true };
    }
    return null;
  }
}
