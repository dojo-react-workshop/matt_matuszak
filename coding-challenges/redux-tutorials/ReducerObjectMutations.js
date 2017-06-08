import { createStore } from 'redux'

const ReducerObjectMutations = (myObject) => {

    const childrenArray = myObject.children.concat('joel')

    return Object.assign({}, myObject, {name: 'joe', children: childrenArray})
}

export default ReducerObjectMutations
