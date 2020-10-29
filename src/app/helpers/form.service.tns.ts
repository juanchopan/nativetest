import { TextField } from 'tns-core-modules/ui/text-field';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormService {
  dismiss(inputFields: TextField[]) {
    inputFields.forEach(inf => inf.focus());
    inputFields[inputFields.length - 1].dismissSoftInput();
  }
}
