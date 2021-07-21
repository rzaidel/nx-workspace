import { Component, OnInit } from '@angular/core';
import { LocalizationService } from './core/shared/modules/internationalization/localization.service';
import { Locales } from '@solara-workspace/locales';


@Component({
  selector: 'solara-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  public readonly LOCALES = Locales;

  constructor(private localeService: LocalizationService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ng on init');
  }
  setLang(value: Locales) {
    this.localeService.useLanguage(value).then(console.log);
  }
}
