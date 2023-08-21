import { ref } from 'vue'
import { useRouter } from 'vue-router'
/**
 *     EJEMPLO:
    * *   {
    *    "id": 1,
    *    "book": "El Secreto de la Montaña",
    *    "genre": "Aventura"
    *    }
    */
export function useBooks(){
    const books = ref([])
    const router = useRouter()

    const book = ref({
        id: 0,
        title: '',
        description: '',
        autor: '',
        genre: ''
    })

    function goToBook(id) {
        router.push({ path: '/book/' + id })
    }

    function getBooks(){
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => books.value = data)
        .catch(err => console.log(err))
    }

    function getBook(id){
        fetch(`http://localhost:5000/books/details/${id}`)
        .then(res => res.json())
        .then(data => book.value = data)
        .catch(err => console.log(err))

    }

    return { books ,book ,goToBook ,getBooks ,getBook }
}