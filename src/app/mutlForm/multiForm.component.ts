import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from '@angular/forms';
import { FormlyFieldConfig,FormlyFormOptions } from '@ngx-formly/core';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
    selector: 'multi-form',
    templateUrl: 'multiForm.component.html'
})

export class MultiFormComponent  {
  activedStep = 0;

  model = {};
  options: FormlyFormOptions = {};
  currentStep:number=0;

  steps: StepType[] = [
    {
      label: 'Personal data',
      fields: [
        {
          key: 'firstname',
          type: 'input',
          templateOptions: {
            label: 'First name',
            required: true,
          },
        },
        {
          key: 'age',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Age',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Destination',
      fields: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Day of the trip',
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of the trip',
            required: true,
          },
        },
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));

  prevStep(step) {
      this.currentStep=step-1;
    this.activedStep = step - 1;
  }

  nextStep(step) {
      this.currentStep=step+1;
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}