import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared/shared.module';
import { InternationalizationModule } from './shared/modules/internationalization/internationalization.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from './shared/modules/internationalization/http-loader.factory';
import { Locales } from '@solara-workspace/locales';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    SharedModule,

  ]
})
export class CoreModule { }
