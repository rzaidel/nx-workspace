import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InternationalizationModule } from './core/shared/modules/internationalization/internationalization.module';
import { Locales } from '@solara-workspace/locales';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpLoaderFactory } from './core/shared/modules/internationalization/http-loader.factory';
import { TestComponent } from './ui-modules/test/test.component';


const appRoutes: Routes = [
  {
    path: 'heroes',
    component: TestComponent
  }
]
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    InternationalizationModule.forRoot({ locale_id: Locales.ENGLISH }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
