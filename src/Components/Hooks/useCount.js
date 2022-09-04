import { useState } from 'react';

export const useCount = (orderCount) => {
  const [count, setCount] = useState(orderCount ? orderCount : 1);

  const onChange = e => setCount(e.target.value);

  return { count, setCount, onChange };
};
