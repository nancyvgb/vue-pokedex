<template>
    <div class="background">
    <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.background {
    background-image:url('../assets/container_bg.png');
     background-size: cover;
     height: 100%;
     overflow: hidden;

}
</style>