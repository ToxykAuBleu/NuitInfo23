<template>
    <div
        class="flex justify-between items-center text-3xl dark:bg-neutral-800 bg-gray-200 dark:text-white py-2 px-4">
        <nuxt-link to="/" class="hover:opacity-75">
            <img
                src="~/assets/SVG/Logo_EcoNavySombre.svg"
                alt="EcoNavy Logo"
                class="w-50 h-20 dark:block hidden" />
            <img
                src="~/assets/SVG/Logo_EcoNavyClair.svg"
                alt="EcoNavy Logo"
                class="w-50 h-20 dark:hidden block" />
        </nuxt-link>
        <div class="flex p-4 px-8 space-x-12 pr-8">
            <nuxt-link to="/quiz" class="hover:underline">Quiz</nuxt-link>
            <nuxt-link to="/a-propos" class="hover:underline"
                >À propos</nuxt-link
            >
        </div>
    </div>
    <div class="dark:bg-neutral-700 bg-gray-100 dark:text-white text-green-800">
        <slot />
    </div>

    <footer
        class="flex flex-col bg-gray-200 dark:bg-neutral-800 justify-center items-center text-3xl dark:text-white py-2 px-4"
    >
        <img
            src="~/assets/SVG/Logo_EcoNavySombre.svg"
            alt="EcoNavy Logo"
            class="w-50 h-20 dark:block hidden" />
        <img
            src="~/assets/SVG/Logo_EcoNavyClair.svg"
            alt="EcoNavy Logo"
            class="w-50 h-20 dark:hidden block" />
        <p class=" text-xs">Développé avec ❤️ par les Infromagiciens</p>
    </footer>
</template>

<script setup></script>

<style scoped></style>
