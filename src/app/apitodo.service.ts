import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApitodoService {
  api_url: String = environment.api_url ;

  constructor(private http: Http) { }

register(data) {
  console.log('register ==>', data);
  return this.http.post(this.api_url + 'auth/register', data);
}

login(data) {
  console.log('login service ==>', data);
  return this.http.post(this.api_url + 'auth/login', data);
}

todoUser(id) {
  console.log('  id dans le services ==', id);
  return this.http.get(this.api_url + 'todo/' + id);

}

todoAdd(id, todo) {
  console.log('ici todo utilisateur ajouter ==', id, todo);
  return this.http.post(this.api_url + 'todo/' + id, todo);

}

todoRemove(id, i) {
  console.log('  ici index todo a supprimé ==', i);
  return this.http.delete(this.api_url + 'todo/' + id + '/' + i);
}

todoUpdate(id, i, todo) {
  console.log('  index dans le service ==', i, todo);
  return this.http.put(this.api_url + 'todo/' + id + '/' + i, todo);
}

}
