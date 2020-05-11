import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgbPage } from './agb.page';

describe('AgbPage', () => {
  let component: AgbPage;
  let fixture: ComponentFixture<AgbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
