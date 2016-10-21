import { browser, element, by } from 'protractor';

export class SpiceItUpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('siu-root h1')).getText();
  }
}
