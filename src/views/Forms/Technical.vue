<template>
    <main class="theme">
        <addTechnical/>
    </main>
</template>

<script>
import addTechnical from '@/components/addTechnical.vue'
    export default{
        components: {
            addTechnical
        },
    }
</script>

<style scoped>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 86vh;
        justify-content: center;
    }
</style>