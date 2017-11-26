import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',
  styleUrls: ['./test-directive.component.css']
})
export class TestDirectiveComponent implements OnInit {
  private name: string = "";
  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(mainForm: FormGroup) {
    console.log(mainForm.value);
  }
}
