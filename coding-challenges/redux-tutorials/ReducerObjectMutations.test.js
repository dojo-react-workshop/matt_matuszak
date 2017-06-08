import reducerObjectMutations from './ReducerObjectMutations'
import deepFreeze  from 'deep-freeze'


const before = {name: 'matthew', children: ['morgan', 'madison']}
deepFreeze(before)
const after = {name: 'joe', children: ['morgan', 'madison', 'joel']}


test('muttates names and family', () => {
    expect(reducerObjectMutations(before)).toEqual(after);
})
