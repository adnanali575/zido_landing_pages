<template>

    <div class="instructions-content">

        <div class="left-content">
            <h1>Sell and buy your item in simple steps!</h1>
            <p>In simple steps you can buy and sell whatever you want!
                (Cars, furniture, electronics, clothes, private collections).
                Ability to create a private auction room where you
                invite specific members, Zido guarantees seriousness and safety.
            </p>
        </div>

        <div class="right-content">

            <div class="box">
                <img src="../assets/icons/EasyIcon.94ff41fd.svg" alt="">
                <div class="text">
                    <h2>Easy</h2>
                    <p>In simple steps you can sell anything you want with a resonable price!</p>
                </div>
            </div>

            <div class="box">
                <img src="../assets/icons/SafeIcon.066f8f4c.svg" alt="">
                <div class="text">
                    <h2>Safe</h2>
                    <p>Zido is very safe, You will find transparency in all our deals and transactions allowing for
                        peace of mind and less financial worries.</p>
                </div>
            </div>

            <div class="box">
                <img src="../assets/icons/WinningIcon.469cb6a1.svg" alt="">
                <div class="text">
                    <h2>Winning-Winning</h2>
                    <p>Both Seller and Buyer will be in a winning sutuation!</p>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped>
.instructions-content {
    min-height: 488px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.left-content, .right-content{
    margin: 20px;
}

.left-content {
    width: 456PX;
}

.left-content h1 {
    max-width: 456px;
    font-weight: 700;
    font-size: 42px;
    line-height: 46px;
}

.left-content p {
    max-width: 420px;
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
    margin-top: 10px;
}

.right-content {
    width: 530px;
    height: 360px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border: 1px solid #C4C4C4;
    filter: drop-shadow(4px 4px 40px rgba(0, 0, 0, 0.1));
    border-radius: 6px;
    /* padding: 10px; */

}

.right-content .box {
    display: flex;
    align-items: flex-start;
    /* border: 1px solid black; */
}

.right-content img {
    margin: 0px 40px;
    width: 16px;
}

.right-content h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 16px;
}

.right-content p {
    width: 95%;
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    margin-top: 10px;
}




@media(max-width: 1180px){

    .instructions-content{
        height: auto;
        padding: 50px 0px;
    }

    .left-content{
        width: 530px;
    }

    .right-content{
        margin-top: 50px;
    }
}

@media(max-width: 1030px){
    .instructions-content{
        justify-content: center;
    }
}

@media(max-width: 800px){
    .left-content, .right-content{
        width: 80%;
    }
}

@media(max-width: 500px){
    .right-content{
        height: fit-content;
        padding: 40px 0px;
    }

    .box{
        margin: 20px 0px;
    }

    .right-content h2{
        line-height: 25px;
    }
}

</style>