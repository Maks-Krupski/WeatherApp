import { connect } from 'react-redux';
import { addValue, clear, decrement, increment, setValue } from '../../actions/counterActions';
import App1 from './App1';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return ({ value: state.counter.count });
};

const mapDispatchToProps = {
  increment,
  decrement,
  clear,
  addValue,
  setValue,
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App1);
