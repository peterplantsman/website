<template>
    <modal name="contact-form" height="auto">
        <input-form />
    </modal>
</template>

<script>
    import InputForm from "../partials/Form";

    export default {
        components: {
           InputForm
        },
        props: {
          control: {
              type: Boolean,
              default: false
          }
        },
        name: 'ContactForm',
        watch: {
          control() {
              this.show()
          },
          success() {
            setTimeout(() => {
                this.hide()
                this.success = false
            }, 2000)
          }
        },
        methods: {
            show() {
                this.$modal.show('contact-form');
            },
            hide() {
                this.$modal.hide('contact-form');
                this.$emit('close')
            },
        },
    }

</script>
