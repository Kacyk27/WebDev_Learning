$(".interface").on("click", function() {
    // console.log("działa");
    // console.log(this);
    // console.log($(this))
    console.log($(this).attr("class"))
    // console.log(this.className)


    if ($(this).hasClass("orange")) {
        console.log("prawda w pomarańczowy");
        $("body").attr("class","orange");
        // $("body").toggleClass("orange")
        // $("body").css("background-color", "orange");

        // $("body").css({
        //     "background-color":"orange",
        // })
        // $("p").css({
        //     "font-size" : "30px",
        //     "transition":"0.5s"
        // })
    }

    // if (this.classList.contains("green")) {
    //     console.log("prawda w zielony")
    // }

    else if ($(this).hasClass("green")) {
        console.log("prawda w zielony");
        $("body").attr("class","green");

        // $("body").css({
        //     "background-color":"green",
        // })
    }

    else if ($(this).hasClass("increase")) {
        console.log("prawda w plus");

        $(".text").animate({
            "font-size": "+=5px"
        }, 500)
    }

    else if ($(this).hasClass("move")) {
        console.log("prawda w strzałce");

        $(".text").animate({
            "left": "+=3px",
            "letter-spacing":"+=3px"
        }, 500)
    }

})