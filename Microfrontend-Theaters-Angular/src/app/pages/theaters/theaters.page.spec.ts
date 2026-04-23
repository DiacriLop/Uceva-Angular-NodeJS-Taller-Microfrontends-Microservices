import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersPage } from './theaters.page';
import { provideHttpClient } from '@angular/common/http';
import { TheatersService } from '../../services/theaters/theaters.service';
import { TheatersTableComponent } from '../../components/theaters-table/theaters-table.component';
import { of, throwError } from 'rxjs';
import { THEATERS_MOCK } from '../../mocks/theaters.mocks';
import { By } from '@angular/platform-browser';

describe('TheatersPage', () => {
  let component: TheatersPage;
  let fixture: ComponentFixture<TheatersPage>;
  let theatersService: TheatersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheatersPage, TheatersTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatersPage);
    component = fixture.componentInstance;
    theatersService = TestBed.inject(TheatersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllTheaters al iniciar', () => {
    const spyGetAllTheaters = jest.spyOn(theatersService, 'getAllTheaters').mockReturnValue(of(THEATERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllTheaters).toHaveBeenCalled();
  });

  it('debería asignar los productos recibidos del servicio', () => {
    jest.spyOn(theatersService, 'getAllTheaters').mockReturnValue(of(THEATERS_MOCK));
    fixture.detectChanges();
    expect(component.theaters).toEqual(THEATERS_MOCK);
  });

  it('debería pasar los productos al componente theaters-table', () => {
    jest.spyOn(theatersService, 'getAllTheaters').mockReturnValue(of(THEATERS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TheatersTableComponent))
      .componentInstance;
    expect(tableComponent.theaters).toEqual(THEATERS_MOCK);
  });

  it('debería manejar el error cuando falla getAllTheaters', () => {
    component.theaters = [];
    const errorResponse = new Error('Error al cargar productos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(theatersService, 'getAllTheaters').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(theatersService.getAllTheaters).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.theaters.length).toBe(0);
  });
});
