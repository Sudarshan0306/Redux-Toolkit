import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    };
    const increaseHandler = () => {
        dispatch(counterActions.increase(10))
    };
    const decremennHandler = () => {
        dispatch(counterActions.decrement())
    };
    const handleCounter = () => {
        dispatch(counterActions.toggleCounter())
    }

  return (
    <>
    <h1>Redux Counter</h1>
    {
        
        <p> {counter} </p>}
    <div className="">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decremennHandler}> Decrement</button>
    </div>
    <button onClick={handleCounter}> Toggle Counter </button>
    </>

  )
}

export default Counter;