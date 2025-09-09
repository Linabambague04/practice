import { effect, Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user.interface";

const loadFromLocalStorage = (): User[] => {
  const users = localStorage.getItem('users')
  return users ?  JSON.parse(users) : []
}

@Injectable ({providedIn: 'root'})
export class UserService{
    users = signal<User[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() =>{
    localStorage.setItem('users', JSON.stringify(this.users()))
  })

  addUser(user: User) {
    this.users.update((list)  => [...list, user]);
  }
}
