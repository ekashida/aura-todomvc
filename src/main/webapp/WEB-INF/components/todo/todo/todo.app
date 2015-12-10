<aura:application template="todo:template">

  <aura:attribute name="todoItems" type="Object[]" default="[]" />
  <aura:attribute name="visibilityFilter" type="String" default="ACTIVE" description="Possible values are 'ALL', 'ACTIVE', and 'COMPLETED'" />

  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo:addTodo todoItems="{!v.todoItems}" />
    </header>
    <div class="main">
      <todo:todoList todoItems="{!v.todoItems}" visibilityFilter="{!v.visibilityFilter}" />
    </div>
    <footer class="footer">
      <span class="todo-count">1 item left</span>
      <todo:todoFilter visibilityFilter="{!v.visibilityFilter}" />
    </footer>
  </section>

</aura:application>
