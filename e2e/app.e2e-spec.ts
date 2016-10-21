import { SpiceItUpPage } from './app.po';

describe('spice-it-up App', function() {
  let page: SpiceItUpPage;

  beforeEach(() => {
    page = new SpiceItUpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('siu works!');
  });
});
