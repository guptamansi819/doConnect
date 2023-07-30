import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AdminService } from '../service/admin.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(
    private service: QuestionService,
    private dialog: MatDialog,
    private admin: AdminService
  ) {}
  data: any = [];

  getData(): void {
    this.service.getAllQuestions().then((res) => (this.data = res));
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
