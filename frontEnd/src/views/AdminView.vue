<template>
    <div class="layout">
        <div class="movie-add">
            <div class="heading">
                <h1>Add movie</h1>
            </div>
            <div class="movie-add__wrapper">
                <div class="movie-add__form">
                    <form action="">
                        <div class="movie-add__input">
                            <Input
                                name="name"
                                label="Name"
                                v-model:value="v.firstName.$model"
                                :error="v.firstName.$errors"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import {useStore} from "vuex";
import {useVuelidate} from '@vuelidate/core'
import {helpers, minLength, required, email, numeric} from '@vuelidate/validators'
import Input from "@/components/Input.vue";

const store = useStore();

const firstName = ref('')
const emailName = ref('')
const fillNumber = ref('')

const rules = computed(() => ({
    firstName: {
        minLength: helpers.withMessage(`Введите больше 5 симв..`, minLength(5))
    },
    fillNumber: {
        numeric: helpers.withMessage(`Только цифры`, numeric)
    },
    emailName: {
        email: helpers.withMessage(`Неверный Email`, email),
        required: helpers.withMessage(`Обьязательное поле`, required),
        minLength: helpers.withMessage(`Введите больше 5 симв..`, minLength(5))
    },
}))

const v = useVuelidate(rules, {firstName, emailName, fillNumber})
console.log(v)

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

$this: '.admin';

#{$this} {
}

</style>
