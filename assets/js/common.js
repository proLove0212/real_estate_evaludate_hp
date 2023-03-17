var store = {}
var prefectures = []
var q1;

var r_est_type = ""
var profecture = ""
var city = ""
var village = ""

var ground_area = 0
var g_area_type = 0

var building_area = 0
var b_area_type = 0

var b_year = 0
var b_year_type = 0

var b_price = 0
var structure = ""
var relation = ""
var reason = ""
var when = ""

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
    r_est_type = $(this).data("value")
    removeActive(".js-q1");

    if($(this).data("value") == "一棟アパート・一棟マンション" || $(this).data("value") == "一棟ビル" ){

        $(this).addClass("is-active");
        
        hideSection(3);
        $(`#card-2`).removeClass("d-none")
    }else{
        hideSection(2);
    }

    removeActive(".js-q2");
})


$(".js-q3.btn").click(function(){
    city = $("#city_selector").val()
    village = $("#village_selector").val()

    console.log(city, village)

    if(city == null || village == null){
        hideSection(4);
        return
    }

    removeActive(".js-q3");
    $(this).addClass("is-active");

    hideSection(5);
    $(`#card-4`).removeClass("d-none")

    removeActive(".js-q4");
    $(".js-q4 input").val("");

})

$(".js-q4.input").click(function(){
    removeActive(".js-q4");
    $(this).addClass("is-active");
    
    hideSection(5);

    
    var temp = $(this).children("input").val()

    $(".js-q4.input input").val("")
    $(this).children("input").val(temp)
})

$(".js-q4.btn").click(function(){
    if($("#g_area_m").val()*1 == 0 && $("#g_area_p").val()*1 == 0){
        return
    }

    if($("#g_area_m").val()*1 == 0){
        ground_area = $("#g_area_p").val()*1
        g_area_type = 1
    }
    if($("#g_area_p").val()*1 == 0){
        ground_area = $("#g_area_m").val()*1
        g_area_type = 0
    }


    removeActive(".js-q4");
    $(this).addClass("is-active");
    
    hideSection(6);
    $(`#card-5`).removeClass("d-none")

    
    removeActive(".js-q5");
    $(".js-q5 input").val("");
})

$(".js-q5.input").click(function(){
    removeActive(".js-q5");
    $(this).addClass("is-active");
    
    hideSection(6);

    
    var temp = $(this).children("input").val()
    $(".js-q5.input input").val("")
    $(this).children("input").val(temp)
})

$(".js-q5.btn").click(function(){
    if($("#b_area_m").val()*1 == 0 && $("#b_area_p").val()*1 == 0){
        return
    }

    if($("#b_area_m").val()*1 == 0){
        building_area = $("#b_area_m").val()*1
        b_area_type = 1
    }
    if($("#b_area_p").val()*1 == 0){
        building_area = $("#b_area_p").val()*1
        b_area_type = 0
    }

    removeActive(".js-q5");
    $(this).addClass("is-active");
    
    hideSection(7);
    $(`#card-6`).removeClass("d-none")

    
    removeActive(".js-q6");
    $(".js-q6 input").val("");
})


$(".js-q6.input").click(function(){
    removeActive(".js-q6");
    $(this).addClass("is-active");
    
    hideSection(7);

    
    var temp = $(this).children("input").val()
    $(".js-q6.input input").val("")
    $(this).children("input").val(temp)
})

$(".js-q6.btn").click(function(){
    if($("#b_year_1").val()*1 == 0 && $("#b_year_2").val()*1 == 0){
        return
    }

    if($("#b_year_1").val()*1 == 0){
        b_year = $("#b_year_2").val()*1
        b_year_type = 1
    }
    if($("#b_year_2").val()*1 == 0){
        b_year = $("#b_year_1").val()*1
        b_year_type = 0
    }

    removeActive(".js-q6");
    $(this).addClass("is-active");
    
    hideSection(8);
    $(`#card-7`).removeClass("d-none")

    
    removeActive(".js-q7");
    $(".js-q7 input").val("");
})

$(".js-q7.is-input-2div3").click(function(){
    removeActive(".js-q7");
    $(this).addClass("is-active");
    
    hideSection(8);
})

$(".js-q7.btn").click(function(){    
    if($("#b_price").val()*1 == 0){
        return
    }

    b_price = $("#b_price").val()*1;

    removeActive(".js-q7");
    $(this).addClass("is-active");
    

    if(r_est_type == "一棟アパート・一棟マンション"){

        var g_area_temp = ground_area
        if(g_area_type == 0){
            g_area_temp = ground_area/(1.8*1.8)
        }

        var min_temp = store[city][village]["最低土地値"] * g_area_temp;
        var max_temp = store[city][village]["最高土地値"] * g_area_temp;

        var price_temp = 0;
        console.log(store[city][village]["～5 年"])
        if(b_year<=5){
            price_temp = b_price*12*100/store[city][village]["～5 年"];
        }else if(b_year>5 && b_year<=10){
            price_temp = b_price*12*100/store[city][village]["6～10 年"];
        }else if(b_year>10 && b_year<=20){
            price_temp = b_price*12*100/store[city][village]["11～20 年"];
        }else if(b_year>20 && b_year<=30){
            price_temp = b_price*12*100/store[city][village]["21～30 年"];
        }else{
            price_temp = b_price*12*100/store[city][village]["30 年以上"];
        }

        if(price_temp < min_temp){
            min_temp = price_temp
        }

        $(".js-q9.is-input-2div3 input").val(`${min_temp.toFixed(2)} ~ ${max_temp.toFixed(2)}`)


        hideSection(9);
        $(`#card-8`).removeClass("d-none")
    }else{

        var g_area_temp = ground_area
        if(g_area_type == 0){
            g_area_temp = ground_area/(1.8*1.8)
        }

        var min_temp = store[city][village]["最低土地値"] * g_area_temp;
        var max_temp = store[city][village]["最高土地値"] * g_area_temp;

        $(".js-q9.is-input-2div3 input").val(`${min_temp.toFixed(2)} ~ ${max_temp.toFixed(2)}`)

        hideSection(10);

        $(`#card-9`).removeClass("d-none")
    }
})

$(".js-q8").click(function(){
    structure = $(this).data("value")

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

    if($(this).data("value") == "はい"){
        hideSection(12);
        $(`#card-11`).removeClass("d-none")
    }else{
        hideSection(2);
        removeActive(".js-q1");
        $(`#card-1`).removeClass("d-none")
    }
})

$(".js-q11.btn").click(function(){
    removeActive(".js-q11");
    $(this).addClass("is-active");

    hideSection(13);
    $(`#card-12`).removeClass("d-none")

    relation = $(this).children("select").val()
})

$(".js-q12.btn").click(function(){
    removeActive(".js-q12");
    $(this).addClass("is-active");

    hideSection(14);
    $(`#card-13`).removeClass("d-none")
    
    reason = $(this).children("select").val()
})

$(".js-q13.btn").click(function(){
    removeActive(".js-q13");
    $(this).addClass("is-active");

    hideSection(15);
    $(`#card-14`).removeClass("d-none")

    when = $(this).children("select").val()
})

$(".js-q14.btn").click(function(){
    
})

$("#city_selector").change(function(){
    refreshVillage($("#city_selector").val())
    removeActive(".js-q3");
})

$("#village_selector").change(function(){
    removeActive(".js-q3");
})
