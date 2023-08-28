import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../store/actions'; // Импортируем функцию добавления задачи

// Компонент TaskForm отвечает за форму для добавления новых задач
const TaskForm = ({ addTask }) => {
  // Локальное состояние для хранения текста новой задачи
  const [taskText, setTaskText] = useState('');

  // Функция-обработчик для отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
    if (taskText.trim() === '') return; // Если текст задачи пустой, не добавляем задачу

    // Создаем новую задачу с уникальным ID и текстом из локального состояния
    const newTask = {
      id: Date.now(), // Генерируем уникальный ID на основе текущего времени
      text: taskText,
    };

    // Вызываем функцию добавления задачи из Redux, передавая новую задачу
    addTask(newTask);
    
    // Очищаем текстовое поле после добавления задачи
    setTaskText('');
  };

  return (
    <div className="form-container">
      <h2>Добавить задачу</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Введите задачу"
            className="task-input"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)} // Обновляем локальное состояние при изменении текста
          />
          <button type="submit" className="task-button">Добавить</button>
        </div>
      </form>
    </div>
  );
};

// Связываем компонент TaskForm с Redux, передавая функцию addTask как действие
export default connect(null, { addTask })(TaskForm);

// useState: Эта функция React Hooks используется для создания локального состояния taskText, 
// которое будет хранить текст новой задачи, и функции setTaskText для обновления этого состояния.

// handleSubmit: Эта функция-обработчик вызывается при отправке формы. Она предотвращает перезагрузку страницы
//  (через e.preventDefault()), проверяет, что текст задачи не пустой, создает новую задачу и вызывает функцию 
//  addTask для добавления задачи в Redux. После этого она очищает текстовое поле.

// Внутри формы есть поле ввода (<input>) для ввода текста задачи и кнопка "Добавить", 
// при нажатии на которую будет вызвана функция handleSubmit.

// В onChange обработчике поля ввода текста, мы обновляем локальное состояние taskText при изменении текста в поле ввода.

// connect: С помощью этой функции мы связываем компонент TaskForm с Redux. 
// Мы передаем null в качестве первого аргумента, так как этот компонент не нуждается в чтении состояния Redux напрямую.
//  Второй аргумент - это объект, где мы передаем функцию addTask из действий Redux, чтобы компонент TaskForm 
//  мог вызывать ее для добавления задачи.