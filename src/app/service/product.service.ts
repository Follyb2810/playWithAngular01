import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiservice: ApiService) {}
  getProduct = (url: string, params: PaginationParams): Observable<Products> => {
    return this.apiservice.get(url,{
      params,
      responseType:'json'

    } 
    );
  };
  getFolly(url:string):Observable<any>{
    return this.apiservice.folly(url)
  }
}
