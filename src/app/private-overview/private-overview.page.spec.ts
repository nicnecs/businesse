import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivateOverviewPage } from './private-overview.page';

describe('PrivateOverviewPage', () => {
  let component: PrivateOverviewPage;
  let fixture: ComponentFixture<PrivateOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
