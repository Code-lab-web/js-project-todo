import { useCountTodo } from './todo.jsx/useCountTodo';
import todoStore from './todoStore';
export const useTodo = todoStore;
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
// import { mission } from 'tasks/mission.js'

const _TodoStoreInstance = create(
  devtools((set) => ({
    todos: 0,
    todo: 0,
    increasePopulation: () => set((state) => ({ todo: state.todo + 1 })),
    removeAllTodo: () => set({ todo: 0 }),
    updateTodo: (newTodo) => set({ todo: newTodo }),
  }))
);
  function TodoCounter() {
    const todo = useTodo((state) => state.todos);
    return <h1>Current number of todos: {todo}</h1>;
  }
  
  function Controls() {
    const increasePopulation = useTodo((state) => state.increasePopulation);
    return <button onClick={increasePopulation}>Add a todo</button>;
  }


export const Count = () => {
  // const { count, increment, decrement } = useCountTodonpm()
  const count = useCountTodo(state => state.count)
  const increment = useCountTodo(state => state.increment)
  const decrement = useCountTodo(state => state.decrement)
  const doubleIfEven = useCountTodo(state => state.doubleIfEven)

  return (
    <section className="light">
      <h2>Count</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
<button onClick={doubleIfEven}>Double if even</button>
    </section>
  )
}

export const Button = () => {
  const markUncompletedTasks = () => console.log("red");

  return (
    <section className="dark">
      <h2>Button Controls</h2>
      <button onClick={() => console.log("light")} aria-label="Activate light theme">Light Theme</button>
      <button onClick={() => console.log("dark")} aria-label="Activate dark theme">Dark Theme</button>
      <button onClick={() => console.log("blue")} aria-label="Activate blue theme">Blue</button>
      <button onClick={markUncompletedTasks}>Mark Uncompleted Tasks</button>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="dark">
      <p>Theme: Dark</p>
    </footer>
  );
};

export default todoStore; // Removed the default export of useTodo to comply with Fast Refresh requirements.