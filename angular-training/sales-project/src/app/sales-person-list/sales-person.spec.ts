import { EmailValidator } from '@angular/forms';
import { SalesPerson } from './sales-person';

describe('SalesPerson', () => {
  it('should create an instance', () => {
    expect(new SalesPerson(firstName,lastName,email,volume)).toBeTruthy();
  });
});
