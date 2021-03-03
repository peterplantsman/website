<template>
    <div class="w-full flex justify-center items-start">
        <contact :control="control" />
        <template>
            <Slide :closeOnNavigation="true" noOverlay right class="sm:hidden font-display font-bold md:text-xl
                 lg:text-2xl">
                <router-link class="hover:text-white" to="/gallery" rel="nofollow">Gallery</router-link>
                <router-link class="hover:text-white" to="/services" rel="nofollow">Services</router-link>
                <router-link class="hover:text-white" to="/contact" rel="nofollow">Contact</router-link>
            </Slide>
        </template>
        <div class="w-full flex flex-col" id="menu" ref="menu">
            <div class="flex flex-row w-4/5 m-auto justify-between my-4">
                <a class="w-1/2 sm:w-1/3" href="index.html">
                    <img src=../../public/assets/images/logo.png>
                </a>
                <div class="hidden sm:flex flex-row items-center w-1/2 justify-between font-display font-bold md:text-xl
                 lg:text-2xl">
                    <router-link v-scroll-to="'#element'" class="hover:text-white" to="/gallery" rel="nofollow">Gallery</router-link>
                    <router-link v-scroll-to="'#element'" class="hover:text-white" to="/services" rel="nofollow">Services</router-link>
                    <a class="p-2 border-black border-2 rounded border-solid hover:bg-white cursor-pointer" @click="contactDisplay" to="#">Contact</a>
                </div>
            </div>
            <div id="underline"
                 class="container w-4/5 mx-auto flex flex-col justify-center items-center align-center">
                <div class="w-full bg-black h-px"></div>
                <div class="mt-1 w-4/5 bg-black h-px"></div>
            </div>
            <Banner/>
        </div>
    </div>
</template>

<script>
    import Banner from "../partials/Banner"
    import { Slide } from 'vue-burger-menu'
    import Contact from "./ContactForm";

    export default {
        components: {
            Banner,
            Slide,
            Contact
        },
        data() {
            return {
                control: false
            }
        },
        methods: {
            contactDisplay() {
                this.control = !this.control
            }
        }
    }
</script>