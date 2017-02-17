import { SnakegamePage } from './app.po';

describe('snakegame App', () => {
  let page: SnakegamePage;

  beforeEach(() => {
    page = new SnakegamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
