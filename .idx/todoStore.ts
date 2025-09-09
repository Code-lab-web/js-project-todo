import { create } from "zustand";
import { TodoItem } from "./assets/stores/components/pages/TodoItem";
export interface Todo {...
    //Define the store's state type
    interface Todostate {
        todos: Todo[];
        inSubscribed:bolean;
        setTodos: (todos: Todo[]) => void;
    }
    export const useTodoStore = create<TodoState>()((set) => ({)
        todos: [],
        inSubcribed: true,
        setTodos: (todos) => set({ todos })
    }));

    export const useTodoStore = () => useTodoStore((state)) => state.todos);
    todos: []
    isSubscribed: true,
    actions:  TodoActions;
    setTodos: (todos) => set({ todos })
    setSubscribed: () => set((old) => ){isSubscribed: !old.isSubscribed })),
}));
export const useTodos = () => useTodoStore((state) => state.todos);
export const useTodo = (id: string)=>
    useTodoStore((state) => state.todos.find((todo) => state.todos);
export const useTodo = (id: string) =>
    useTodoStore((state) => state.todos.find((todo) => todo.id === id));
export const useSubscribed = () => useTodoStore((state) => state.isSubscribed);
export const useTodos =Todostore ((state) => state.todos);

export const useTodo = (id: string) =>
    useTodoStore((state => state.todos.find((TodoItem.id ===id));
export const useSubscribed = () useTodoStore((state) => state.isSubscribed);
export const useTodoActions =() => useTodoStore((state) state.actions);
