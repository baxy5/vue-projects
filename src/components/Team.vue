<template>
  <section class="section5">
        <div class="sor3-1">
            <div class="middle-align  fade-in">
                <h1>Csapat</h1>
            </div>
        </div>
        <div class="sor3-2">
            <div class="csapat-tag fade-in">
                <div class="csapat-img">
                    <img src="../assets/Photos/profiles/csaba.jpg" alt="Kiss Csaba">
                </div>
                <div class="csapat-leiras">
                    <h2>Kiss Csaba</h2>
                    <h3>Ügyvezető</h3>
                </div>
            </div>

            <div class="csapat-tag fade-in">
                <div class="csapat-img">
                    <img src="../assets/Photos/profiles/jani.jpg" alt="Bakos János">
                </div>
                <div class="csapat-leiras">
                    <h2>Bakos János</h2>
                    <h3>Ügyvezető</h3>
                </div>
            </div>

            <div class="csapat-tag fade-in">
                <div class="csapat-img">
                    <img src="../assets/Photos/profiles/peti.jpg" alt="Simonyi Péter">
                </div>
                <div class="csapat-leiras">
                    <h2>Simonyi Péter</h2>
                    <h3>Fejlesztő</h3>
                </div>
            </div>

            <div class="csapat-tag fade-in">
                <div class="csapat-img">
                    <img src="../assets/Photos/profiles/gergo.jpg" alt="Gál Gergő">
                </div>
                <div class="csapat-leiras">
                    <h2>Gál Gergő</h2>
                    <h3>Teszter</h3>
                </div>
            </div>

            <div class="csapat-tag fade-in">
                <div class="csapat-img">
                    <img src="../assets/Photos/profiles/patrik.jpg" alt="Szántó Patrik">
                </div>
                <div class="csapat-leiras">
                    <h2>Szántó Patrik</h2>
                    <h3>Fejlesztő</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.section5{
    margin-top: 10px;
    margin-bottom: 10px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75) ),
                     url(../assets/Photos/background3-opt.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    height: auto;  
    min-height: 1300px; 
}

.sor3-1{
    margin: 5px;
    padding: 10px;
    justify-content: center;
    display: flex;
    align-items: center;
    color: #fff;
}

.sor3-1 h1{
    font-size: 5em;
}

.sor3-2{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
}

.csapat-tag{
    width: 20%;
    margin-bottom: 50px;
    padding: 60px;
    margin: 10px;
    min-width: 250px;
}

.csapat-img{
    justify-content: center;
    display: flex;
    align-items: center;
}

.csapat-img img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: #fff;
    border: solid #fff 2px;
}

.csapat-leiras{
    padding: 30px 20px;
    text-align: center;
    font-size: 1em;
    color: #fff;
}

.csapat-leiras h3{
    font-size: 1.5em;
}
</style>