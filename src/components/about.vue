<template>
    <div class="page-content">
        <h1 class="heading">About ZIDO</h1>
        <div class="content">

            <h2>Welcome!</h2>
            <p>Zido is an online auction platform. The name “Zido” is derived from the Arabic word “Mazad” which means
                “Auction”. So basically what we did in this new platform is that we created a tool to make auctions more
                easier and fun. And to make sure we solve the unserious bidders issue we created Zido Points mechanism
                which allows sellers to filter out those who just bid and never buy. In Zido you can sell your item in
                public auction or in the new feature Zido created “Zido Private Auction Rooms” which basically gives you
                the ability to create a room, list items, invite people (your friends, your family, your coworkers, or
                any certain group of people who you think will be interested in what you’re selling) and you can receive
                their bids in that room.</p>

            <h2>Who we are?</h2>
            <p>Zido is a digital platform connecting buyers and sellers through a robust system specifically designed to
                ease an auction for both parties. Whether it's selling a car or buying one, we aim to make this an easy
                and pleasurable experience for you.</p>
            <p>We recognize the difficulty nowadays in finding a trustworthy buyer or seller which is why we came up
                with the idea of Zido. Zido addresses two main factors, a dedicated auctioning system along wth our
                feedback system. Both factors were considered when building this system which in turn gives the customer
                the ease of mind when finding a potential buyer or seller. In addition, our filtering system allows a
                user to seamlessly find the type of product he or she is looking for without the hassle of endless
                results.</p>
            <p>We value feedback of whether buyers or sellers as it is the number one priority of a customer when
                choosing either to buy from a particular person or sell to him/her.</p>

            <h2>Our Vision:</h2>
            <p>To be the first and leading digital online platform enabling the auctions of consumer goods and services
                in the region.</p>

            <h2>Our Mission:</h2>
            <p>We are working on providing a unique consumer experience that will match buyers and sellers in a
                productive manner along the lines of honesty and integrity coupled with easiness and peace of mind with
                a touch of joy.</p>

            <h2>Our Values:</h2>
            <p>Integrity: Full transparency in all our deals and transactions allowing for peace of mind and less
                financial worries.
                Easiness: Services that are very user friendly where anyone can find what they are looking for in a fun
                manner.
                Innovation: Always searching for more defined and easy solutions for our customers.</p>

        </div>
    </div>
</template>

<style>

.page-content {
    background-color: var(--primary-color);
    padding: 120px 127px;
    animation: animate 0.5s normal;
}

@keyframes animate {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

.heading {
    height: fit-content;
    max-width: 1100px;
    color: var(--secondary-color);
    font-weight: 700;
    font-size: 64px;
    line-height: 84px;
    padding: 0px 20px;
    margin: 0px auto;
}

.content {
    max-width: 1100px;
    margin: auto;
    padding: 0px 20px;
}

.page-content h2 {
    font-weight: 600;
    font-size: 22px;
    padding: 15px 0px;
}

.page-content p {
    font-size: 20px;
    line-height: 27px;
    margin: 20px 0px;
}

@media(max-width: 1250px){

.heading, .content{
    width: 80%;
}
}

</style>