<template>
    <div class="bg-white">
        <div class="flex flex-col w-4/5 m-auto justify-center items-center py-8">
            <div class="my-2">
                <h1 class="font-display font-bold text-3xl sm:text-4xl text-center underlined">
                    Gallery</h1>
            </div>
    <div class="flex flex-row flex-wrap justify-between mb-2">
        <div
                v-for="(img, idx) in imgs"
                :key="idx"
                class="w-full md:w-1/2 p-4"
                @click="() => show(idx)"
        >
            <img class="cursor-pointer" alt="img.title" :src="img.src ? img.src : img">
        </div>
        <vue-easy-lightbox
                :visible="visible"
                :index="index"
                :imgs="imgs"
                :moveDisabled="false"
                @hide="handleHide"
                @on-index-change="handleIndexChange"
        />
    </div>
        </div>
    </div>
</template>
a
<script>
    import VueEasyLightbox from 'vue-easy-lightbox'

    export default {
        components: {
            VueEasyLightbox
        },
        data() {
            return {
                imgs: [
                    {
                        title: "",
                        src: '/assets/images/gallery_images/BM.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/BM2.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00316.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00317.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00318.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00319.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00320.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00321.JPG'
                    },{
                        title: "",
                        src: '/assets/images/gallery_images/DSC00322.JPG'
                    },{
                        title: "",
                        src: '/assets/images/gallery_images/DSC00323.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00324.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00349.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00355.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00363.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/DSC00366.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/F1.JPG'
                    },
                    {
                        title: "",
                        src: '/assets/images/gallery_images/F2.JPG'
                    },


                ],
                visible: false,
                index: 0 // default
            }
        },
        mounted() {
        },
        methods: {
            show(index) {
                this.index = index
                this.visible = true
            },
            handleHide() {
                this.visible = false
            },
            handleIndexChange(old, newIndex) {
                if (newIndex === 5) {
                    setTimeout(() => {
                        this.imgs.push('https://i.loli.net/2018/11/10/5be6852e33f19.jpeg')
                    }, 1000)
                }
            }
        }
    }
</script>

<style scoped>
    .pic:hover img {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0);
        transform: scale(1.01);
    }
    img {
        width: 100%;
        transition: 0.3s ease;
    }
    .btn {
        cursor: pointer;
        outline: none;
        text-decoration: none;
        text-align: center;
        font-size: 20px;
        line-height: 50px;
        height: 50px;
        padding: 0 8px;
        margin-left: 20px;
        background-color: #50d1c1;
        border-color: #50d1c1;
        border-radius: 4px;
        color: #fff;
        transition: 0.3s;
    }
    .btn:active {
        color: #ccc;
        background-color: #6ab5ae;
        border-color: #6ab5ae;
        outline: none;
    }
</style>