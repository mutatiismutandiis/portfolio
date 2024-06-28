import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { register as registerSwiperElements } from 'swiper/element/bundle';

// Register Swiper elements (carrousel)
registerSwiperElements();

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
