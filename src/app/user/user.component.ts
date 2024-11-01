import { Component, signal, computed, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

@Input({required:true}) id!: string;  
@Input({required:true}) avatar!: string;
@Input({required:true}) name!: string;
@Output() select = new EventEmitter();

get imagePath(){
  return 'assets/users/' + this.avatar
}


//public selectedUser = DUMMY_USERS[randomIndex] //setting up the data

//selectedUser = signal(DUMMY_USERS[randomIndex]) //setting up the data using signal

//imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar ) //using computed fun
//name = computed(()=> this.selectedUser().name) //using computed fun

//fun
// get name(){
//   return this.selectedUser().name
// }

// get imagePath(){
//   return 'assets/users/' + this.selectedUser().avatar
// }

onSelectUser(){
this.select.emit(this.name)
//console.log(">>>>>>> Clicked <<<<<<<")
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//this.selectedUser.set(DUMMY_USERS[randomIndex])
}
}
