import React, { useState, useEffect } from 'react';

import store from '../store'

export default function Square() {
  const [inputValue, setInputValue] = useState(store.get('inputValue'))

  useEffect(() => {
    store.listen('inputValue', value => setInputValue(value))
  }, [])

  function handleClick() {
    store.update('inputColor', '#CCC')
  }

  return (
    <div className="square" onClick={handleClick}>
      {inputValue}
    </div>
  )
}
