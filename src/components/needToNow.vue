<template>
    <div class="need-content">

        <div class="text-content">
            <h1>Need to Know more?</h1>
            <p>Watch this video to learn all about Zido. It takes you through different zido flows.</p>
        </div>

        <div class="video-section">
            <img src="../assets/images/thumbnail.jpg" alt="">
        </div>

    </div>
</template>

<style scoped>
.need-content {
    min-height: 488px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.text-content {
    max-height: 360px;
}

.text-content h1 {
    max-width: 312px;
    font-weight: 700;
    font-size: 42px;
    line-height: 46px;
}

.text-content p {
    max-width: 420px;
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
    margin-top: 20px;
}

.video-section {
    width: fit-content;
    height: fit-content;
}

.video-section img {
    height: 360px;
}




@media(max-width: 1100px){
    .need-content{
        padding: 50px 20px;
        justify-content: center;
    }

    .text-content{
        height: auto;
        margin-bottom: 50px;
    }

    .text-content p{
        width: 534px;
    }
}

@media(max-width: 580px){
    .text-content{
        width: 90%;
    }

    .text-content h1, .text-content p{
        width: 100%;
    }

    .video-section{
        width: 100%;
    }

    .video-section img{
        height: auto;
        width: 100%;
    }
}



</style>