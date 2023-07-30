import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TitleComponent } from './title/title.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { QuestionsComponent } from './questions/questions.component';
import { DialogComponent } from './dialog/dialog.component';
import { NewquestionsComponent } from './newquestions/newquestions.component';
import { UserquestionsComponent } from './userquestions/userquestions.component';
import { UserchatComponent } from './userchat/userchat.component';
import { PostquestionComponent } from './postquestion/postquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    TitleComponent,
    AdminhomeComponent,
    UserhomeComponent,
    QuestionsComponent,
    DialogComponent,
    NewquestionsComponent,
    UserquestionsComponent,
    UserchatComponent,
    PostquestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
