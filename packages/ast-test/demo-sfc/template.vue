<template>
    <div v-if="visible">纯文本</div>
</template>

<script>
export default {
    data() {
        return {
            visible: true
        }
    }
}
</script>

<style lang="css">
div {
    margin: 0;
    padding: 0;
}
</style>
