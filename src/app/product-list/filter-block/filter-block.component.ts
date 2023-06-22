import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent {
  @Input()
  breeds: string[] = [];

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

  @Output()
  newsEmitter = new EventEmitter<Event>();

  form: FormGroup = new FormGroup({
    breedControl: new FormControl(''),
    categoryControl: new FormControl(''),
    amountControl: new FormControl(''),
  });

  public onFilter(): void {
    this.newsEmitter.emit(this.form?.value);
  }
}
