import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApitodoService {
  nickname: any;

  constructor(private http: Http) { }

register(data) {
  console.log('register ==>', data);
  return this.http.post('http://localhost:5200/auth/register', data);
}

login(data) {
  console.log('login service ==>', data);
  return this.http.post('http://localhost:5200/auth/login', data);
}

todoUser(id) {
  console.log('  id dans le services ==', id);
  return this.http.get('http://localhost:5200/todo/' + id);

}

todoAdd(id, todo) {
  console.log('ici todo utilisateur ajouter ==', id, todo);
  return this.http.post('http://localhost:5200/todo/' + id, todo);

}

todoRemove(id, i) {
  console.log('  ici index todo a supprimé ==', i);
  return this.http.delete('http://localhost:5200/todo/' + id + '/' + i);
}

todoUpdate(id, i, todo) {
  console.log('  index dans le service ==', i, todo);
  return this.http.put('http://localhost:5200/todo/' + id + '/' + i, todo);
}

}
