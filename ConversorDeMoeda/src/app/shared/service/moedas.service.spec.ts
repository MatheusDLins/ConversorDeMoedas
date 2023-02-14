import { TestBed } from '@angular/core/testing';
import { MoedasService } from './moedas.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MoedasService', () => {
  let service: MoedasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoedasService]
    });
    service = TestBed.inject(MoedasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert currencies', () => {
    const moedaOrigem = 'USD';
    const moedaDestino = 'BRL';
    const valor = 100;
    const mockResponse = { result: 550.45 };

    service.converter(moedaOrigem, moedaDestino, valor).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service.API_URL}/convert?from=${moedaOrigem}&to=${moedaDestino}&amount=${valor}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
