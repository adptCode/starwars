import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  private authService = inject(AuthService)

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
    this.authService.registerUser(postData).subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
