import { useState } from 'react';


export const useChoices = (openItem) => {
  const [choice, setChoice] = useState();

  const changeChoices = e => {
    setChoice(e.target.value);
  }

  return { choice, changeChoices };

};
