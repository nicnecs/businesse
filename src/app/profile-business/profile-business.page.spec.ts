import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileBusinessPage } from './profile-business.page';

describe('ProfileBusinessPage', () => {
  let component: ProfileBusinessPage;
  let fixture: ComponentFixture<ProfileBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
