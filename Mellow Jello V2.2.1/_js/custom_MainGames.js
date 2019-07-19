    //Loop source: https://stackoverflow.com/questions/8663246/javascript-timer-loop
    //Img Style source: https://www.w3schools.com/jsref/prop_style_filter.asp
    //Img Rotation: https://www.developphp.com/video/JavaScript/Transform-Rotate-Image-Spin-Smooth-Animation-Tutorial
    //Custom img, clicking game
    //Img credit: https://twitter.com/sterlovesfood?lang=en


    setInterval(myMethod, 10);
    var Hue = 0;
    var Clicks = 0;
    var HueMultiplier = 0;
    var Wiggling = false;
    var WigglePhase = false;
    var Growth = 200;
    var WiggleImg = document.getElementById("mug");

    function myMethod() {

        Hue += (1 * HueMultiplier);
        //console.log(Hue);

        var p = "hue-rotate(" + Hue.toString() + "deg)";

        var f = Hue + "px";

        

        //console.log(p);

        document.getElementById("mug").style.filter = p;




        //document.getElementById("mug").style.height = f;
        //document.getElementById("mug").style.width = f;


    }

    setInterval(Wiggle, 10);

    function randomImgClick()
    {
        Wiggling = true;
        Growth = 200;
        WigglePhase = false;
        WiggleImg = document.getElementById("randomImg");
    }

    function Wiggle()
    {
        if (Wiggling)
        {
            //console.log(Growth);

            if (!WigglePhase)
            {
                Growth += 2;
                WiggleImg.style.height = Growth + "px";
                WiggleImg.style.width = Growth + "px";
                if (Growth > 220)
                {
                    
                    WigglePhase = true;
                }
            }
            if (WigglePhase) {
                Growth -= 2;
                WiggleImg.style.height = Growth + "px";
                WiggleImg.style.width = Growth + "px";
                if (Growth <= 200) {
                    WigglePhase = false;
                    Wiggling = false;
                }
            }
        }

    }





    



    //More clicks, faster spinny
    function clickCounter()
    {
        Clicks += 1
        //console.log(Clicks);
        document.getElementById("ClickCount").innerText = "Clicks: " + Clicks.toString();
        Wiggling = true;
        Growth = 200;
        WigglePhase = false;
        WiggleImg = document.getElementById("mug");

        if ((Clicks % 10) == 0)
        {
            rotateAnimation("mug", 50);
        }
        if ((Clicks % 50) == 0) {
            ++HueMultiplier;
            rotateAnimation("mug", 50);
        }
    }

