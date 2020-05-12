import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewCityPageRoutingModule } from './view-city-routing.module';

import { ViewCityPage } from './view-city.page';

describe('ViewCityPage', () => {
  let component: ViewCityPage;
  let fixture: ComponentFixture<ViewCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCityPage ],
      imports: [IonicModule.forRoot(), ViewCityPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
