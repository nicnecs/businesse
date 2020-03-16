import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileMenuPage } from './profile-menu.page';

describe('ProfileMenuPage', () => {
  let component: ProfileMenuPage;
  let fixture: ComponentFixture<ProfileMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
