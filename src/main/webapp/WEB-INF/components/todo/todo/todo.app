<aura:application template="todo:template">

  <aura:attribute name="todoItems" type="Object[]" default="[]" />
  <aura:attribute name="activeTodoCount" type="Integer" default="0" />

  <aura:handler name="init" value="{!this}" action="{!c.init}" />

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
      <!-- It seems we lose space between consecutive expressions -->
      <span class="todo-count">{!v.activeTodoCount} {!v.activeTodoCount == 1 ? ' item' : ' items'}  left</span>
      <todo:todoFilter />
    </footer>
  </section>

</aura:application>
