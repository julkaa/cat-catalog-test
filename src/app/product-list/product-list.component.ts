import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICatData} from "../shared/models/cat-breed.model";
import {CatService} from "../shared/services/cat.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss', '../shared/grid.scss']
})
export class ProductListComponent implements OnInit {
  products: ICatData[] = [];
  breeds = [];
  isLoading = false;

  constructor(public http: HttpClient, public catService: CatService) {

  }

  ngOnInit(): void {
    this.adaptData({});
    this.fetchBreed().subscribe(data => {
      data.map((item: ICatData) => {
        this.breeds.push(this.catService.adaptBreedData(item));
      });
    });
  }

  public adaptData(filter): void {
    this.isLoading = true;
    this.fetchData(filter).subscribe(data => {
      const catData = [];
      data.map((item: ICatData) => {
        catData.push(this.catService.adaptCatData(item));
      })
      this.isLoading = false;
      this.products = catData;
    });
  }

  public addFilter(filterInfo): void {
    const filter = {
      breed: filterInfo.breedControl,
      category: filterInfo.categoryControl,
      amount: filterInfo.amountControl,
    }
    this.adaptData(filter);
  }

  private fetchData(filter): Observable<any> {
    const limit = filter.amount ? filter.amount : 9;
    const category = filter.category ? '&category_ids=' + filter.category : '&has_breeds=1';
    const breed = filter.breed ? '&breed_ids=' + filter.breed : '';

    let headers = new HttpHeaders({
      'X-Api-Key': 'live_F1yxVPYsgjl5BU15STREUg3Y15zOPvA7O2ymPyivzjlFJMvDHhj8v5PwIIfK8FiS',
    });
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}${category}${breed}`;

    return this.http
      .get<any>(url, {headers: headers});
  }

  private fetchBreed(): Observable<any> {
    let headers = new HttpHeaders({
      'X-Api-Key': 'live_F1yxVPYsgjl5BU15STREUg3Y15zOPvA7O2ymPyivzjlFJMvDHhj8v5PwIIfK8FiS',
    });
    const url = `https://api.thecatapi.com/v1/breeds`;

    return this.http
      .get<any>(url, {headers: headers});
  }
}

