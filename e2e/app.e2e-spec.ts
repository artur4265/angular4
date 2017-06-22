import { AwesomeappPage } from './app.po';

describe('awesomeapp App', () => {
  let page: AwesomeappPage;

  beforeEach(() => {
    page = new AwesomeappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
