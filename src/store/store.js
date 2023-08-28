import { createStore } from 'redux';

// Начальное состояние хранилища
const initialState = {
  tasks: [], // Массив задач, изначально пустой
};

// Редьюсер - определяет, как изменяется состояние приложения в ответ на действия (actions)
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      // Добавление новой задачи к массиву задач
      return {
        ...state, // Копируем текущее состояние
        tasks: [...state.tasks, action.payload], // Добавляем новую задачу
      };
    case 'REMOVE_TASK':
      // Удаление задачи из массива задач по ID
      return {
        ...state, // Копируем текущее состояние
        tasks: state.tasks.filter(task => task.id !== action.payload), // Фильтруем задачи
      };
    default:
      // В случае неизвестного действия, возвращаем текущее состояние
      return state;
  }
}

// Создание Redux-хранилища с использованием редьюсера
const store = createStore(rootReducer);

// Экспорт созданного хранилища для использования в других частях приложения
export default store;
