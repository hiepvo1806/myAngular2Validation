import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-validation-component',
  templateUrl: './validation-component.component.html',
  styleUrls: ['./validation-component.component.css']
})
export class ValidationComponentComponent implements OnInit {

  private isShowError:boolean = false;
  @Input() control: any;
  @Input() content:any;

  constructor() { }

  ngOnInit() {
  }

}
