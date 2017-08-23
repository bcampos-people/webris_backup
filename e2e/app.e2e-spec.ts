import { WebrisPage } from './app.po';

describe('webris App', () => {
  let page: WebrisPage;

  beforeEach(() => {
    page = new WebrisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
