import { CarouselModule } from './carousel.module';

describe('CarouselModule', () => {
  let CarouselModule: CarouselModule;

  beforeEach(() => {
    CarouselModule = new CarouselModule();
  });

  it('should create an instance', () => {
    expect(CarouselModule).toBeTruthy();
  });
});
