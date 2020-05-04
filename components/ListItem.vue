<template>
    <div class="list-item">
        <slot />
        <button @click="$emit('deleteTodo')">delete</button>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>