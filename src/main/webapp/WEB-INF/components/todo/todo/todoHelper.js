({

  setActiveTodoCount: function (component) {
    var activeCount = component.get('v.todoItems').filter(function (item) {
      return !item.completed;
    }).length;
    component.set('v.activeTodoCount', activeCount);
  }

})
