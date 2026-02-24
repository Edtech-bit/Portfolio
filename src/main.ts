import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { Home } from './app/home/home';
import { About } from './app/about/about';
import { Projects } from './app/projects/projects';
import { Resume } from './app/resume/resume';
import { Contact } from './app/contact/contact';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));