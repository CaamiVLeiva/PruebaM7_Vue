<template>
    <div class="parent-component-wrapper">
        <h1 class="received-text">Texto recibido: </h1>
        <h2>{{ receivedText }}</h2>
        <ChildComponent @send-text="updateText" />
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            receivedText: ''
        };
    },
    methods: {
        updateText(text) {
            this.receivedText = text;
        }
    }
};
</script>

<style scoped>
.parent-component-wrapper {
    background-color: #ffffff; /* Fondo del componente */
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    text-align: center; /* Centra el texto */
}

.received-text {
    font-size: 28px; /* Tamaño del texto */
    color: #000000; /* Color del texto */
}

h2{
    font-size: 24px; /* Tamaño del texto */
    color: darkblue;
    margin-bottom: 20px;
}
</style>
