import { MalcodedReduxPage } from './app.po';

describe('malcoded-redux App', () => {
  let page: MalcodedReduxPage;

  beforeEach(() => {
    page = new MalcodedReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
