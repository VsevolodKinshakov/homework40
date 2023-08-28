import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      {/* Оборачиваем приложение в Provider и передаем store */}
      <div className="container">
        {/* Используем контейнер для центрирования */}
        <h1>Управление задачами</h1>
        <TaskForm />
        {/* Компонент формы для добавления задач */}
        <TaskList />
        {/* Компонент списка задач */}
      </div>
    </Provider>
  );
}

export default App;
