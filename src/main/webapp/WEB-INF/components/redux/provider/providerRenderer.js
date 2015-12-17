({

  unrender: function (component) {
    var concrete = component.getConcreteComponent();
    if (concrete.unsubscribe) {
      concrete.unsubscribe();
    }
  }

})
