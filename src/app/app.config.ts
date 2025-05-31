import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
import { provideClientHydration } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
 
  providers: [
    provideAnimations(), // required
    provideHttpClient(withFetch()), // required
    provideRouter(routes, withEnabledBlockingInitialNavigation()), // une seule fois ici
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    provideClientHydration(),
    // retirer les doublons provideRouter()
  ]
};
