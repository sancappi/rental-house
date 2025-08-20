import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { App } from './app/app';
import routeConfig from './app/app-routing';
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(),
    provideRouter(routeConfig)]
}).catch((err) => console.error(err));
