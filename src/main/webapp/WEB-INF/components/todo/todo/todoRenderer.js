({

  rerender: function (component, helper) {
    this.superRerender();
    helper.setActiveTodoCount(component);
  }

})
