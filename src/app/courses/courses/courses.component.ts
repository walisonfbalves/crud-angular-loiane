import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // melhor prática, porque o angular que trata
  courses$: Observable<Course[]>
  //courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService, public dialog: MatDialog) {
    // melhor prática, porque o angular que trata
    this.courses$ = this.courseService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );
  }

  ngOnInit(): void {
    /*  this.courseService.list().subscribe(course => {
       this.courses = course;
     }) */
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
