import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyResentProjectsPage } from './my-resent-projects.page';

describe('MyResentProjectsPage', () => {
  let component: MyResentProjectsPage;
  let fixture: ComponentFixture<MyResentProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResentProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyResentProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
