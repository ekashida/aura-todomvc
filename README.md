# aura-todomvc

Newb implementation of a [TodoMVC][] application using [Aura][] and [Redux][]

## Interesting Observations

- The only required attributes are the ones used in the HTML in the .cmp file
- The only place attributes should be set is in helper.render()
- A component should extend the provider if it wants to receive state change notifications
- If a component will only dispatch actions, it does not need to extend the provider
- We don't have to implement (re)render logic or attribute change handlers to
  avoid duplicating state across attributes; we can do this using pure
  functions in the state selector

[Aura]: https://github.com/forcedotcom/aura
[Redux]: http://redux.js.org/index.html
[TodoMVC]: http://todomvc.com/
