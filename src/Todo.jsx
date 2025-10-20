import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    filterTasks();
  }, [tasks, filter]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const project = e.target.project.value;
    const dueDate = e.target.dueDate.value;
    const newTask = {
      id: Date.now(),
      title,
      category,
      project,
      dueDate,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
    e.target.reset();
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completeAll = () => {
    setTasks(tasks.map((task) => ({ ...task, completed: true })));
  };

  const filterTasks = () => {
    switch (filter) {
      case 'completed':
        setFilteredTasks(tasks.filter((task) => task.completed));
        break;
      case 'uncompleted':
        setFilteredTasks(tasks.filter((task) => !task.completed));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <form onSubmit={addTask}>
        <input type="text" name="title" placeholder="Task title" required />
        <input type="text" name="category" placeholder="Category" />
        <input type="text" name="project" placeholder="Project" />
        <input type="date" name="dueDate" />
        <button type="submit">Add Task</button>
      </form>
      <div>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <button onClick={completeAll}>Complete All</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => completeTask(task.id)}
            />
            <div>
              <h3>{task.title}</h3>
              <p>Category: {task.category}</p>
              <p>Project: {task.project}</p>
              <p>Due Date: {task.dueDate ? format(new Date(task.dueDate), 'PPP') : 'None'}</p>
              <p>Created: {format(new Date(task.createdAt), 'PPP')}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;