import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SponsoringPage } from './sponsoring.page';

describe('SponsoringPage', () => {
  let component: SponsoringPage;
  let fixture: ComponentFixture<SponsoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SponsoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
