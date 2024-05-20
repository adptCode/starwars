import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/auth.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  private authService = inject(AuthService);
  private _router = inject(Router)
  alertSuccess:boolean = false;
  alertDanger:boolean = false;

  constructor(private formBuilder: FormBuilder) {

    this.registerForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  hasErrors(field:string, typeError:string) {
    return this.registerForm.get(field)?.hasError(typeError) && this.registerForm.get(field)?.touched;
  }

  submitDetails() {
    const postData = {...this.registerForm.value};
    this.authService.checkRegister(postData.email).subscribe(
      response => {
        if(response.length === 0) {
          this.authService.registerUser(postData as User).subscribe(
            response => {
              this.alertSuccess = true
              console.log(response);
              this._router.navigate(['/login']);
              this.registerForm.reset()
            }
          )
        } else {
          console.log('error: usuario ya existente');
          this.alertDanger = true;
          this.alertSuccess = false;
          this.registerForm.reset()
        }
      }
    )

  }

}
