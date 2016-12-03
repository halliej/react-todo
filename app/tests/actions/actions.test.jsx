var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate the search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate the add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      searchText: 'Thing to do'
    };
    var res = actions.addTodo(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate the toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate the toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
