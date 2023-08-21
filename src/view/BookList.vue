<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBooks } from '../hooks/book'
import { usePagination } from '../hooks/pagination';
import Pagination from '../components/Pagination.vue';

const { getRecordsForPage } = usePagination()
const router = useRouter()
const { books, getBooks, goToBook } = useBooks()

onBeforeMount(getBooks)
onMounted(()=>{
    getRecordsForPage()
    
})


</script>
<template>
    <h1 class="m-5 text-4xl font-extrabold leading-none tracking-tight text-white text-center">
        Listado de libros
    </h1>
    <main class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="border-amber-500 border-b">
                    <th scope="col" class="px-6 py-4">titulo</th>
                    <th scope="col" class="px-6 py-4">género</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id" @click="goToBook(book.id)"
                    class="border-b bg-gray-900 border-gray-700  hover:bg-gray-800 cursor-pointer">
                    <td class="px-6 py-4 ">{{ book.title }}</td>
                    <td class="px-6 py-4 ">{{ book.genre }}</td>
                </tr>
            </tbody>
        </table>
    </main>
    <Pagination class="px-24" :total="books.length" :per-page="5"/>
    <br>
</template>