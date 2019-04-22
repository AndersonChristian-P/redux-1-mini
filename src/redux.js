export function createStore(reducer) {
  let callbacks = []
  let state = reducer(undefined, { type: `SET_INITIAL_STATE` })


  return {
    subscribe(cb) {
      callbacks.push(cb)
    },

    getState() {
      return { ...state }
    },

    dispatch(action) {
      state = reducer(state, action)
      callbacks.forEach(cb => cb())
    }
  }
}