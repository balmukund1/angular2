import { AcliPage } from './app.po';

describe('acli App', () => {
  let page: AcliPage;

  beforeEach(() => {
    page = new AcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
