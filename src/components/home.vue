<template>
    <div ref="cont" class="container">
        <hero-section></hero-section>
        <instructions></instructions>
        <how-zido-works id="howItWork" ></how-zido-works>
        <need-to-now></need-to-now>
        <get-the-app></get-the-app>
        <contact id="contact" ></contact>
    </div>
</template>

<script>

import heroSection from './hero-section.vue'
import instructions from './instructions.vue'
import howZidoWorks from './howZidoWorks.vue'
import needToNow from './needToNow.vue'
import getTheApp from './getTheApp.vue'
import contact from './contact.vue'


export default {

    components: {
        'hero-section': heroSection,
        instructions,
        'how-zido-works': howZidoWorks,
        'need-to-now': needToNow,
        'get-the-app': getTheApp,
        contact,
    },
    data() {
        return {
        }
    },

}

</script>

<style scoped>

.container {
    animation: animate 0.5s normal;
}

@keyframes animate {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>