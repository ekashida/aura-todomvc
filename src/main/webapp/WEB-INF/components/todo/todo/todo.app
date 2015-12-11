<aura:application template="todo:template">

  <aura:attribute name="todoItems" type="Object[]" default="[]" />
  <aura:attribute name="visibilityFilter" type="String" default="ACTIVE" description="Possible values are 'ALL', 'ACTIVE', and 'COMPLETED'" />
  <aura:attribute name="activeTodoCount" type="Integer" default="0" />

  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo:addTodo todoItems="{!v.todoItems}" />
    </header>
    <div class="main">
      <todo:todoList
        todoItems="{!v.todoItems}"
        updateActiveTodoCount="{!c.updateActiveTodoCount}"
        visibilityFilter="{!v.visibilityFilter}"
      />
    </div>
    <footer class="footer">
      <span class="todo-count">{!v.activeTodoCount} item(s) left</span>
      <todo:todoFilter visibilityFilter="{!v.visibilityFilter}" />
    </footer>
  </section>

</aura:application>
