import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Authors} from "../interfaces/authors";
import {HttpClient} from "@angular/common/http";

const API_AUTHORS = environment.apiBaseLink ;

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllExpenses() {
    console.log('api', API_AUTHORS)

    return this.http.get<{ results: any}>(API_AUTHORS + 'authors?limit=10&skip=20');
  }

}
