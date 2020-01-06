<template>
    <div>
        <module :key="item"/>
    </div>
</template>

<script>
    import module from '../../components/module'

    export default {
        name: "index",
        components: {module},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
