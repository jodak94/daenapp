import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargarFotosPage } from './cargar-fotos.page';

describe('CargarFotosPage', () => {
  let component: CargarFotosPage;
  let fixture: ComponentFixture<CargarFotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarFotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargarFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
