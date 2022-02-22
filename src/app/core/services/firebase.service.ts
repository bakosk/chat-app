import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firebaseApp: any = null;
  constructor() { }

  initializeFirebase(): void {
    if(this.firebaseApp !== null) {
      return;
    }
    const firebaseConfig = {
      apiKey: "AIzaSyDLZOxxILAzQ7ms6b1cnBqYf8rMo_UxJ-4",
      authDomain: "bakochat-18875.firebaseapp.com",
      projectId: "bakochat-18875",
      storageBucket: "bakochat-18875.appspot.com",
      messagingSenderId: "889946781489",
      appId: "1:889946781489:web:dac0ddffeaa5d734b82210"
    };
    this.firebaseApp = initializeApp(firebaseConfig);
  }

  get app(): any {
    return this.firebaseApp;
  }
}
