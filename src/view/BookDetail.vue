<script setup>
import { onMounted } from 'vue'
import { useBooks } from '../hooks/book'
import { useRouter } from 'vue-router'

const router = useRouter()
const { book, getBook } = useBooks()

onMounted(() => {
    const { id } = router.currentRoute.value.params
    getBook(id)
})

</script>
<template>
    <section class="bg-white relative overflow-x-auto shadow-md sm:rounded-lg mt-48">
        <h2 class="m-5 text-2xl font-extrabold leading-none tracking-tight text-black">
            {{ book.title ?? book.error }}
        </h2>
        <div v-if="book.title" class="m-5">
            <div>
                <span class="font-bold">Descripción: </span>
                <span>{{ book.description }}</span>
            </div>
            <div>
                <span class="font-bold">Autor: </span>
                <span>{{ book.autor }}</span>
            </div>
            <div>
                <span class="font-bold">Género: </span>
                <span>{{ book.genre }}</span>
            </div>
        </div>
    </section>
</template>