<template>
    <div class="layout">
        <div class="about">
            <h1>This is about page</h1>
            <div class="movie">
                <div
                    v-for="item in allMovies"
                    class="movie__item"
                >
                    <h1>{{ item.title }}</h1>
                    <ul>
                        <li
                            v-for="cast in item.cast"
                        >{{cast}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import {useStore} from "vuex";

const store = useStore();

const allMovies = computed(
    () => {
        return store.getters['movieStore/getMovies'];
    }
)

onMounted(() => {
    store.dispatch('movieStore/asyncGetMovie')
})

</script>

<style lang="scss" scoped>

$this: '.movie';

#{$this} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 4fr));
    grid-gap: 20px 20px;

    //columns: 4 auto;
    //column-gap: 20px;

    &__item {
        border: 1px solid #6db7ef;
    }
}

</style>
