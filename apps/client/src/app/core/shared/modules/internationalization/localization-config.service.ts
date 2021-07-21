import { Injectable } from '@angular/core';
import { Locales } from '@slr-workspace/locales';

/**
 * Class representing the localization config
 */
@Injectable()
export class LocalizationConfigService {
  public locale_id?: Locales = Locales.ENGLISH;
}
