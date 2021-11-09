import TaskApi from './tasksApi/provider';

async function getInitialState() {
  let data = await TaskApi.getTask();

  return data;
}

export default getInitialState;
