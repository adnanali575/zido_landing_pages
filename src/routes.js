
import home from './components/home.vue'
import howItWork from './components/howZidoWorks.vue'
import about from './components/about.vue'
import privacyPolicy from './components/privacyPolicy.vue'
import termsAndConditions from './components/termsAndConditions.vue'

export default [
    {path: '/', component: home, 

    children:[{
        path:'/howItWork',
        component: howItWork
    },
    
    ]

},
    {path: '/about', component: about},
    // {path: '/howItWorks', component:},
    {path: '/privacyPolicy', component: privacyPolicy},
    {path: '/termsAndConditions', component: termsAndConditions }

]