import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from '../service/question';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private service: QuestionService
  ) {}

  sendAnswer(): void {
    this.service.update(this.data).then((res) => {
      if (res === 'ok') {
        this.dialogRef.close();
      }
    });
  }

  ngOnInit(): void {}
}
