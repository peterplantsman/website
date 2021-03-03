<template>
    <div class="bg-white">
        <div class="flex flex-col w-4/5 m-auto justify-center items-center py-8">
            <div>
                <h1 class="font-display font-bold text-3xl sm:text-4xl text-center underlined">
                    How It Works</h1>
            </div>
            <div class="flex flex-col">
                <transition name="morph" mode="out-in">
                    <advice v-if="showIndex === 1"></advice>
                    <planning v-if="showIndex === 2"></planning>
                    <design v-if="showIndex === 3"></design>
                    <making v-if="showIndex === 4"></making>
                    <aftercare v-if="showIndex === 5"></aftercare>
                </transition>
                <div class="flex justify-center m-10">
                    <div v-if="showIndex > 1">
                        <button class="mx-2 hover:text-white border-2 border-black rounded py-2 px-4 bg-blue-300" type="button" @click=showIndex-->
                            Back
                        </button>
                    </div>
                    <div v-if="showIndex < 5">
                        <button class="mx-2 hover:text-white border-2 border-black rounded bg-secondary py-2 px-4" type="button" @click=showIndex++>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Aftercare from "../partials/Slides/Aftercare";
    import Design from "../partials/Slides/Design";
    import Making from "../partials/Slides/Making";
    import Planning from "../partials/Slides/Planning";
    import Advice from "../partials/Slides/Advice";

    export default {
        components: {
            Advice,
            Aftercare,
            Design,
            Making,
            Planning,
        },
        data() {
            return {
                showIndex: 1,
            }
        },
        created() {

        },
        computed: {},
        methods: {},
    }
</script>