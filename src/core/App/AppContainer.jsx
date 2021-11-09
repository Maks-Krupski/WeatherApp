import { connect } from 'react-redux';
import { addTask, getTasksThunk } from '../../actions/tasksActions';
import App from './App';

/* const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return ({ value: state.tasks.tasks });
}; */

const mapDispatchToProps = {
  addTask,
  getTasksThunk,
};

export const AppContainer = connect(null, mapDispatchToProps)(App);
