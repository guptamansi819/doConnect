import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor() {}
  url = 'http://localhost:8080/';

  getUserByEmail(email: string): Promise<any> {
    return fetch(this.url + `useremail/${email}`, {
      method: 'GET',
    }).then((res) => res.json());
  }

  login(data: any): Promise<any> {
    return fetch(this.url + 'login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.text());
  }

  register(data: any): Promise<any> {
    return fetch(this.url + 'register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.text());
  }

  getApprovedQuestions(): Promise<any> {
    return fetch(this.url + 'questions/approved').then((res) => res.json());
  }

  getUnique(): Promise<any> {
    return fetch(
      this.url + 'users/unique/' + localStorage.getItem('name')!
    ).then((res) => res.json());
  }
}
