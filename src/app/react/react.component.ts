import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  submitted = false;

  constructor(private fb: FormBuilder) { }

  form = this.fb.group ({
    name: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-z_ ]+$/)]],
    email: ['', [Validators.required , Validators.minLength(5), Validators.pattern(/^([a-zA-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/)]],
    mobile: ['', [Validators.required , Validators.minLength(10), Validators.pattern(/^[0-9_ ]+$/)]],
    city: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-z_ ]+$/)]],
    pincode: ['', [Validators.required , Validators.minLength(6), Validators.pattern(/^[0-9_ ]+$/)]],

  });

  ngOnInit(): void {

  }
  get f(): {[key: string]: AbstractControl }{

    return this.form.controls;
  }

  afterSubmit (){
    this.submitted = true ;
    if(this.form.invalid){
      return;
    }
    alert(JSON.stringify(this.form.value));
  }


}
