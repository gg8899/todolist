
import { ItemType } from '@/types/index'

class TodoListService {
    private static readonly STORAGE_KEY = 'todolist';

    static getTodos(): ItemType[] {
        const todos = localStorage.getItem(this.STORAGE_KEY);
        return todos ? JSON.parse(todos) : [];
    }

    static addTodo(newTodo: ItemType): void {
        const todos = this.getTodos();
        todos.unshift(newTodo);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    }

    static removeTodo(id: number): void {
        const todos = this.getTodos().filter(todo => todo.id !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    }

    static toggleTodo(id: number): void {
        const todos = this.getTodos();
        const todo = todos.find(todo => todo.id === id);
        if (todo) {
            todo.check = !todo.check;
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
        }
    }
    static removeAllDone(): void {
        const todos = this.getTodos().filter(todo => todo.check === false);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    }
}

export default TodoListService;