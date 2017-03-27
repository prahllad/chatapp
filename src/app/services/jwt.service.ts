import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  constructor() { }
  getToken(): string {
        return localStorage.getItem('jwtToken');
    }

    saveToken(token: string) {
        localStorage.setItem('jwtToken', token);
    }

    destroyToken() {
        localStorage.removeItem('jwtToken');
}

}
