<template>
    <div class="list">
        <ListItem 
            v-for="(thanksMsg, index) in thanksMsgs"
            v-bind:key="index"
            :thanksMsg=thanksMsg />
    </div>
</template>

<script>
import ListItem from '~/components/ListItem.vue';

export default {
    components: {
        ListItem,
    },
    props: ['thanksMsgs'],
    methods: {
    },
}
</script>

<style lang="scss" scoped>
</style>