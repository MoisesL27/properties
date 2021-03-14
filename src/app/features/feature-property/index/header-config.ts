import { InjectionToken } from '@angular/core';
import { HeaderMenu } from '@shared/ui/header/header-menu';

export const HeaderConfigToken = new InjectionToken<HeaderMenu[]>('Header Config');
export const headerConfig: HeaderMenu[] = [
  {
    label: 'on-sale',
    items: ['houses', 'apartments', 'offices', 'new-developments'],
  },
  {
    label: 'for-rent',
    items: ['brokers', 'owners'],
  },
  {
    label: 'nortgage',
    items: ['financial-entity', 'pre-approval'],
  },
  {
    label: 'need-help',
    items: ['guide-to-purchase'],
  },
];
