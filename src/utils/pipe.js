const applyFn = (state, fn)  => fn(state)

const pipe = (fns, state) => fns.reduce(applyFn, state)

export default pipe