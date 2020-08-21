import React from 'react';

import Counter from './Counter'

const App = () => {
  return(
    <>
      <Counter start={5} interval={1000} />
      <Counter start={21} interval={1500} />
      <Counter start={-29} interval={500} />
    </>
  )
}

export default App