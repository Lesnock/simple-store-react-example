import Store from '@lesnock/simple-store'

const store = new Store({
  persist: true,
})

// Add initial data
!store.has('inputValue') && store.add('inputValue', 'Inicial')
!store.has('inputColor') && store.add('inputColor', '#FFF')

export default store