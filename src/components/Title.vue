<template>
    <div :class="disguise" class="h-screen w-full flex justify-start items-center" id="title" ref="title" v-cloak>
    <div class="w-1/2 ml-3">
        <a href="index.html">
            <img src=../../public/assets/images/logo.png>
        </a>
    </div>
    </div>
</template>

<script>
    export default {
        props: {
          cookie: {
              type: String,
              default: null
          }
        },
        computed: {
          disguise: function() {
              return this.cookie ? 'hidden' : null
          }
        },
        data() {
            return {
            }
        },
    }
</script>