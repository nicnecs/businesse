import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProviderProjectsPage } from './provider-projects.page';

describe('ProviderProjectsPage', () => {
  let component: ProviderProjectsPage;
  let fixture: ComponentFixture<ProviderProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
