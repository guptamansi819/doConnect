import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { QuestionService } from '../service/question.service';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-userquestions',
  templateUrl: './userquestions.component.html',
  styleUrls: ['./userquestions.component.css'],
})
export class UserquestionsComponent implements OnInit {
  data: any = [];
  topic: string = '';
  questionTopics: any = [];

  constructor(
    private service: UserserviceService,
    private questionService: QuestionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getData();
    this.dialog.afterAllClosed.subscribe(() => {
      this.getData();
    });
  }

  getData(): void {
    this.questionService
      .getUniqueQuestions()
      .then((res) => (this.questionTopics = res));
    this.service.getApprovedQuestions().then((res) => (this.data = res));
  }

  answer(item: any): void {
    this.dialog.open(DialogComponent, {
      width: '40vw',
      height: '50vh',
      data: item,
    });
  }

  changeData(): void {
    this.questionService
      .getQuestionsByTopic(this.topic)
      .then((res) => (this.data = res));
  }
}
