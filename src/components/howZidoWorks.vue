<template>
    <div class="work-content">

        <div class="top">
            <h1>How Zido Works</h1>
            <p>Zido works in very simple steps. Easy process, Easy money!</p>
        </div>

        <div class="steps">

            <div class="icon-box">
                <img src="../assets/icons/Home-square.898ca320.svg" alt="">
                <p>Tap Sell</p>
            </div>
            <div class="icon-box">
                <img src="../assets/icons/Shapes-square.f05853ef.svg" alt="">
                <p>Choose category</p>
            </div>
            <div class="icon-box">
                <img src="../assets/icons/List-square.2170352f.svg" alt="">
                <p>Fill the info</p>
            </div>
            <div class="icon-box">
                <img src="../assets/icons/Gavel-square.29a2bad8.svg" alt="">
                <p>Wait for bidder</p>
            </div>
            <div class="icon-box">
                <img src="../assets/icons/Tick-square.0c05e3b1.svg" alt="">
                <p>Accept suitable bid</p>
            </div>
            <div class="icon-box">
                <img src="../assets/icons/Confetti-square.f394dde8.svg" alt="">
                <p>Congrats! You’ve made Money</p>
            </div>

        </div>

    </div>
</template>

<style scoped>
.work-content {
    min-height: 574px;
    padding: 0px 80px;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
}

.top h1 {
    text-align: center;
    font-weight: 700;
    font-size: 42px;
    line-height: 46px;
}

.top p {
    text-align: center;
    max-width: 386px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-top: 10px;
}

.steps {
    width: fit-content;
    max-width: 1050px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.icon-box {
    width: 287px;
    margin: 20px 10px;
    display: flex;
    align-items: center;
}

.icon-box img{
    margin: 20px;
    width: 90px;
    height: 90px;
}

.icon-box p {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
}

/* ______________________________________________________________________________________________________________________ */
/* ______________________________________________________________________________________________________________________ */

/* Media Queries */

@media(max-width: 1155px) {

    .work-content{
        height: auto;
        padding: 70px 20px;
        /* background-color: red; */
    }

}

@media(max-width: 1035px){
    .steps{
        justify-content: center;
    }
}

@media(max-width: 350px){

    .work-content{
        padding: 50px 20px;
    }

    .icon-box{
        margin: 20px 0px;
        width: 80%;
    }
}

@media(max-width: 310px){

    .work-content{
        padding: 50px 0px;
    }

    .icon-box img{
        width: 60px;
    }
    .icon-box p{
        font-size: 16px;
    }
}


</style>