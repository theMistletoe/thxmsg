<template>
  <div class="page">
    <Form @todoAdded="newTodo" />
    <List :todos="todos" />
  </div>
</template>

<script>
  import List from '~/components/List.vue'
  import Form from '~/components/Form.vue'

  export default {
    components: {
      List,
      Form,
    },
    data() {
      return {
        todos: ['TASK1', 'TASK2', 'TASK3'], // init tasks
      }
    },
    methods: {
      newTodo (todo) {
        this.todos.push(todo);
      }
    }
  }

</script>

<style lang="scss">
</style>
