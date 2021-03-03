<template>
    <div>
        <reasons />
        <introduction />
        <personal />
    </div>
</template>

<script>
    import Reasons from '../partials/Reasons'
    import Introduction from '../partials/Introduction'
    import Personal from '../partials/Personal'

    export default {
        components: {
            Introduction,
            Reasons,
            Personal
        }
    }
</script>