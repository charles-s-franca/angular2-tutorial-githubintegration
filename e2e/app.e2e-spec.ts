import { Angular2TutorialGithubintegrationPage } from './app.po';

describe('angular2-tutorial-githubintegration App', () => {
  let page: Angular2TutorialGithubintegrationPage;

  beforeEach(() => {
    page = new Angular2TutorialGithubintegrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
