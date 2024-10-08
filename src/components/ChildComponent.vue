<template>
    <div>
        <input v-model="inputText" placeholder="Ingresa texto" />
        <button @click="sendText">Enviar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: ''
        }
    },
    methods: {
        sendText() {
            this.$emit('send-text', this.inputText);
            this.inputText = '';
        }
    }
}
</script>