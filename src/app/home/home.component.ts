import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ApitodoService } from '../apitodo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent implements OnInit {
  todo: any;
  userId: any;
  ajouTodo: any;
  indexTodo: any;
  modifTodo: String;

  constructor(private apitodoService: ApitodoService) { }


  ngOnInit() {
    const token = localStorage.getItem('usertoken');
    /*id utilisateur*/
    this.userId = jwt_decode(token).data._id;
    console.log('id utilisateur', this.userId);

    /*importation todo par id utilisateur*/
    this.apitodoService.todoUser(this.userId).subscribe(res => {
      console.log('decodage ici', JSON.parse(res.text()));
      this.todo = JSON.parse(res.text());
    });

  }

  /*ajout de todo par id utilisateur*/
  addTodo() {
    this.apitodoService.todoAdd(this.userId, { content: this.ajouTodo }).subscribe(res => {
      console.log('todo ajouter components', res);
      this.ngOnInit();
    });
  }

  /*supprimer todo par id utilisateur et index []*/
  deleteTodo(indexTodo) {
    this.apitodoService.todoRemove(this.userId, indexTodo).subscribe(res => {
      console.log('delete todo', res);
      this.ngOnInit();
    });
  }

  /*modifier todo par id utilisateur et index []*/
  updateTodo(modifTodo, indexTodo) {
    const todoDescPrompt = prompt('update', modifTodo.content);
    console.log('index update ici', todoDescPrompt);
    this.apitodoService.todoUpdate(this.userId, indexTodo, { content: todoDescPrompt }).subscribe(res => {
      console.log('todo a modifier', res);
      this.ngOnInit();
    });
  }

}
