import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-5f0c7","appId":"1:318936200912:web:0543b9be9dbfaf5546d0d5","storageBucket":"ringoffire-5f0c7.appspot.com","apiKey":"AIzaSyDxlVq-AjPb6ywCmgeCo6ohN8yamaOrjB4","authDomain":"ringoffire-5f0c7.firebaseapp.com","messagingSenderId":"318936200912"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};