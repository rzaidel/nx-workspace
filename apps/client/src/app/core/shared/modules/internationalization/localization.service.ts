import { Injectable, Optional, SkipSelf } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationConfigService } from './localization-config.service';
import { Locales } from '@solara-workspace/locales';

/**
 * Class representing the translation service.
 */
@Injectable()
export class LocalizationService {
  private _localeId: Locales = Locales.ENGLISH; // default

  /**
   * @constructor
   * @param {LocalizationService} singleton - the localization service
   * @param {LocalizationServiceConfig} config - the localization config
   * @param {TranslateService} translateService - the translate service
   */
  constructor(
    @Optional() @SkipSelf() private singleton: LocalizationService,
    private config: LocalizationConfigService,
    private translateService: TranslateService
  ) {
    if (this.singleton) {
      throw new Error(
        'LocalizationService is already provided by the root module'
      );
    }
    this._localeId = this.config.locale_id as Locales;
  }

  /**
   * Initialize the service.
   * @returns {Promise<void>}
   */
  public initService(): Promise<void> {
    // language code same as file name.
    this._localeId = (localStorage.getItem('language') as Locales) || Locales.ENGLISH;
    return this.useLanguage(this._localeId);
  }

  /**
   * change the selected language
   * @returns {Promise<void>}
   */
  public useLanguage(lang: Locales): Promise<void> {
    this.translateService.setDefaultLang(lang as string);
    return this.translateService
      .use(lang)
      .toPromise()
      .catch(() => {
        throw new Error('LocalizationService.init failed');
      });
  }
  public getDefaultLang(): Locales {
    return this.translateService.getDefaultLang() as Locales
  }

  /**
   * Gets the instant translated value of a key (or an array of keys).
   * @param key
   * @param interpolateParams
   * @returns {string|any}
   */
  public translate(key: string | string[], interpolateParams?: Record<string, unknown>): string {
    return this.translateService.instant(key, interpolateParams) as string;
  }
}
