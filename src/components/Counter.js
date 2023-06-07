import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => {
    return state.counter
  });

  const isShown = useSelector(state => {
    return state.isShown
  })

  const increamentHandler = ()=> {
    console.log("11111");
    dispatch({type:'increment'})
  }

  const decreamentHandler = ()=> {
    console.log("22222");
    dispatch({type:'decrement'})
  }

  const increaseHandler = ()=> {
    dispatch({type:'increase',payload:5})
  }

  const toggleCounterHandler = () => {
    dispatch({type:'toggleCounter'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={increamentHandler}>Increment</button>
        <button onClick={decreamentHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
