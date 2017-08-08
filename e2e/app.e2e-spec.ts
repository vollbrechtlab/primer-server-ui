import { PrimerServerPage } from './app.po';

describe('primer-server App', () => {
  let page: PrimerServerPage;

  beforeEach(() => {
    page = new PrimerServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
