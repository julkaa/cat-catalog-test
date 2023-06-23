import {Injectable} from '@angular/core';
import {IBreed, ICatData, IOldCatData} from "../models/cat-breed.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatService {
  breeds: IBreed[] = [];

  constructor(public http: HttpClient) {
    this.fetchBreed().subscribe(data => {
      data.map((item: ICatData) => {
        this.breeds.push(this.adaptBreedData(item));
      });
    });
  }

  public fetchData(filter): Observable<any> {
    const limit = filter.amount ? filter.amount : 9;
    const category = filter.category ? '&category_ids=' + filter.category : '&has_breeds=1';
    const breed = filter.breed ? '&breed_ids=' + filter.breed : '';

    let headers = new HttpHeaders({
      'X-Api-Key': 'live_F1yxVPYsgjl5BU15STREUg3Y15zOPvA7O2ymPyivzjlFJMvDHhj8v5PwIIfK8FiS',
    });
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}${category}${breed}`;

    return this.http.get<IOldCatData[]>(url, {headers: headers});
  }

  public adaptCatData(data: IOldCatData): ICatData {
    const breed = data.breeds[0];

    return {
      id: data.id || '',
      url: data.url || '',
      name: breed?.name || '',
      temperament: breed?.temperament || '',
      description: breed?.description || '',
      isShowDescription: false
    };
  }

  private adaptBreedData(data): any {
    return {
      id: data.id,
      name: data.name,
    }
  }

  private fetchBreed(): Observable<any> {
    let headers = new HttpHeaders({
      'X-Api-Key': 'live_F1yxVPYsgjl5BU15STREUg3Y15zOPvA7O2ymPyivzjlFJMvDHhj8v5PwIIfK8FiS',
    });
    const url = `https://api.thecatapi.com/v1/breeds`;

    return this.http.get<any>(url, {headers: headers});
  }

}
