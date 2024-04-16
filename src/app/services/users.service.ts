import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { IApiResponse } from '../models/response.model';
import { Fruit } from '../models/fruit.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  public create(dto: any) {
    return this.http.put<any>(`/api/fruit`, dto);
  }

  getData(): Promise<Fruit[]> {
    return firstValueFrom(this.http.get<Fruit[]>(`/api/fruit/all`));
  };
}


