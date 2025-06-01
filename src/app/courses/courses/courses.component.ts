import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // melhor prática, porque o angular que trata
  courses: Observable<Course[]>
  //courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService,) {
    // melhor prática, porque o angular que trata
    this.courses = this.courseService.list();
  }

  ngOnInit(): void {
    /*  this.courseService.list().subscribe(course => {
       this.courses = course;
     }) */
  }

}
