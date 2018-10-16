import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input('isFavorite') isSeleted: boolean;
  @Output() change = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    
  }

  onClick() {
    this.isSeleted = !this.isSeleted;
    this.change.emit();
  }

}
