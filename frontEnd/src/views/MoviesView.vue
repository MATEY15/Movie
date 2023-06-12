<template>
    <div class="layout">
        <div class="movie__wrapper">
            <h1>This is about page</h1>
            <div class="movie">
                <div
                    v-for="item in allMovies"
                    class="movie__item"
                >
                    <div class="movie__item-image">
                        <picture>
                            <img :src="item.poster" :alt="item.title">
                        </picture>
                    </div>
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

    &__wrapper {
        padding-top: 60px;
    }

    &__item {
        background: #fff;
        border-radius: 32px;
        max-width: 400px;
        width: 100%;
        padding: 20px;
        box-shadow: 0 40px 40px rgba(0, 0, 0, 0.1);
        margin: 0 auto;

        &-image {
            position: relative;
            height: 410px;
            border-radius: 24px;
            overflow: hidden;

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top center;
            }
        }

        img {
            max-width: 100%;
        }
    }
}

</style>
