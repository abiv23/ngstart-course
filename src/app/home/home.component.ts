import { Component, inject } from "@angular/core";
import { TodoFormComponent } from "./ui/todo-form.component";
import { TodoListComponent } from "./ui/todo-list.component";
import { TodoService } from "../shared/data-access/todo.service";

@Component({
    selector: 'app-home',
    template: `
        <h2>Todo</h2>
        <app-todo-form (todoSubmitted)="todoService.addTodo($event)" />
        <app-todo-list 
            [todos]="todoService.todos()"
            (deleteTodo)="todoService.deleteTodo($event)"
        />
    `,
    imports: [TodoListComponent, TodoFormComponent]
})

export default class HomeComponent {
    todoService = inject(TodoService)
}