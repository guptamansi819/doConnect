import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { HomeComponent } from './home/home.component';
import { NewquestionsComponent } from './newquestions/newquestions.component';
import { PostquestionComponent } from './postquestion/postquestion.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { UserchatComponent } from './userchat/userchat.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserquestionsComponent } from './userquestions/userquestions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'Register',
    component: RegisterComponent,
  },
  { path: 'userhome', component: UserhomeComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'Questions', component: QuestionsComponent },
  { path: 'NewQuestions', component: NewquestionsComponent },
  { path: 'UserQuestions', component: UserquestionsComponent },
  { path: 'Chat', component: UserchatComponent },
  { path: 'AskQuestion', component: PostquestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
