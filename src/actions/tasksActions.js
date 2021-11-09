import TaskApi from '../api/tasksApi/provider';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const FILTER_TASK = 'FILTER_TASK';
export const LOAD_TASK = 'LOAD_TASK';

export const addTask = (value) => ({ type: ADD_TASK, payload: value });
export const removeTask = (value) => ({ type: REMOVE_TASK, payload: value });
export const filterTask = (value) => ({ type: FILTER_TASK, payload: value });
export const loadTask = (value) => ({ type: LOAD_TASK, payload: value });

/* export const getTasksThunk = () => (
  (dispatch) => (
    TaskApi.getTask()
      .then((data) => dispatch(loadTask(data)))
  )
); */

export const getTasksThunk = () => async (dispatch) => {
  await TaskApi.getTask()
    .then((data) => dispatch(loadTask(data)));
};
