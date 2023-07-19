<template>
    <div class="hero-content">

        <div class="hero-text">
            <p>List to sell, Bid to buy.</p>
            <h1>We Connect Seller & Buyer!</h1>
            <button class="download-btn"> Download Now </button>
        </div>

        <div class="hero-img">
            <img src="../assets/images/HeroSection.png" alt="">
        </div>

    </div>
</template>

<style scoped>
.hero-content {
    min-height: 684px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--primary-color);
}

.hero-text p {
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 39px;
}

.hero-text h1 {
    width: 488px;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 80px;
    margin: 20px 0px;
}

.hero-text button {
    padding: 12px 32px;
    width: 190px;
    height: 48px;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    background: #496DE2;
    border-radius: 6px;
}

.hero-img{
    display: flex;
    justify-content: center;
}

.hero-img img {
    width: 424px;
}

@media(max-width: 1070px) {
    .hero-content {
        padding: 50px 0px;
    }

    .hero-content img {
        margin-top: 50px;
    }
}

@media(max-width: 565px) {

    .hero-text {
        width: 90%;
    }

    .hero-text h1 {
        width: auto;
    }

    .hero-content img {
        width: 90%;
    }

}

@media(max-width: 400px) {
    .hero-text p {
        font-size: 20px;
        line-height: 20px;
    }

    .hero-text h1 {
        font-size: 40px;
        line-height: 50px;
    }

    .hero-text button{
        padding: 0px;
        width: 140px;
        height: 35px;
        font-size: 14px;
    }
}
</style>