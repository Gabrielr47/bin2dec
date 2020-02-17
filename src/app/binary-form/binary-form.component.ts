import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-binary-form',
  templateUrl: './binary-form.component.html',
  styleUrls: ['./binary-form.component.scss']
})
export class BinaryFormComponent {

  binaryForm = new FormGroup({
    binary: new FormControl('',
      [
        Validators.required,
        Validators.pattern('^[0-1]{1,}$'),
      ]
    ),
    decimal: new FormControl(''),
  });

  constructor() { }

  onSubmit() {
    this.binaryForm.get('decimal').setValue(parseInt(this.binaryForm.get('binary').value, 2));
  }

}
