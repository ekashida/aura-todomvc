# aura-todomvc

Newb implementation of a [TodoMVC][] application using [Aura][] and [Redux][]

## Interesting Observations

- Significant reduction in the number of declared component attributes
- The only required attributes are the ones used in the HTML in the .cmp file
- The only place attributes should be set is in setState()
- A component should extend the provider if it wants to receive state change notifications
- If a component will only dispatch actions it should include the redux:redux
  library (it does not need to extend the provider)
- We don't have to implement (re)render logic or attribute change handlers to
  avoid duplicating state across attributes; we can do this using pure
  functions in the state selector
- Testing becomes drastically easier as no mocking/stubbing is required

## Redux Library

To import the redux library, add the following declaration:

```xml
<aura:import library="redux:redux" property="Redux" />
```

To create an action and dispatch it in a helper method:

```js
({
  onClick: function (text) {
    var action = this.Redux.actionCreator.addTodo(text);
    this.Redux.store.dispatch(action);
  }
})
```

See the [addTodo][] component for an example.

## Redux Provider

To subscribe to state changes, extend the redux provider and expose a `setState()` method:

```xml
<aura:component extends="redux:provider">
  <aura:method name="setState" action="{!c.setState}" access="PUBLIC">
    <aura:attribute name="state" type="Object" />
  </aura:method>
</aura:component>
```

Whenever a dispatched action results in an update to the state, your `c.setState()` handler
will receive the next state:

```js
({
  setState: function (component, event, helper) {
    var state = event.getParam('arguments').state;
    // update your component attributes using component.set()
  }
})
```

A component can have the provider select the parts of the application state it is interested by
exposing a `selectState()` method:

```xml
<aura:method name="selectState" action="{!c.selectState}" access="PUBLIC">
  <aura:attribute name="appState" type="Object" />
  <aura:attribute name="callback" type="Object" />
</aura:method>
```

Return the parts of the state that your component is interested in:

```js
({
  selectState: function (component, event) {
    var args = event.getParam('arguments');
    args.callback({
      visibilityFilter: args.appState.visibilityFilter
    });
  }
})
```

See the [todoFilter][] component for an example.

[addTodo]: https://github.com/ekashida/aura-todomvc/tree/master/src/main/webapp/WEB-INF/components/todo/addTodo
[Aura]: https://github.com/forcedotcom/aura
[Redux]: http://redux.js.org/index.html
[todoFilter]: https://github.com/ekashida/aura-todomvc/tree/master/src/main/webapp/WEB-INF/components/todo/todoFilter
[TodoMVC]: http://todomvc.com/
