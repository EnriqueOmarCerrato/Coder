import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  @Input() data_: any;
  @Output() idEmit = new EventEmitter<any[]>();
  constructor() { }

  ngOnInit(): void {
  }

  EditRow(e) {
    const button=<HTMLButtonElement>e['path'][0];
    if(button.getAttribute('data-value')){
      let val=[];
      if(button.getAttribute('data-type')){
        const value=button.getAttribute('data-value');
        val.push(value,button.getAttribute('data-type'));
        this.idEmit.emit(val);
      }
      
    }
  }
}
