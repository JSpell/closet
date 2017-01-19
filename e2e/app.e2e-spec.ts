import { UxAngularPage } from './app.po';

describe('ux-angular App', function() {
  let page: UxAngularPage;

  beforeEach(() => {
    page = new UxAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
