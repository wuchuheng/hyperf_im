import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/services/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Store, select } from "@ngrx/store";
import { errorType} from "../../shared/services/http/http.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public loginFormSubmitted = false;
  public isLoginFailed: boolean = false;
  public loginFailedMessage: String = '';

  loginForm = new FormGroup({
    username: new FormControl('root@wuchuheng.com', [Validators.required]),
    password: new FormControl('12345678', [Validators.required]),
    rememberMe: new FormControl(true)
  });


  ngOnInit(): void {

  }

  constructor(private router: Router,
              private authService: AuthService,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute,
              private store: Store<{auth: {}}>
) {
  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.spinner.show();
    this.authService.signingUser(this.loginForm.value.username, this.loginForm.value.password, this.loginForm.value.rememberMe)
      .then((res) => {
        this.spinner.hide();
        this.router.navigate(['/dashboard/dashboard1']);
      })
      .catch((err: errorType) => {
          this.isLoginFailed = true;
          this.loginFailedMessage = err.message;
          this.spinner.hide();
        }
      );
  }
}
