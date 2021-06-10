import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegionesPage } from './regiones.page';

describe('RegionesPage', () => {
  let component: RegionesPage;
  let fixture: ComponentFixture<RegionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
