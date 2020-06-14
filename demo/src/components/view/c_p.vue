<template>
    <div>
        <button @click="changekey">子组件</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aa:"e2e2e2e2"
        }
    },
    methods: {
        changekey(){
            this.$emit("titlekey",this.aa)
        }
    }
}
</script>
<style scoped>

</style>