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
    hideSection(3);
    $(`#card-2`).removeClass("d-none")
    $(this).addClass("is-active");
    q1 = $(this).children("p").html();
})


$(".js-q3").click(function(){
    removeActive(".js-q3");
    $(this).addClass("is-active");
    q2 = $(this).children("p").html();

})

$(".js-q4").click(function(){
    removeActive(".js-q4");
    $(this).addClass("is-active");
    q2 = $(this).children("p").html();
})

$(".js-q5").click(function(){
    removeActive(".js-q5");
    $(this).addClass("is-active");
    q2 = $(this).children("p").html();
})

$(".js-q7").click(function(){
    removeActive(".js-q7");
    $(this).addClass("is-active");
    q2 = $(this).children("p").html();
})


$("#city_selector").change(function(){
    refreshVillage($("#city_selector").val())
})
