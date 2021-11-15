import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCase = useSelector(state => state.counter.showCase);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggel());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCase && <div>
        <div className={classes.value}>{counter}</div>
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increment by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
