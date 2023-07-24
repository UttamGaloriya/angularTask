import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Input('') projectName: string = ''
  projectForm!: FormGroup;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.fb.group(
      {
        projectDetails: this.fb.group({
          organization: ['', Validators.required],
          category: ['', Validators.required],
          activity: ['', Validators.required],
          title: ['', Validators.required],
          age: this.fb.group({
            minimum: ['', Validators.required],
            maximum: ['', Validators.required],
          }),
          description: ['', Validators.required],

        }),
        projectName: [this.projectName, Validators.required],
        projectFile: ['', Validators.required],
        projectCost: this.fb.array([this.projectCost()]),
        projectIncludes: this.fb.array([this.projectIncludes()]),
        projectDate: this.fb.array([this.projectDate()])
      }

    )
  }


  //project 
  projectCost() {
    return this.fb.group({
      cost: ['', Validators.required],
      duration: ['', Validators.required]
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
      description: ['', Validators.required],
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
  //
  onFileChange(event: any) {
    // const file = event.target.files[0];
    for (let file of event.target.files) {
      console.log(file)
    }

  }
  submit() {
    console.log("Submitted");
    console.log(this.projectForm.value)
  }
}
