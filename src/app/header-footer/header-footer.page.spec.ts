import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderFooterPage } from './header-footer.page';

describe('HeaderFooterPage', () => {
  let component: HeaderFooterPage;
  let fixture: ComponentFixture<HeaderFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFooterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
