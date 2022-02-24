import { NumberSymbol } from '@angular/common';

export interface Owner {
  name: string;
  phone: string;
  email: string;
  branches: string | number;
  id?: number;
}
