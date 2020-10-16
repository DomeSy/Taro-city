const win = (typeof window !== 'undefined' ? window : global)
const localStorageName = 'localStorage'
const storage = win[localStorageName]

const store = {
  disabled: false,
  set (key, val) {
    if (val === void 666) {
      return store.remove(key)
    }
    storage.setItem(key, store.serialize(val))
    return val
  },
  get (key, defaultVal) {
    const val = store.deserialize(storage.getItem(key))
    return (val === undefined ? defaultVal : val)
  },
  remove (key) {
    storage.removeItem(key)
  },
  clear () {
    storage.clear()
  },
  has (key) {
    return store.get(key) !== void 666
  },
  forEach (callback) {
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i)
      callback(key, store.get(key))
    }
  },
  getAll () {
    const ret = {}
    store.forEach((key, val) => {
      ret[key] = val
    })
    return ret
  },
  serialize (value) {
    return JSON.stringify(value)
  },
  deserialize (value) {
    if (typeof value !== 'string') {
      return
    }
    try {
      return JSON.parse(value)
    } catch (err) {
      return value || void 666
    }
  }
}

try {
  const testKey = '__store__'
  store.set(testKey, testKey)
  if (store.get(testKey) !== testKey) {
    store.disabled = true
  }
  store.remove(testKey)
} catch (err) {
  store.disabled = true
}
store.enabled = !store.disabled

export default store
