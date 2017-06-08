import visibilityReducer from './VisibilityReducer'
import deepFreeze  from 'deep-freeze'


test('visibility change', () => {
    const stateBefore = 'ALL';

    const action = {
        type: 'VISIBILITY_FILTER'
        , filter: 'COMPLETED'
    }

    deepFreeze(stateBefore);
    deepFreeze(action);

    const stateAfter = "COMPLETED";
    expect(visibilityReducer(stateBefore, action)).toEqual(stateAfter);
})
