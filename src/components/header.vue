<template>

    <header>
        <div class="outer-box">

            <div class="logo">
                <i v-show="!menuBtn" v-on:click="toggleClass" class="fa-solid fa-xmark"></i>
                <i  v-show="menuBtn"  v-on:click="toggleClass" class="fa-solid fa-bars"></i>
                <router-link to="/"> <img src="../assets/icons/Logo-zido.890a32c8.svg" alt=""> </router-link>
            </div>

            <div v-bind:class="{'menu-show': showClass}" class="menu">

                <ul v-bind:class="{'menu-show': showClass}" >
                    <li> <router-link to="/about" > About </router-link> </li>
                    <li> <router-link to="/howItWork" > How it Works </router-link> </li>
                    <li> <router-link to="" > Contact </router-link> </li>
                    <li> <router-link to="/privacyPolicy" > Privacy Policy </router-link> </li>
                    <li> <router-link to="/termsAndConditions" > Terms and Conditions </router-link> </li>
                </ul>

                <div v-bind:class="{'menu-show': showClass}"  class="icons">
                    <div class="saudi-flag-box">
                        <span class="saudi-flag">
                            <img class="flag" src="../assets/images/saudi-arabia-flag.png" alt="">
                            <img class="text" src="../assets/icons/اللغة العربية.svg" alt="">
                        </span>
                    </div>
                    <span class="store-img-box">
                        <img class="store-img" src="../assets/images/play-store.png" alt="">
                        <img class="store-img" src="../assets/images/app-store.png" alt="">
                    </span>
                </div>

            </div>

        </div>
    </header>

</template>


<script>

export default{

    data(){
        return {
            showClass: false,
            menuBtn: true,
        }
    },
    methods: {
        toggleClass: function(){
            this.showClass = !this.showClass
            this.menuBtn = !this.menuBtn
        }
    },
    mounted(){
        console.log('Contact is')
        console.log(this.contact)
    }
}

</script>


<style scoped>
header {
    background-color: #fff;
    min-height: 92px;
    display: flex;
    align-items: center;
}

.outer-box {
    width: 100%;
    display: grid;
    grid-template-columns: 70px auto;
    padding: 0px 80px;
}

.logo {
    min-height: 92px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo .fa-bars,
.logo .fa-xmark {
    color: var(--icon-color);
    font-size: 25px;
    margin: 9px 0px 0px 9px;
    display: none;
}

.logo img {
    width: 69px;
}

.menu {
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.menu ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: fit-content;
}

.menu li {
    list-style: none;
    display: flex;
}

.menu a {
    text-decoration: none;
    color: var(--text-color);
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin: 0px 10px;
    line-height: 19.5px;
    cursor: pointer;
    transition: all i.2s ease-in-out;
}

.router-link-exact-active .router-link-active{
    color: var(--secondary-color);
}

.menu a:hover {
    color: var(--secondary-color);
}

.icons {
    width: 363px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.saudi-flag-box {
    width: fit-content;
    display: flex;
    justify-content: flex-end;
}

.saudi-flag {
    max-width: 113px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.saudi-flag .flag {
    width: 26px;
    height: 18.78px;
    border-radius: 3px;
}

.saudi-flag .text {
    width: 76px;
    margin: 0px 5px;
}

.store-img {
    max-width: 119px;
    margin: 0px 3px;
    height: auto;
    cursor: pointer;
}


@media(max-width: 1219px){
    
    .menu{
        margin-left: 0px;
    }
}



@media(max-width: 1190px) {
    .outer-box {
        padding: 0px 30px;
    }
}

/* --------------------------------------------------------------------- */

@media(max-width: 1090px) {
    .outer-box {
        display: flex;
        flex-direction: column;
    }

    .logo .fa-bars, .logo .fa-xmark {
        display: block;
    }
    
    @keyframes animate1 {
        0%{
            height: 0px;
        }
        
        100%{
            height: 375px;
        }
    }
    
        .menu {
            height: 375px;
            overflow: hidden;
            padding-right: 9px;
            flex-wrap: nowrap;
            display: none;
            flex-direction: column;
            align-items: flex-end;
            animation: animate1 0.5s normal;
        }
    
    @keyframes animate2 {
        0%{
            opacity: 0;
        }
        
        100%{
            opacity: 1;
        }
    }
    
    ul, .icons{
        /* animation: animate2 1s normal; */
        opacity: 0;
    }
    
    .menu-show{
        opacity: 1;
        display: flex;
    }

    .menu ul {
        flex-direction: column;
        align-items: flex-end;
    }

    .menu a {
        padding: 16px 0px;
        font-size: 16px;
        text-align: end;
    }

    .icons {
        max-width: 250px;
        display: grid;
        grid-template-columns: 1fr;
    }

    .saudi-flag-box {
        width: 100%;
        margin-top: 20px;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .store-img-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 20px 0px;
    }
}

@media(max-width: 315px){
    .store-img-box{
        flex-direction: column;
        align-items: flex-end;
    }

    .store-img{
        margin-bottom: 10px;
    }
}
</style>