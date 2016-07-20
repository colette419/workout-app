export class WorkoutAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('workout-app-app h1')).getText();
  }
}
