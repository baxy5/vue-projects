<template>
  <footer>
        <div class="sor4 fade-in">
            <div class="kapcsolat">
                <h1>Vedd fel velünk a kapcsolatot!</h1>
                <router-link :to="{name: 'Contact'}"><button>Üzenetküldés</button></router-link>
            </div>
        </div>
        <div class="sor4">
            <div class="oszlop4 fade-in">
                <div class="infobox">
                    <i class="glyphicon glyphicon-earphone"></i> 
                    <h3>Telefon</h3> 
                    <span class="separator"></span>
                    <p>+36 30 875 4438</p>
                </div>
            </div>
            <div class="oszlop4 fade-in">
                <div class="infobox">
                    <i class="glyphicon glyphicon-user"></i> 
                <h3>Közösségi oldalunk</h3> 
                <span class="separator"></span>
                <p><a class="fb" href="https://www.facebook.com/adaptics.it/" target="_blank" rel="noopener">Facebook</a></p>
                </div>
            </div>
            <div class="oszlop4 fade-in">
                <div class="infobox">
                    <i class="glyphicon glyphicon-envelope"></i> 
                    <h3>Email</h3> 
                    <span class="separator"></span>
                    <p>info<br>@adaptics.hu</p>
                </div>
            </div>
        </div>

        <div class="copyright fade-in">
            <i class="glyphicon glyphicon-copyright-mark"></i> 
            <p>Adaptics</p>
        </div>
    </footer>
</template>

<style>
footer h1{
    font-size: 5em;
    padding-bottom: 100px;
}

.kapcsolat button{
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    padding: 10px;
    font-size: 2em;
    transition: all .4s ease-in-out;
    cursor: pointer;
}

.kapcsolat button:hover{
    background-color: #000;
    color: #fff;
}

.sor4{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    margin: 10px;
    height: auto;  
    min-height: 650px; 
}

.sor4:last-child{
    padding:10px;
}

.kapcsolat{
    text-align: center;
    padding-top: 200px;
}

.oszlop4{
    width: 20%;
    min-width: 350px;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 2em;
    gap: 50px;
}

.infobox{
    padding-top: 75px;
    padding-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 20px;

    color: #fff;
    background-color: black;
    width: 350px !important;
    height: 300px !important;
    border-bottom: solid 5px #fff;
    box-shadow: 5px 5px 10px 0px black;
}

.infobox p{
    padding-top: 5px;
}

.separator{
    margin-top: 5px;
    margin-bottom: 5px;
    width: 30px;
    height: 2px;
    display: block;
    margin:auto;
    background-color: #fff;
}

.fb{
    text-decoration: none;
    color: #fff;
    position: relative;
}

.fb::after{
    content: "";
    position: absolute;
    background: #fff;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease-in;
}

.fb:hover::after{
    transform: scaleX(1);
    transform-origin: left;
}

.fb:visited{
    text-decoration: none;
    color: #fff;
}

.fb:hover{
    text-decoration: none;
}

.fb:focus{
    text-decoration: none;
}

.copyright{
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 2em;
}

.copyright p{
    padding-left: 5px;
    padding-top: 10px;
    font-weight: bold;
}
</style>