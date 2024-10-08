<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

const increment = () => counterStore.increment();
const decrement = () => counterStore.decrement();
</script>

<template>
    <div class="counter-container">
        <h1>Contador: {{ counterStore.count }}</h1>
        <div class="buttons">
            <button @click="increment" class="btn increment-btn">Incrementar</button>
            <button @click="decrement" class="btn decrement-btn">Decrementar</button>
        </div>
    </div>
</template>

<style scoped>
.counter-container {
    text-align: center;
    background-color: #f7f9fc;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 2rem auto;
}

h1 {
    font-size: 2rem;
    color: #34495e;
}

.buttons {
    margin-top: 1.5rem;
}

.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
}

.increment-btn {
    background-color: #2ecc71;
    color: white;
}

.decrement-btn {
    background-color: #e74c3c;
    color: white;
}

.btn:hover {
    opacity: 0.9;
}
</style>
