var store = {}
var prefectures = []
var q1;

// loadPrefecture();

function removeActive(param){
    $(param).removeClass("is-active")
}

function hideSection(st){
    var cnt_max = $(".p-select").length;
    for (let index = st; index <= cnt_max; index++) {
        const element = $(`#card-${index}`);
        element.addClass("d-none");
    }
}

$(".js-q1").click(function(){
    removeActive(".js-q1");
    $(this).addClass("is-active");
    
    hideSection(3);
    $(`#card-2`).removeClass("d-none")
})


$(".js-q3.btn").click(function(){
    removeActive(".js-q3");
    $(this).addClass("is-active");

    hideSection(5);
    $(`#card-4`).removeClass("d-none")
})

$(".js-q4.input").click(function(){
    removeActive(".js-q4");
    $(this).addClass("is-active");
    
    hideSection(5);
})

$(".js-q4.btn").click(function(){
    alert("adsf")
    removeActive(".js-q4");
    $(this).addClass("is-active");
    
    hideSection(6);
    $(`#card-5`).removeClass("d-none")
})

$(".js-q5.btn").click(function(){
    removeActive(".js-q5");
    $(this).addClass("is-active");
    
    hideSection(7);
    $(`#card-6`).removeClass("d-none")
})

$(".js-q6.btn").click(function(){
    removeActive(".js-q5");
    $(this).addClass("is-active");
    
    hideSection(8);
    $(`#card-7`).removeClass("d-none")
})

$(".js-q7.btn").click(function(){
    removeActive(".js-q7");
    $(this).addClass("is-active");
    
    hideSection(9);
    $(`#card-8`).removeClass("d-none")
})

$(".js-q8").click(function(){
    removeActive(".js-q8");
    $(this).addClass("is-active");

    hideSection(10);
    $(`#card-9`).removeClass("d-none")
})

$(".js-q9.btn").click(function(){
    removeActive(".js-q9");
    $(this).addClass("is-active");

    hideSection(11);
    $(`#card-10`).removeClass("d-none")
})

$(".js-q10").click(function(){
    removeActive(".js-q10");
    $(this).addClass("is-active");

    hideSection(12);
    $(`#card-11`).removeClass("d-none")
})

$(".js-q11.btn").click(function(){
    removeActive(".js-q11");
    $(this).addClass("is-active");

    hideSection(13);
    $(`#card-12`).removeClass("d-none")
})

$(".js-q12.btn").click(function(){
    removeActive(".js-q12");
    $(this).addClass("is-active");

    hideSection(14);
    $(`#card-13`).removeClass("d-none")
})

$(".js-q13.btn").click(function(){
    removeActive(".js-q13");
    $(this).addClass("is-active");

    hideSection(15);
    $(`#card-14`).removeClass("d-none")
})

$(".js-q14.btn").click(function(){
    
})

$("#city_selector").change(function(){
    refreshVillage($("#city_selector").val())
})
