import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Authors} from "../interfaces/authors";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../interfaces/pagination";

const API_AUTHORS = environment.apiBaseLink ;

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {



  constructor(
    private http: HttpClient,
  ) { }

  getAllExpenses(pagination?: Pagination) {

    if (pagination) {
      // let params = new HttpParams();
      // params = params.append('pageSize', pagination.pageSize);
      // params = params.append('page', pagination.currentPage);
      return this.http.get<{ results: any, lastItemIndex: number, totalCount: number, count: number, page: number, totalPages: number}>(API_AUTHORS + `authors?limit=${pagination.pageSize}&skip=${pagination.currentPage}`);
    }
    else {
      return this.http.get<{ results: any, lastItemIndex: number, count: number, page: number, totalPages: number, totalCount: number}>(API_AUTHORS + 'authors?limit=10&skip=20');
    }

  }

}
