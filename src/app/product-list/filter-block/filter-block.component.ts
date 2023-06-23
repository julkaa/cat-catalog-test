import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CatService} from "../../shared/services/cat.service";
import {IBreed} from "../../shared/models/cat-breed.model";

@Component({
  selector: 'filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent {
  categories = [
    {
      id: 5,
      name: 'boxes'
    },
    {
      id: 15,
      name: 'clothes'
    },
    {
      id: 1,
      name: 'hats'
    },
    {
      id: 14,
      name: 'sinks'
    },
    {
      id: 2,
      name: 'space'
    },
    {
      id: 4,
      name: 'sunglasses'
    },
    {
      id: 7,
      name: 'ties'
    },
  ];
  form: FormGroup = new FormGroup({
    breedControl: new FormControl(''),
    categoryControl: new FormControl(''),
    amountControl: new FormControl(''),
  });

  @Input()
  breeds: IBreed[] = [];

  @Output()
  newsEmitter = new EventEmitter<Event>();

  constructor(public catService: CatService) {
    this.breeds = this.catService.breeds;
  }

  public onFilter(): void {
    this.newsEmitter.emit(this.form?.value);
  }
}
