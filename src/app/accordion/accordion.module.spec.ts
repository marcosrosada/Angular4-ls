import { MyAccordionModule } from './accordion.module';

describe('MyAccordionModule', () => {
  let MyAccordionModule: MyAccordionModule;

  beforeEach(() => {
    MyAccordionModule = new MyAccordionModule();
  });

  it('should create an instance', () => {
    expect(MyAccordionModule).toBeTruthy();
  });
});
