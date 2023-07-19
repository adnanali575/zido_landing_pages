<template>
    <div class="get-content">

        <div class="text-content">
            <h1>Get the app</h1>
            <p>Zido is Available on Apple store and Google play store</p>
            <div class="icons">
                <img src="../assets/images/app-store-transparent.png" alt="">
                <img src="../assets/images/play-store-transparent.png" alt="">
            </div>
        </div>

        <div class="mobile-img">
            <img src='../assets/images/DownloadSection.png' alt="">
        </div>


    </div>
</template>

<style scoped>
.get-content {
    background-color: var(--secondary-color);
    min-height: 366px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.text-content {
    max-width: 437px;
}

.text-content h1 {
    font-weight: 700;
    font-size: 42px;
    line-height: 46px;
}

.text-content p {
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-top: 20px;
}

.text-content,
.mobile-img {
    margin: 0px 20px;
}

.text-content h1,
.text-content p {
    color: #fff;
}

.text-content img {
    max-width: 135.17px;
}

.text-content .icons {
    max-width: 285px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.mobile-img {
    height: 100%;
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
}

.mobile-img img{
    max-width: 381px;
}




@media(max-width: 1000px) {
    .get-content {
        padding: 50px 20px 0px 20px;
        justify-content: center;
    }

    .text-content {
        width: 437px;
    }

    .mobile-img {
        margin-top: 50px;
    }
}

@media(max-width: 440px){

    .mobile-img{
        width: 100%;
    }
    .mobile-img img{
        width: 90%;
        height: auto;
    }

    .icons img{
        margin: 10px 0px;
    }
}


</style>