import { Student } from './../models/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  base_url = 'https://localhost:44369/api';
  constructor(private http: HttpClient) {}
  getList() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': ' application/json' }),
    };
    return this.http.get(this.base_url + '/student', httpOptions);
  }
  refreshStdList() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': ' application/json' }),
    };
    return this.http.get(this.base_url + '/student', httpOptions);
  }
  // postData(student:Student){
  //   this.http.post(this.base_url+'api/student',)
  // }
  createStudent(student: Student): Observable<Student> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': ' application/json' }),
    };
    const body = JSON.stringify(student);
    console.log(body);
    return this.http.post<Student>(
      this.base_url + '/student',
      body,
      httpOptions
    );
  }
  DeleteStudent(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': ' application/json' }),
    };
    console.log(id);
    return this.http.delete(this.base_url + '/student/' + id);
  }
  // Update Student
  UpdateStudent(student: Student) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': ' application/json' }),
    };
    const body = JSON.stringify(student);
    console.log(body);
    return this.http.put<Student>(
      this.base_url + '/student',
      body,
      httpOptions
    );
  }

  private _listeners = new Subject<any>();
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }
  filter(filterBy: string){
    this._listeners.next(filterBy);
  }
}
