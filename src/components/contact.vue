<template>
    <div ref="contact" class="contact-section">

        <h1>We will be happy to hear from you</h1>
        <p>we believe in customer care as we would not be anywhere without you. We gladly welcome your complaints and
            suggestions as we view them as constructive feedback which will enable us to better enhance our services for
            you.</p>

        <form action="">

            <div class="input-box">
                <label for="">Name</label>
                <input class="inputs" ref="input" v-model="inputVal" type="text">
            </div>

            <div class="input-box">
                <label for="">Phone number</label>
                <input class="inputs" ref="input" type="text">
            </div>

            <div class="input-box">
                <label for="">Email Address</label>
                <input class="inputs"  ref="contact" type="text">
            </div>

            <div class="input-box">
                <label for="">Subject</label>
                <input class="inputs"  type="text">
            </div>

            <div class="textArea-box">
                <label for="">Message</label>
                <textarea class="inputs"  name="" id="" cols="30" rows="10"></textarea>
            </div>

            <button v-on:click="changeT" id="submitBtn" class="send-btn">Send</button>

        </form>

    </div>
</template>

<script>

export default {

    data() {
        return {
            inputVal: ''
        }
    },
    methods: {
        changeT: function (event) {
            event.preventDefault();

            let a = document.getElementsByClassName('inputs')

            let arr = Array.from(a)

            for (let i in arr) {
                if (arr[i].value == '') {
                    arr[i].style.border = '1px solid red'
                }
            }
        },
    }

}

</script>

<style scoped>

.contact-section {
    min-height: 1184px;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.contact-section h1 {
    width: fit-content;
    max-width: 567px;
    font-weight: 700;
    font-size: 42px;
    line-height: 46px;
    padding: 20px;
    text-align: center;
}

p {
    width: 851px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin-top: 10px;
}

form {
    width: fit-content;
    max-width: 1080px;
    padding: 29px;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
}

.input-box,
.textArea-box {
    margin: 10px 0px;
}

.textArea-box {
    grid-column-start: 1;
    grid-column-end: 3;
}

form label {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
}

form input,
form textarea {
    width: 100%;
    margin: 10px 0px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
}

form input {
    height: 60px;
}

form textarea {
    height: 119px;
}

.send-btn {
    width: 140px;
    height: 60px;
    background: #496EE3;
    border-radius: 5px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 0.1s ease-in-out;
}

.send-btn:hover{
    background-color: #3160bf;
}

.send-btn:active{
    background-color: #496EE3;
}



@media(max-width: 1070px) {

    .contact-section {
        padding: 50px 0px;
    }

    form {
        padding: 20px;
    }

    .send-btn {
        align-self: flex-start;
    }
}


@media(max-width: 980px) {

    p {
        width: 80%;
    }
}

@media(max-width: 730px) {
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0px;
    }

    form .input-box,
    form .textArea-box {
        width: 90%;
        display: flex;
        flex-direction: column;
    }


.send-btn{
    margin: auto;
}

    form .input-box input, form .textArea-box textarea{
        flex-grow: 1;
    }


}
</style>