({

  filterVisibleItems: function (todoList, visibilityFilter) {
    if (visibilityFilter === 'COMPLETED') {
      return todoList.filter(function (todoItem) {
        return todoItem.completed;
      });
    } else if (visibilityFilter === 'ACTIVE') {
      return todoList.filter(function (todoItem) {
        return !todoItem.completed;
      });
    } else {
      // return all by default
      return todoList;
    }
  },

  setVisibleItems: function (component, helper) {
    var visibleItems = helper.filterVisibleItems(
      component.get('v.todoItems'),
      component.get('v.visibilityFilter')
    );
    component.set('v.visibleItems', visibleItems);
  }

})
