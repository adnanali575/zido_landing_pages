<template>
    <footer>

        <div class="icons">
            <img src="../assets/icons/Fb-icon.7439e8dc.svg" alt="">
            <img src="../assets/icons/Twitter-icon.e588fb2a.svg" alt="">
            <img src="../assets/icons/Instagram-icon.cc586eb5.svg" alt="">
            <img src="../assets/icons/Zido-icon.01bc4c56.svg" alt="">
            <p>All rights reserved for Zido Inc. @2021</p>
        </div>

        <div class="zido-logo">
            <router-link to="/"> <img src="../assets/icons/Logo-zido.890a32c8.svg" alt=""> </router-link>
        </div>

        <div class="stores">
            <img src="../assets/images/app-store.png" alt="">
            <img src="../assets/images/play-store.png" alt="">
        </div>


    </footer>
</template>

<style scoped >
footer {
    min-height: 72px;
    padding: 0px 80px;
    background-color: var(--primary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.icons {
    width: 415px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icons img {
    width: 20px;
    margin: 1px;
    cursor: pointer;
}

.icons p {
    max-width: 298px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
}

.zido-logo {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
}

.zido-logo img {
    width: 69px;
    cursor: pointer;
}

.stores {
    width: 236px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.stores img {
    width: 113px;
    cursor: pointer;
}



@media(max-width: 900px){
    footer{
        padding: 20px 10px;
        min-height: 100px;
        display: grid;
        grid-template-columns: 1fr;
    }

    .icons{
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .icons img{
        margin: 10px 5px;
    }

    .zido-logo{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 1;
        grid-row-end: 2;
        width: 100%;
    }

    .icons p{
        text-align: center;
    }

    .stores{
        display: none;
    }
}
</style>