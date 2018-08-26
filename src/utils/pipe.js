const applyFn = (state, fn)  => fn(state)

const pipe = (fns, state) => state.withMutations(s => fns.reudce(applyFn, s))

export default pipe