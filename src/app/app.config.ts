import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing  } from '@angular/router';
import { routes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReferenciasMaterialModule } from './shared/modulos/referencias-material.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule,
      ReferenciasMaterialModule
    ),
    provideRouter(routes), // Configuración de rutas
  ],
};
