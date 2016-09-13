import { BookkeeperPage } from './app.po';

describe('bookkeeper App', function() {
  let page: BookkeeperPage;

  beforeEach(() => {
    page = new BookkeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
