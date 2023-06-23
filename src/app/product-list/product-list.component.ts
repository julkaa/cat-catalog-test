import {Component, OnInit} from '@angular/core';
import {ICatData} from "../shared/models/cat-breed.model";
import {CatService} from "../shared/services/cat.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss', '../shared/grid.scss']
})
export class ProductListComponent implements OnInit {
  collection: ICatData[] = [];
  isLoading = false;

  constructor(public catService: CatService) {
  }

  ngOnInit(): void {
    this.adaptData({});
  }

  public addFilter(filterInfo): void {
    const filter = {
      breed: filterInfo.breedControl,
      category: filterInfo.categoryControl,
      amount: filterInfo.amountControl,
    }
    this.adaptData(filter);
  }

  private adaptData(filter: object): void {
    this.isLoading = true;
    this.catService.fetchData(filter).subscribe(data => {
      const finalData: ICatData[] = [];
      data.map((item: ICatData) => {
        finalData.push(this.catService.adaptCatData(item));
      })
      this.isLoading = false;
      this.collection = finalData;
    });
  }
}

