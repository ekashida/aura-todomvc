<aura:application template="todo:template">

  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo:addTodo />
    </header>
    <div class="main">
      <todo:todoList />
    </div>
    <footer class="footer">
      <todo:todoFilter />
    </footer>
  </section>

</aura:application>
