$(document).on("scroll", function(){

    
    // deklaracja zmiennych dla artykułów
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);
    
    // Sekcja 1.
    const $art2 = $(".art2");
    const art2FromTop = $art2.offset().top;
    // console.log(art2FromTop);
    const art2Height = $art2.outerHeight();
    // console.log(art2Height);

    const $art3 = $(".art3");
    const art3FromTop = $art3.offset().top;
    const art3Height = $art3.outerHeight();

    const $art4 = $(".art4");
    const art4FromTop = $art4.offset().top;
    const art4Height = $art4.outerHeight();

    // Warunki pojawienia się zdjęć
    if(scrollValue > art2FromTop + art2Height - windowHeight) {
        console.log("art2 wyświetlony w całości.");
        $art2.addClass('active');
    }

    if(scrollValue > art3FromTop + art3Height - windowHeight) {
        console.log("art3 wyświetlony w całości.");
        $art3.addClass('active');
    }

    if(scrollValue > art4FromTop + art4Height - windowHeight) {
        console.log("art4 wyświetlony w całości.");
        $art4.addClass('active');
    }

    // Sekcja 2
    const $op1 = $(".op1");
    const $op2 = $(".op2");

    const op1FromTop = $op1.offset().top;
    const op2FromTop = $op2.offset().top;

    const op1Height = $op1.height();
    const op2Height = $op2.height();

    if(scrollValue > op1FromTop + op1Height - windowHeight*2) {
        $op1.addClass("active")
    }
    if(scrollValue > op2FromTop + op2Height - windowHeight*2) {
        $op2.addClass("active")
    }

    // Czyściciel
    if(scrollValue < 100) {
        $("article").removeClass('active');
    }


})
