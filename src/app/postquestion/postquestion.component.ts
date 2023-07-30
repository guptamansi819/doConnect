import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-postquestion',
  templateUrl: './postquestion.component.html',
  styleUrls: ['./postquestion.component.css'],
})
export class PostquestionComponent implements OnInit {
  question: string = '';
  topic: string = '';

  constructor(private service: QuestionService, private bar: MatSnackBar) {}

  ngOnInit(): void {}

  saveQuestion(): void {
    this.service
      .saveQuestion({
        question: this.question,
        email: localStorage.getItem('email')!,
        name: localStorage.getItem('name'),
        topic: this.topic,
      })
      .then((res) => {
        if (res === 'ok') {
          this.bar.open('Succesfullly Posted Question', 'Close', {
            duration: 3000,
          });
          this.question = '';
          this.topic = '';
        }
      });
  }
}
