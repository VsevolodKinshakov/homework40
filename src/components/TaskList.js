import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../store/actions'; // Импортируем функцию удаления задачи

// Компонент TaskList отображает список задач и кнопку удаления
const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul className="task-list">
      {/* Маппим массив задач и создаем элементы списка для каждой задачи */}
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {task.text} {/* Отображаем текст задачи */}
          <button
            className="task-remove-button"
            onClick={() => removeTask(task.id)} // При клике вызываем функцию удаления задачи
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

// Функция mapStateToProps позволяет связать состояние Redux с пропами компонента
const mapStateToProps = (state) => ({
  tasks: state.tasks, // Здесь мы берем массив задач из состояния Redux и передаем его в проп tasks
});

// С помощью функции connect мы связываем компонент TaskList с Redux
export default connect(mapStateToProps, { removeTask })(TaskList);


// tasks и removeTask - это пропы, переданные в компонент TaskList из Redux.
// Мы маппим массив задач (tasks) и для каждой задачи создаем элемент списка (<li>), отображая текст задачи.
// Каждая задача имеет кнопку "Удалить", при клике на которую вызывается функция removeTask(task.id) для удаления
// соответствующей задачи из состояния Redux.
// mapStateToProps - это функция, которая связывает состояние Redux с пропами компонента. 
// Мы берем массив задач из состояния Redux и передаем его в проп tasks.
// С помощью функции connect мы связываем компонент TaskList с Redux, обеспечивая доступ 
// к состоянию и действиям Redux через пропы tasks и removeTask.