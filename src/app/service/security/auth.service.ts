import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  username = ''; // not used for now, could be used in the future.
  token = '';

  constructor(public http: HttpClient) {
    this.authenticated = false;
  }

  getAuthenticated(): boolean {
    return this.authenticated;
  }

  setAuthenticated(state: boolean): void {
    this.authenticated = state;
  }

  getToken(): string {
    return this.token;
  }

  setToken(state: string): void {
    this.token = state;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(name: string): void {
    this.username = name;
  }
}
