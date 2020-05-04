<template>
    <div class="form">
        <form @submit.prevent="todoAdd">
            <label>TODO</label>
            <input type="text" v-model="todo">
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: '',
        }
    },
    methods: {
        todoAdd () {
            this.$emit('todoAdded', this.todo);
            this.todo = '';
        }
    },
}
</script>

<style lang="scss" scoped>
</style>