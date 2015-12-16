<aura:application template="todo:template">

  <aura:attribute name="todoItems" type="Object[]" default="[]" />

  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo:addTodo todoItems="{!v.todoItems}" />
    </header>
    <div class="main">
      <todo:todoList
        todoItems="{!v.todoItems}"
      />
    </div>
    <footer class="footer">
      <todo:todoFilter />
    </footer>
  </section>

</aura:application>
