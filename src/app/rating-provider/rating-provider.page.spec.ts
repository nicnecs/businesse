import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingProviderPage } from './rating-provider.page';

describe('RatingProviderPage', () => {
  let component: RatingProviderPage;
  let fixture: ComponentFixture<RatingProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
