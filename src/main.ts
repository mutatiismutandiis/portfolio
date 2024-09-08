import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Register Swiper elements (carrousel)
registerSwiperElements();

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
