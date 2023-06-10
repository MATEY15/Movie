<script setup>

import {ref, onMounted} from 'vue'

const sinCosItem = ref(null);
const amplitude = ref(null);
const time = ref(0);
const container = 1440;
const posX = ref(null);

onMounted(() => {
    console.log(sinCosItem.value.clientHeight)
    amplitude.value = -sinCosItem.value.clientHeight * 2;
    animateDelay();
});

function animateDelay() {
    // Здесь разобраться!
    time.value += 0.05;

    if(time.value * 50 >= container) {
        time.value -= 0.05;
    }
    // else if(time.value * 50 <= 0) {
    //     time.value += 0.05;
    // }
    console.log(time.value * 50)
    transform()
    requestAnimationFrame(animateDelay);
}

function transform() {

    // posX



    return `transform: translate(${time.value * 50}px, ${Math.sin(time.value) * amplitude.value}px)` // Sin
    // return `transform: translate(${time.value * 50}px, ${Math.cos(time.value) * amplitude.value}px)`; // Cos
}

</script>

<template>
    <div class="sinCos">
        <div class="sinCos__wrapper">
            <div class="sinCos__item" ref="sinCosItem" :style="transform()"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

body {
    background: #A5AEEB;
}

input {
    min-height: 40px;
    width: 100%;
    max-width: 400px;
    padding: 0 10px;
    background: #282B51;
    border: 1px solid #202443;
    border-radius: 5px;
    color: #ffffff;
    outline: none;
}

button {
    background: #2F3569;
    color: #1BE7FB;
    border-radius: 5px;
    min-height: 40px;
    min-width: 240px;
    padding: 0 10px;
    border: 1px solid transparent;
    cursor: pointer;
    box-shadow: 0 0 16px 1px rgba(0, 0, 0, .2);
}

$this: '.sinCos';

#{$this} {
    position: relative;
    background: #202443;
    border-radius: 40px;
    min-height: 400px;
    max-width: 1440px;
    margin: 0 auto;
    width: calc(100% - 40px);

    &__item {
        position: absolute;
        top: calc(50% - 40px);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #f69152;
    }
}


</style>
