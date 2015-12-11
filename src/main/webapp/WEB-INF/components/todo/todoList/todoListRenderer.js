({

  rerender: function (component, helper) {
    this.superRerender();
    helper.setVisibleItems(component);
  }

})
