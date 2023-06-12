<script setup>

  import {reactive, ref, watch} from 'vue'

  const todoArr = ref(['Task 1', 'Task 2', 'Task 3']);
  const writeTask = ref('');

  function addTask() {
    todoArr.value.unshift(writeTask.value)
    writeTask.value = ''
  }

</script>

<template>
  <div class="toDoList">
    <h1>To Do List</h1>

    <div class="toDoList__wrapper">
      <form
          action=""
          class="toDoList__form"
          @submit.prevent=""
      >
        <p>wordTask - {{ writeTask }}</p>
        <div class="toDoList__form-item">
          <input
              type="text"
              class="toDoList__form-input"
              placeholder="Write now..."
              autocomplete="off"
              v-model="writeTask"
          >
        </div>
        <div class="toDoList__form-item">
          <button
              class="toDoList__form-button"
              @click="addTask"
          >Add Task
          </button>
        </div>


      </form>

      <div class="toDoList__note">
        <div
            class="toDoList__note-item"
            v-for="(item, index) in todoArr"
        >{{ item }}
        </div>
      </div>
    </div>


  </div>
</template>

<style lang="scss" scoped>
body {
  background: #A5AEEB !important;
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

$this: '.toDoList';

#{$this} {
  background: #202443;
  border-radius: 40px;
  min-height: 400px;
  max-width: 1440px;
  margin: 0 auto;
  width: calc(100% - 40px);


  &__form {

    &-item {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}


</style>
