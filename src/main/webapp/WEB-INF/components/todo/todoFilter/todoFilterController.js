({

  onClick: function (component, event, helper) {
    var type = event.target.dataset.type;
    component.set('v.visibilityFilter', type);
  }

})
