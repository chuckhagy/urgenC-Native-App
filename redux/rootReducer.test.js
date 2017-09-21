import rootReducer from './rootReducer'
import data from '../mock-data';

describe('create item testing', () => {
  it('creates one new item', () => {
    const action = {
      type: "CREATE_ITEM",
      newItem: { ...data.items[0] }
    }
    
    const currentState = {
      items: [data.items[1]],
    }
    
    const nextState = {
      items: [data.items[1], action.newItem],
    }
    
    expect(rootReducer(currentState, action)).toEqual(nextState)
  })
})

describe('delete item testing', () => {
  it('deletes one item', () => {
    const action = {
      type: "DELETE_ITEM",
      id: data.items[0].id
    }
        
    const currentState = {
      items: [data.items[0], data.items[1]],
    }
    
    const nextState = {
      items: [data.items[1]],
    }
    
    expect(rootReducer(currentState, action)).toEqual(nextState)
  })
})

describe('get items testing', () => {
  it('gets all items', () => {
    const action = {
      type: "GET_ITEMS",
      items: [...data.items]
    }
    
    const currentState = {
      items: []
    }
    
    const nextState = {
      items: data.items,
      "modalOn": true,
    }
    
    expect(rootReducer(currentState, action)).toEqual(nextState)
  })
})

describe('update items testing', () => {
  it('updates one item', () => {
    const action = {
      type: "UPDATE_ITEM",
      newItem: {...data.items[1], title: 'cats'}
    }
    
    const currentState = {
      items: [data.items[1]],
      modalOn: true
    }
    
    const nextState = {
      items: [{...data.items[1], title: 'cats'}],
      modalOn: false
    }
    
    expect(rootReducer(currentState, action)).toEqual(nextState)
  })
})

describe('dfault case check - return current state', () => {
  it('returns DEFAULT case of currentState', () => {
    const action = {
      type: "carAction",
      newItem: { ...data.items[0] }
    }
    
    const currentState = {
      items: [data.items[0], data.items[1]]
    }
    
    const nextState = {
      items: [data.items[0], data.items[1]]
    }
    
    expect(rootReducer(currentState, action)).toEqual(nextState)
  })
})
