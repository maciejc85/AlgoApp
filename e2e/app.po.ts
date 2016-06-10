export class AlgoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('algo-app-app h1')).getText();
  }
}
