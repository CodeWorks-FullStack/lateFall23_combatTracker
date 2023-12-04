import { Character } from './models/Character.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


// NOTE ours




characters = [
  new Character('Flint', 'Fighter', 25),
  new Character('Wizzy', 'Bard', 18),
  new Character('Thok', 'Barbarian', 45)
]











// 

}

export const AppState = createObservableProxy(new ObservableAppState())
console.warn('📈',AppState) // add this in to SEE the appstate on load, look inside [[TARGET]]