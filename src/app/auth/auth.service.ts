import { Injectable } from '@angular/core';
// import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
// import { Hub, ICredentials } from '@aws-amplify/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, Observable } from 'rxjs';
//import { CognitoUser } from 'amazon-cognito-identity-js';

export interface NewUser {
  email: string,
  phone: string,
  password: string,
  firstName: string,
  lastName: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  public loggedIn: boolean;
  // private _authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();
  // authState: Observable<CognitoUser|any> = this._authState.asObservable();

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut'; 
  // public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  // public static GOOGLE = CognitoHostedUIIdentityProvider.Google;
  public static FACEBOOK = "facebook";
  public static GOOGLE = "google";

  constructor() { 
    // Hub.listen('auth',(data) => {
    //   const { channel, payload } = data;
    //   if (channel === 'auth') {
    //     this._authState.next(payload.event);
    //   }
    // });
  }
  
  // signUp(user: NewUser): Promise<CognitoUser|any> {
  //   return new Promise((resolve,reject) => {
  //     Auth.signUp({
  //       "username": user.email,
  //       "password": user.password,
  //       "attributes": {
  //         "email": user.email,
  //         "given_name": user.firstName,
  //         "family_name": user.lastName,
  //         "phone_number": user.phone
  //       }
  //     })
  //     .then((user: CognitoUser|any) => {
  //       this.loggedIn = true;
  //       this.fireIsLoggedIn.emit(true); 
  //       localStorage.setItem('IsLoggin', 'true');
  //       console.log(localStorage);
  //       resolve(user);
  //     }).catch((error: any) => reject(error));
  //   });
  // }

  signUp(user: NewUser): Promise<any> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(true)
        }, 2000);
    });
  }


  // signIn(username: string, password: string):Promise<CognitoUser|any> {
  //   return new Promise((resolve,reject) => {
  //     Auth.signIn(username,password)
  //     .then((user: CognitoUser|any) => {
  //       this.loggedIn = true;
  //       this.fireIsLoggedIn.emit(true); 
  //       localStorage.setItem('IsLoggin', 'true');
  //       console.log(localStorage);
  //       resolve(user);
  //     }).catch((error: any) => reject(error));
  //   });
  // }

  signIn(username: string, password: string):Promise<any> {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(true)
      }, 2000);
    });
  }  

  // signOut(): Promise<any> {
  //   return new Promise((resolve,reject) => {
  //     Auth.signOut()
  //     .then(() => {this.loggedIn = false;
  //       localStorage.removeItem('IsLoggin');
  //       this.fireIsLoggedIn.emit(false); 
  //       console.log(localStorage);
  //       resolve(true);
  //     }).catch((error: any) => reject(error));
  //   });
  // }

  signOut(): Promise<any> {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(true)
      }, 2000);
    });
  }

  // socialSignIn(provider:CognitoHostedUIIdentityProvider): Promise<ICredentials> {
  //   return Auth.federatedSignIn({
  //     'provider': provider
  //   });
  // }

  socialSignIn(any): Promise<any> {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(true)
      }, 2000);
    });
  }
  
  getEmitter() {
    return this.fireIsLoggedIn;
  }
  
}
