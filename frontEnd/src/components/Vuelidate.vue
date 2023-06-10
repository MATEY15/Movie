<script setup>

import {reactive, ref, onMounted, computed} from 'vue'
import {useVuelidate} from '@vuelidate/core'
import {helpers, minLength, required, email, numeric} from '@vuelidate/validators'

import Input from '@/components/Input.vue'

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

const submitForm = () => {
  v.value.$touch()
  console.log(v.value.$error)
  if (v.value.$error) return
  console.log('Form submitted')
}

</script>

<template>
  <div class="vuelidate">
    <div class="vuelidate__wrapper">
      <h1>Vuelidate</h1>
      {{ v }}
      {{ v.emailName.$model }}
      {{ v.emailName.$error }}
      <br><br><br>

      <form
          action=""
          class="vuelidate__form"
          @submit.prevent="submitForm"
      >
        <div class="vuelidate__form-item">
          <Input
              name="name"
              label="Name"
              v-model:value="v.firstName.$model"
              :error="v.firstName.$errors"
          />
        </div>
        <div class="vuelidate__form-item">
          <Input
              name="name"
              label="Email"
              v-model:value="v.emailName.$model"
              :error="v.emailName.$errors"
          />
        </div>
        <div class="vuelidate__form-item">
          <Input
              name="name"
              label="Только цифры"
              v-model:value="v.fillNumber.$model"
              :error="v.fillNumber.$errors"
          />
        </div>
        <div class="vuelidate__form-item">
          <label for="">Name</label>
          <input
              type="text"
              :class="['vuelidate__input', v.firstName.$error ? 'vuelidate__input--error': '']"
              v-model="v.firstName.$model"
          >
        </div>
        <div class="vuelidate__form-item">
          <label for="">Email</label>
          <input
              type="email"
              class="vuelidate__input"
              :class="['vuelidate__input', v.emailName.$error ? 'vuelidate__input--error': '']"
              v-model="v.emailName.$model"
          >
          <div class="form-error">{{v.emailName.$message}}</div>
        </div>
        <div class="vuelidate__form-item">
          <label for="">Password</label>
          <input type="text" class="vuelidate__input">
        </div>
        <button
            type="submit"
            class="vuelidate__submit"
        >
          Send form
        </button>
      </form>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$this: '.vuelidate';
#{$this} {
  text-align: left;

  &__wrapper {
    max-width: 500px;
    margin: 0 auto;
  }

  &__form {
    &-item {
      margin-bottom: 20px;
    }
  }

  label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
  }

  &__input {
    width: 100%;
    height: 26px;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    outline: none;
    padding: 10px;

    &--error {
      outline: 1px solid #ec5959;
    }
  }

  &__submit {
    min-width: 260px;
    height: 50px;
    background: #35495E;
    font-size: 14px;
    color: #fff;
    border: none;
  }

}


</style>
