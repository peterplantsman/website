<template>
    <form class="flex flex-col justify-around w-4/5 mx-auto py-6 px-2" @submit.prevent="sendEmail">
        <div class="font-display font-bold md:text-xl lg:text-2xl">
            <h1>Get in touch:</h1>
        </div>
        <div class="flex flex-row justify-between py-2">
            <label>Name:</label>
            <input required class="w-3/5 border-solid border-opacity-50 border-black border-2 rounded-sm p-2"
                   type="text" name="user_name">
        </div>
        <div class="flex flex-row justify-between py-2">
            <label>Email:</label>
            <input required class="w-3/5 border-solid border-opacity-50 border-black border-2 rounded-sm p-2"
                   type="email" name="user_email">
        </div>
        <div class="flex flex-row justify-between py-2">
            <label>Message:</label>
            <textarea class="w-3/5 border-solid border-opacity-50 border-black border-2 rounded-sm p-2"
                      name="message"></textarea>
        </div>
        <div class="flex justify-center items-center">
            <input v-if="!success" class="cursor-pointer my-5 py-3 px-16 font-display font-bold md:text-xl lg:text-2xl"
                   type="submit" value="Send">
            <div v-else class="my-5 py-3 px-16 text-blue-600 font-display font-bold md:text-xl lg:text-2xl">Success!</div>
        </div>
    </form>
</template>

<script>
    import emailjs from "emailjs-com";

    export default {
        data() {
            return {
                success: false
            }
        },
        methods: {
            sendEmail(e) {
                emailjs.sendForm('service_p53m496', 'template_KvZYtuaP', e.target,
                    'user_nmxMGG6UtAoEfFuNS4esz')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                        this.success = true
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            }
        }
    }
</script>