<template>
    <div class="pb-4" v-if="articles">
        <div class="pt-6 pl-6 mb-4">
            <h1 class="text-4xl">Dernières actualités</h1>
            <p class="italic">Données du Ministère de l'écologie</p>
        </div>
        <!-- carousel -->
        <div class="mb-2 carousel mr-10">
            <div class="carousel-inner">
                <a
                    v-for="(article, key) in articles"
                    :key="key"
                    :href="article.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-center w-full mx-5 my-2 border-2 p-2 dark:border-green-800 py-4 border-green-400 dark:bg-green-800 dark:text-white text-green-800 border-radius-5 rounded px-2 flex items-center justify-center dark:hover:bg-green-700 hover:bg-green-300 carousel-item"
                    :class="key == showedCarousel ? 'active' : ''">
                    {{ article.title }}
                </a>
            </div>
            <button
                @click="prevCarousel"
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev">
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                @click="nextCarousel"
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next">
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    
    <!-- Informations -->
    <HomePage />
</template>

<script setup>
    import makeRequest from "~/components/functions/getRSS.js";
    import HomePage from "~/components/HomePage.vue";

    const articles = ref([]);

    async function fetchArticles() {
        try {
            const start = 0;
            const end = 10;
            articles.value = await makeRequest(start, end);
            console.log(articles.value);
        } catch (error) {
            console.error(error);
        }
    }

    const showedCarousel = ref(0);

    async function nextCarousel() {
        if (showedCarousel.value < Object.keys(articles.value).length - 1) {
            showedCarousel.value++;
        } else {
            showedCarousel.value = 0;
        }
    }

    async function prevCarousel() {
        if (showedCarousel.value > 0) {
            showedCarousel.value--;
        } else {
            showedCarousel.value = Object.keys(articles.value).length - 1;
        }
    }

    onMounted(fetchArticles);
</script>

<style scoped>
    .carousel {
        position: relative;
    }

    .carousel.pointer-event {
        touch-action: pan-y;
    }

    .carousel-inner {
        position: relative;
        width: 100%;
    }
    .carousel-inner::after {
        display: block;
        clear: both;
        content: "";
    }

    .carousel-item {
        position: relative;
        display: none;
        float: left;
        margin-right: -100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transition: transform 0.6s ease-in-out;
    }

    .carousel-item.active,
    .carousel-item-next,
    .carousel-item-prev {
        display: block;
    }

    .carousel-control-prev,
    .carousel-control-next {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15%;
        padding: 0;
        color: #fff;
        text-align: center;
        background: none;
        border: 0;
        opacity: 0.5;
        transition: opacity 0.15s ease;
    }

    .carousel-control-prev:hover,
    .carousel-control-prev:focus,
    .carousel-control-next:hover,
    .carousel-control-next:focus {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: 0.9;
    }

    .carousel-control-prev {
        left: 0;
    }

    .carousel-control-next {
        right: 0;
    }
</style>
