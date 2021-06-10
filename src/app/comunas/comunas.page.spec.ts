import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunasPage } from './comunas.page';

describe('ComunasPage', () => {
  let component: ComunasPage;
  let fixture: ComponentFixture<ComunasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
