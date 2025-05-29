import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private httpCliente: HttpClient,
  ) { }

  list() {
    return [
      { _id: '1', name: 'Angular', category: 'front-end' }
    ];
  }
}
