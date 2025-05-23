import { create } from "zustand";
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
