import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { App } from './app/app';
import { Home } from './app/home/home';
import { Projects } from './app/projects/projects';
import { Resume } from './app/resume/resume';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'resume', component: Resume },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [
    // anchorScrolling lets the "About" and "Contact" menu links jump to a section
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }))
  ]
}).catch(err => console.error(err));