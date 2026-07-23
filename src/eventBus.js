// Vue 3 removed the $on/$emit event-bus API. This is a tiny standalone emitter
// (no new dependency) exposing both on/off/emit/once and their $-prefixed aliases,
// so existing call sites keep working.
function createEmitter () {
  const all = new Map()
  const on = (type, handler) => {
    const list = all.get(type) || all.set(type, []).get(type)
    list.push(handler)
  }
  const off = (type, handler) => {
    const list = all.get(type)
    if (list) all.set(type, list.filter((h) => h !== handler))
  }
  const emit = (type, ...args) => {
    (all.get(type) || []).slice().forEach((h) => h(...args))
  }
  const once = (type, handler) => {
    const wrap = (...args) => { off(type, wrap); handler(...args) }
    on(type, wrap)
  }
  return { on, off, emit, once, $on: on, $off: off, $emit: emit, $once: once }
}

// Event bus — $on/$off/$once are removed in Vue 3
export const EventBus = createEmitter()
