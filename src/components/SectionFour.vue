<template>
  <section class="section4">
        <div class="sor2">
            <div class="oszlop2 fade-in">
                <div class="middle-align"><img class="floating-img" src="../assets//Photos/floating_img.svg" alt="Weboldal"></div>
            </div>
            <div class="oszlop2  fade-in">
                <p>Számunkra nincs különbség a kis és nagy project között. Éppúgy állunk rendelkezésedre bármely
                    kérdésben,
                    legyen az egy összetett webshop vagy egy kis méretű weboldal, ránk számíthatsz minden esetben.
                    Továbbá
                    weboldalad elkészülte után is támogatunk, így nem kell félned a kockázattól sem. Lenne ötleted?
                </p>
            </div>
            <div class="oszlop2  fade-in">
                <a href=""><button>Írj nekünk!</button></a>
                <!-- <router-link :to="{name: 'Contact'}">Hey</router-link> -->
            </div>
        </div>
    </section>
</template>

<style>
/*        Float              */
@keyframes float {
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-20px);
    }
    100% {
        transform: translatey(0px);
    }
}

.section4{
    justify-content: center;
    display: flex;
    align-items: center;
    height: auto;  
    min-height: 1300px; 
}

.sor2{
    height: auto;
    margin: 5px;
    padding: 10px;
    gap: 30px;
    justify-content: center;
    display: flex;
    align-items: center;

    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
}

.oszlop2{
    height: auto;
    width: 40%;
    min-width: 500px;
    text-align: center;
    padding:10px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 2em;
}

.oszlop2 button{
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    padding: 10px;
    transition: all .4s ease-in-out;
    cursor: pointer;
}

.oszlop2 button:hover{
    background-color: #fff;
    color: #000;
}

.middle-align{
    justify-content: center;
    display: flex;
    align-items: center;
}

.floating-img{
    width: 70%;
    animation: float 3s ease-in-out infinite;
}
</style>