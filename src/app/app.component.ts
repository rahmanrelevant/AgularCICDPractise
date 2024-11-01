import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { UserTaskComponent } from "./user-task/user-task.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roots',
  standalone: true,
  imports: [HeaderComponent, UserComponent, UserTaskComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS
  title = 'second-demo-app';
  nameTmp = ""

  onSelectUser(name: string){
    console.log('selected User Id:'+ name);
    this.nameTmp = name;
  }

}