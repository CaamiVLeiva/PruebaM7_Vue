<template>
    <div class="communication-container">
        <ParentComponent class="parent-component-wrapper" />
    </div>
</template>

<script>
import ParentComponent from '@/components/ParentComponent.vue';

export default {
    components: { ParentComponent },
};
</script>

<style scoped>
.communication-container {
    padding: 20px;
    background-color: #9bbfe2;
    border-radius: 12px;
    margin: 40px auto;
    max-width: 900px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
