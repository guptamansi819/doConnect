import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-newquestions',
  templateUrl: './newquestions.component.html',
  styleUrls: ['./newquestions.component.css'],
})
export class NewquestionsComponent implements OnInit {
  data: any = [];
  constructor(private admin: AdminService) {}

  getData(): void {
    this.admin.getQuestions().then((res) => (this.data = res));
  }

  delete(id: Number): void {
    this.admin.delete(id).then((res) => {
      if (res === 'ok') {
        this.getData();
      }
    });
  }

  approve(id: Number): void {
    this.admin.approve(id).then((res) => {
      if (res === 'ok') {
        this.getData();
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
