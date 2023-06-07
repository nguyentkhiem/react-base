import * as slice from './slice';
import saga from './saga';

export const { increment, incrementSaga, incrementSuccces, decrement, incrementByAmount } = slice.actions;
export { saga };
export default slice.reducer;
