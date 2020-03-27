import React, { useState, useEffect } from 'react';

import store from '../store'

export default function Input() {
  const [inputValue] = useState(store.get('inputValue'))
  const [inputColor, setInputColor] = useState(store.get('inputColor'))

  useEffect(() => {
    store.listen('inputColor', color => setInputColor(color))
  }, [])

  function handleChange(event) {
    store.update('inputValue', event.target.value)
  }

  return (
    <input
      type="text"
      className="input"
      placeholder="Digite um valor"
      defaultValue={inputValue}
      onChange={handleChange}
      style={{ background: inputColor }}
    />
  )
}

// @lesnock/simple-store
