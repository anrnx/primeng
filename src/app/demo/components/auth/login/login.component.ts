import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { JwtUtil } from 'src/app/utilities/JwtUtil';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginFormGroup:FormGroup;

    constructor(private fb:FormBuilder, 
                public layoutService: LayoutService,
                 private authService: AuthService, 
                 private router: Router) {

        this.loginFormGroup = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

  login() {
    const val = this.loginFormGroup.value;

    if (val.email && val.password) {
        this.authService.login(val.email, val.password)
            .subscribe(
                (result) => {
                    var token = JwtUtil.decodeToken(result.token);
                    JwtUtil.storeToken(result.token);
                    console.log(token);
                    this.router.navigateByUrl('/');
                }
            );
    }
}

  // onSubmit(): void {
  //   const { username, password } = this.form;

  //   this.authService.login(username, password).subscribe({
  //     next: data => {
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.reloadPage();
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   });
  // }

  // reloadPage(): void {
  //   window.location.reload();
  // }
}