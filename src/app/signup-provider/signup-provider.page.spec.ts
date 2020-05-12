import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupProviderPage } from './signup-provider.page';

describe('SignupProviderPage', () => {
  let component: SignupProviderPage;
  let fixture: ComponentFixture<SignupProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
