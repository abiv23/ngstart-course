import { Component, input, output }  from '@angular/core';
import { Todo } from '../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-todo-list',
    template: `
        <ul>
            @for (todo of todos(); track todo.id){
                <li>
                    <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
                    <button (click)="deleteTodo.emit(todo.id)">Delete</button>
                </li>
            } @empty {
                <li>Nothing to do!</li>
            }
        </ul>
    `,
    imports: [RouterLink],
    styles: [
        `
            ul {
                margin: 0;
                padding: 1rem;
            }
            li {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;
            }
            button {
                background-color: #f44336;
                color: white;
                border: none;
                border-radius: 4px;
                padding: 5px 10px;
                cursor: pointer;
            }
            button:hover {
                background-color: #d32f2f;
            }
        `,
    ]
})

export class TodoListComponent {
    todos = input.required<Todo[]>();
    deleteTodo = output<string>();
}