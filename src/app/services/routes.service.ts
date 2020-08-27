import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }
  api_url = 'http://localhost:8000/api/';W
  // api_url = 'https://asuveggie.com.py/api';

  generar_pdf_url = this.api_url + 'generar-pdf';
}
