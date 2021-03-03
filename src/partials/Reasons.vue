<template>
    <div class="bg-white">
        <div class="flex flex-col w-4/5 m-auto justify-center items-center py-8">
            <div>
                <h1 class="font-display font-bold text-3xl sm:text-4xl text-center underlined">
                    5 Great Reasons to Create a New Garden</h1>
            </div>
            <div class="flex flex-row flex-wrap justify-around">
                <div class="md:w-1/3 lg:w-1/4 md:mx-4 flex flex-col justify-center items-center my-6"
                     v-for="(block, name) in reasons" :key="name">
                    <i :class="block.icon" class="text-10xl primary-text my-2"></i>
                    <p class="text-center my-2"><strong>{{ block.strong }}</strong>- {{ block.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                reasons: {
                    investment: {
                        icon: "fa fa-money",
                        strong: "It pays",
                        text: "It is estimated that a well-designed garden can add between 5% and 15% to the value " +
                            "of your property, so it can be a very worthwhile investment."
                    },
                    health: {
                        icon: "fa fa-heartbeat",
                        strong: "It's good for you",
                        text: "Time spent in the open air is good for all of us, and if you do the gardening yourself" +
                            " it’s great exercise. Gardens can be beautiful places to escape into to relax and unwind too."
                    },
                    produce: {
                        icon: "fa fa-cutlery",
                        strong: "It's productive",
                        text: "Your garden can be a source of a wide range of fresh fruit and vegetables, as well as" +
                            " flowers for the house. Home grown produce is nutritious, delicious and (almost) free."
                    },
                    environment: {
                        icon: "fa fa-leaf",
                        strong: "It's environmentally friendly",
                        text: "With a little care you can transform your garden into a haven for wildlife, from birds, " +
                            "bees and butterflies to hedgehogs & frogs."
                    },
                    fun: {
                        icon: "fa fa-smile-o",
                        strong: "It's fun",
                        text: "A well designed garden can literally become an extra living space, perfect for " +
                            "entertaining and al fresco dining. It can also give you great personal pleasure and " +
                            "satisfaction."
                    }
                }
            }
        }
    }
</script>
