import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'redux-setup/hooks';
import { decrement, increment, incrementByAmount, incrementSaga } from 'redux-setup/counter';
import styles from './counter.module.scss';

const CounterPage: React.FunctionComponent = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<any>(0);

  useEffect(() => {
    setIncrementAmount(counter);
  }, [counter]);

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{counter}</span>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
        <button
          className={styles.button}
          aria-label="Increment value saga"
          onClick={() => dispatch(incrementSaga(incrementAmount))}
        >
          ++
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
