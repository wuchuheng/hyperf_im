import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import {HttpService, errorType} from "../http/http.service";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { CookieService} from "ngx-cookie-service";
// import * as actions from 'Allactions'
import {authLoginAction} from "../../../store/all.actions"


@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private _accessTokenKey: string = 'accessTokenKey';
  private _refreshTokenExpiredKey: string = 'refreshTokenExpiredKey';

  public isLoginFailed: boolean = false;

  constructor(public _firebaseAuth: AngularFireAuth,
              public router: Router,
              private http: HttpService,
              private store: Store<{'auth'}>,
              private cookieService: CookieService
  ) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

   public signingUser(username: string, password: string, rememberMe: boolean) {
      return new Promise((resolve, rejects) => {
        this.http.post('/authorizations', {username, password}).then(res => {
          this.setToken(res.access_token, res.expired_at);
          this.setRefreshedAt(res.refreshed_at, res.refreshed_at);
          this.store
            .dispatch(
              authLoginAction({
                username, rememberMe, accessToken: res.access_token, expiredAt: res.expired_at, refreshedAt: res.refreshed_at
              })
            )
          resolve()
        }).catch((err: errorType) => {
          rejects(err)
        })
      })
  }

  public setToken(val: string, expiredAt: string)
  {
    this.cookieService.set(this._accessTokenKey, val, new Date(expiredAt))
  }

  public setRefreshedAt(val: string, expiredAt: string): void
  {
    this.cookieService.set(this._refreshTokenExpiredKey, val, new Date(expiredAt))
  }

  public getToken()
  {
    this.cookieService.get(this._accessTokenKey);
  }

  public getTokenRefreshExpired()
  {
    this.cookieService.get(this._refreshTokenExpiredKey);
  }

  logout() {
    this._firebaseAuth.signOut();
    this.router.navigate(['YOUR_LOGOUT_URL']);
  }

  isAuthenticated() {
    return true;
  }
}
