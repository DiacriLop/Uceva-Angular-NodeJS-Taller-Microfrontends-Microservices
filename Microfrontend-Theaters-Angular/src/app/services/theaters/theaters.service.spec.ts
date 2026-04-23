import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Theater } from '../../interfaces/theaters.interface';
import { THEATERS_MOCK } from '../../mocks/theaters.mocks';
import { TheatersService } from './theaters.service';

describe('TheatersService', () => {
  let service: TheatersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(TheatersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllTheaters', () => {

    it('debería realizar una petición GET y retornar una lista de teatros', () => {
      const countTheaters = 5;
      const mockTheaters: Theater[] = THEATERS_MOCK;

      service.getAllTheaters(countTheaters).subscribe((theaters) => {
        expect(theaters).toEqual(mockTheaters);
        expect(theaters.length).toBe(mockTheaters.length);
      });
      const req = httpMock.expectOne(`http://localhost:3003/api/theaters/${countTheaters}`);

      expect(req.request.method).toBe('GET');

      req.flush(mockTheaters);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countTheaters = 3;

      service.getAllTheaters(countTheaters).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`http://localhost:3003/api/theaters/${countTheaters}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});
