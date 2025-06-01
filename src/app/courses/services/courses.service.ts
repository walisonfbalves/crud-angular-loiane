import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'assets/courses.json'

  constructor(
    private httpCliente: HttpClient,
  ) { }

  list() {
    return this.httpCliente.get<Course[]>(this.API)
      .pipe(
        tap(courses => console.log(courses))
      );
  }
}
