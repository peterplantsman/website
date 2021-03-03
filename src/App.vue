<template>
    <div id="app">
        <div>
            <transition
                    appear
                    name="fade"
                    mode="out-in"
                    v-on:before-enter="cookieActive"
                    v-on:after-appear="triggerFadeOut"
                    v-on:after-leave="displaySite"
            >
                <Title :cookie="cookie" v-if="!loaded"/>
            </transition>
            <transition
                    name="fade"
                    mode="in-out"
                    key="1"
            >
                <Menu v-if="loaded && display"/>
            </transition>
            <transition
                    name="morph"
                    mode="out-in"
                    key="2"
            >
                <router-view :sections="sections" id="element" v-if="loaded && display"></router-view>
            </transition>
            <transition
                    name="fade"
                    mode="out-in"
                    key="3"
            >
                <Footer v-if="loaded && display"/>
            </transition>

        </div>
    </div>
</template>

<script>
    import Title from "./components/Title"
    import Menu from "./components/Menu"
    import Footer from "./components/Footer"

    export default {
        name: 'App',
        components: {
            Title,
            Menu,
            Footer,
        },
        data() {
            return {
                loaded: false,
                display: false,
                cookie: this.$cookies.get('animation'),
                sections: []
            }
        },
        methods: {
            cookieActive() {
                if (this.cookie) {
                    this.loaded = true
                    setTimeout(() => {
                        this.display = true
                    }, 500)
                }
            },
            triggerFadeOut() {
                this.loaded = true
            },
            displaySite() {
                setTimeout(() => {
                    this.display = true
                }, 500)
                this.$cookies.set('animation', 'enter', 0)
            },
        }
    }
</script>

<style>
#element {
    min-height: 50vh;
}
</style>
