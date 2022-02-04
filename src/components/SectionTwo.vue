<template>
  <section class="section2">
        <div class="sor fade-in">
            <h1>Mivel foglalkozunk?</h1>
        </div>

        <div class="sor-2">
            <div class="leiras fade-in">
                <div class="leiras-icon">
                    <i class="glyphicon glyphicon-console"></i>
                </div>
                <div class="leiras-test">
                    <p>Nem mindennapi weboldalakat készítünk modern, felhasználóbarát és letisztult külsővel,
                        kifejezetten a Te igényeidre szabva.</p>
                </div>
            </div>

            <div class="leiras fade-in">
                <div class="leiras-icon">
                    <i class="glyphicon glyphicon-ok"></i>
                </div>
                <div class="leiras-test">
                    <p>Segítünk weboldalad korszerűsítésében és újradolgozásában, hogy a jelen igényeit maradéktalanul
                        kielégítse.</p>
                </div>
            </div>

            <div class="leiras fade-in">
                <div class="leiras-icon">
                    <i class="glyphicon glyphicon-edit"></i>
                </div>
                <div class="leiras-test">
                    <p>Elkészítjük álmaid logóját a jövőbeli weboldalad és a céged egyedi stílusának megfelelő
                        kivitelben.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.section2{
    height: auto;
    min-height: 1300px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.section2 h1{
    font-size: 5em;
}

.sor{
    padding: 100px;
    display: flex;
    justify-content: center;
    gap: 50px;
    margin:5px;
    display: flex;
    align-items: center;
}

.sor-2{
    margin: 5px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    padding-top: 150px;
}

.leiras{
    min-width: 500px;
    width: 20%;
    margin-bottom: 50px;
    margin-left: 100px;
    margin-right: 100px;
}

.leiras-icon{
    text-align: center;
    padding: 30px 10px;
}

.leiras-icon i{
    font-size: 2em;
}

.leiras-test{
    padding: 30px 20px;
    text-align: center;
    font-size: 2em;
}

.oszlop{
    width: 50%;
    text-align: center;
    padding: 10px;
    justify-content: center;
    display: flex;
    align-items: center;
}
</style>