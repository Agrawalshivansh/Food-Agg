import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { ForgotPasswordService } from '../Services/forgotpassword.service';
export class register {
  email: string;
  cemail: string;
}
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent{
  emailform!: FormGroup;
  user: register;

  constructor(public router: Router,private forgotPasswordService: ForgotPasswordService) 
  {this.user = {} as register;}
 
  ngOnInit(): void {
    this.emailform = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        Validators.pattern(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ),
      ]),
      cemail: new FormControl(this.user.cemail, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        Validators.pattern(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ),
      ]),
    });
  }

  get email() {
    return this.emailform.get('email')!;
  }
  get cemail() {
    return this.emailform.get('cemail')!;
  }

  onSubmit() {
    if (this.emailform.valid) {
      const email = this.emailform.value.email;
      this.forgotPasswordService.sendResetLink(email).subscribe(
        (response) => {
          console.log('Password reset link sent successfully:', response);
          // You can handle success message or redirection here
        },
        (error) => {
          console.error('Error sending reset link:', error);
          // You can handle error messages here
        }
      );
    }

    // if (this.email.value !== this.cemail.value) {
    //   alert('Emails do not match');
    // } else {
    //   alert('Form submitted successfully');
    // }
  }
}
