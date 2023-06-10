<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="movie">
            {{ connect() }}
        </div>
    </div>
</template>

<script setup>
import axios from "axios";

const connect = async () => {
    await axios
        .get("http://localhost:3000/movies/647fc802a62e2f90de540458")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
};
// console.log(connect())

</script>

<style lang="scss" scoped>

</style>
