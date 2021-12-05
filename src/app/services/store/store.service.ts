import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as SecureStorage from 'secure-web-storage';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private secureStorage;
  constructor() {
    const SECRET_KEY = environment.encryption_secret;
    this.secureStorage = new SecureStorage(localStorage, {
      hash: function hash(key) {
        key = CryptoJS.SHA256(key);

        return key.toString();
      },
      encrypt: function encrypt(data) {
        data = CryptoJS.AES.encrypt(data, SECRET_KEY);

        data = data.toString();

        return data;
      },
      decrypt: function decrypt(data) {
        data = CryptoJS.AES.decrypt(data, SECRET_KEY);

        data = data.toString(CryptoJS.enc.Utf8);

        return data;
      },
    });
  }
  retrieve(item: string): string {
    const _ = this.secureStorage.getItem(item);
    return _;
  }
  store(key, value): void {
    this.secureStorage.setItem(key, value);
  }
}
