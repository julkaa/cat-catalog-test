import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CatData, CatService} from "../shared/services/cat.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss', '../shared/grid.scss']
})
export class ProductListComponent {
  products = [];

  constructor(public http: HttpClient, public catService: CatService) {

  }

  public adaptData(): void {
    this.fetchData().subscribe(data => {
      const catData = [];
      data.map((item: CatData) => {
        catData.push(this.catService.adaptDataToCatBreed(item));
      })
      this.products = catData;
    });
  }

  private fetchData(): Observable<any> {
    let headers = new HttpHeaders({
      'X-Api-Key': 'live_F1yxVPYsgjl5BU15STREUg3Y15zOPvA7O2ymPyivzjlFJMvDHhj8v5PwIIfK8FiS',
    });
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10&mime_types=jpg,png&order=Random&size=small&page=0&sub_id=demo-b2ee7e';
    return this.http
      .get<any>(url, {headers: headers});
  }
}

