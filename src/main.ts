import { HomeComponent } from './app/home/home.component';
import { ContactsComponent } from './app/contacts/contacts.component';
import { Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
