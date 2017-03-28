import { AtestPage } from './app.po';

describe('atest App', () => {
  let page: AtestPage;

  beforeEach(() => {
    page = new AtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
