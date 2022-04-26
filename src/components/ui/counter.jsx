import { useState } from 'react';
import { StyledCounter } from './styled';
import React from 'react';

function CounterM({ store }) {
  const [value, setValue] = useState(store.getState().value);
  store.subscribe(() => setValue(store.getState().value));
  return <StyledCounter>{value}</StyledCounter>;
}

const Counter = React.memo(CounterM);

export default Counter;
