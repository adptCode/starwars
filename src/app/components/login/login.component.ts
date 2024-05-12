import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService = inject(AuthService)

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }



  hasErrors(field:string, typeError:string) {
    return this.loginForm.get(field)?.hasError(typeError) && this.loginForm.get(field)?.touched;
  }

  onSubmit() {
    const {email, password} = this.loginForm.value
     this.authService.loginUser(email, password).subscribe(
      response => {
        sessionStorage.setItem('token', response.accessToken)
        console.log(response)
      }
    )

  }


}
