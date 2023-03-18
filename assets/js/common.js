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

var client_name = ""
var age = ""
var gender = ""
var email = ""
var phone = ""
var timezone = ""

function removeActive(param){
    $(param).removeClass("is-active")
}

function hideSection(st){
    var cnt_max = $(".p-select").length;
    for (let index = st; index <= cnt_max; index++) {
        const element = $(`#card-${index}`);
        element.addClass("d-none");
        element.removeClass("zoomInUp");
    }
}

function showSection(no){

    $(`#card-${no}`).removeClass("d-none")

    $(`#card-${no}`).addClass("fadeInDown")

    window.scrollTo(0, document.body.scrollHeight);

    removeActive(`.js-q${no}`);
    if(no != 9)
        $(`.js-q${no} input`).val("");
}

function showMessage(){
    $("#msg_area").removeClass("d-none");
    $("#msg_req").removeClass("d-none");
    $("#msg_req").addClass("fadeInLeft");

    setTimeout(() => {
        $("#msg_res").removeClass("d-none");
        $("#msg_res").addClass("fadeInRight")
        window.scrollTo(0, document.body.scrollHeight);

            
        setTimeout(() => {
            $("#msg_ok").removeClass("d-none");
            $("#msg_ok").addClass("fadeInLeft")
            window.scrollTo(0, document.body.scrollHeight);
        }, 1000);
    }, 1000);

    
}

$(".js-q1").click(function(){
    r_est_type = $(this).data("value")
    removeActive(".js-q1");

    $(this).addClass("is-active");
        
    hideSection(3);
    showSection(2)
})


$(".js-q3.btn").click(function(){
    city = $("#city_selector").val()
    village = $("#village_selector").val()

    if(city == null || village == null){
        hideSection(4);
        return
    }

    removeActive(".js-q3");
    $(this).addClass("is-active");

    hideSection(5);
    showSection(4)
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
    
    if(isNaN($("#g_area_m").val()*1) || isNaN($("#g_area_p").val()*1)){
        return;
    }

    if($("#g_area_m").val()*1 == 0 && $("#g_area_p").val()*1 == 0){
        return;
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
    showSection(5)
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
    
    if(isNaN($("#b_area_m").val()*1) || isNaN($("#b_area_p").val()*1)){
        return;
    }

    if($("#b_area_m").val()*1 == 0 && $("#b_area_p").val()*1 == 0){
        return
    }

    if($("#b_area_m").val()*1 == 0){
        building_area = $("#b_area_p").val()*1
        b_area_type = 1
    }
    if($("#b_area_p").val()*1 == 0){
        building_area = $("#b_area_m").val()*1
        b_area_type = 0
    }

    removeActive(".js-q5");
    $(this).addClass("is-active");
    
    hideSection(7);
    showSection(6)
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
    if(isNaN($("#b_year_1").val()*1) || isNaN($("#b_year_1").val()*1)){
        return;
    }

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
    showSection(7)
})

$(".js-q7.is-input-2div3").click(function(){
    removeActive(".js-q7");
    $(this).addClass("is-active");
    
    hideSection(8);
})

$(".js-q7.btn").click(function(){   
    if(isNaN($("#b_price").val()*1)){
        return;
    } 
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
        showSection(8)
    }else{

        var g_area_temp = ground_area
        if(g_area_type == 0){
            g_area_temp = ground_area/(1.8*1.8)
        }

        var min_temp = store[city][village]["最低土地値"] * g_area_temp;
        var max_temp = store[city][village]["最高土地値"] * g_area_temp;

        $(".js-q9.is-input-2div3 input").val(`${min_temp.toFixed(2)} ~ ${max_temp.toFixed(2)}`)

        hideSection(10);
        showSection(9)
        structure = ""
    }
})

$(".js-q8").click(function(){
    structure = $(this).data("value")

    removeActive(".js-q8");
    $(this).addClass("is-active");

    hideSection(10);
    showSection(9)
})

$(".js-q9.btn").click(function(){
    removeActive(".js-q9");
    $(this).addClass("is-active");

    hideSection(11);
    showSection(10)
})

$(".js-q10").click(function(){
    removeActive(".js-q10");
    $(this).addClass("is-active");

    if($(this).data("value") == "はい"){
        hideSection(12);
        showSection(11)
    }else{
        hideSection(2);
        showSection(1)
    }
})

$(".js-q11.btn").click(function(){
    removeActive(".js-q11");
    $(this).addClass("is-active");

    hideSection(13);
    showSection(12)

    relation = $("#relation_selector").val()
})

$(".js-q12.btn").click(function(){
    removeActive(".js-q12");
    $(this).addClass("is-active");

    hideSection(14);
    showSection(13)
    
    reason = $("#reason_selector").val()
})

$(".js-q13.btn").click(function(){
    removeActive(".js-q13");
    $(this).addClass("is-active");

    hideSection(15);
    $(`#card-14`).removeClass("d-none")
    $(`#card-14`).addClass("zoomInUp")

    when = $("#when_selector").val()
})

$(".js-q14.is-input-2div3").click(function(){
    removeActive(".js-q14");
    $(this).addClass("is-active");
    
    hideSection(15);
})

$(".js-q14.btn").click(function(){
    if($("#name").val() == "")
        return;
    
    client_name = $("#name").val()

    removeActive(".js-q14");
    $(this).addClass("is-active");

    hideSection(16);
    showSection(15)
})


$(".js-q15.btn").click(function(){
    age = $("#age").val()

    removeActive(".js-q15");
    $(this).addClass("is-active");

    hideSection(17);
    showSection(16)
})


$(".js-q16.btn").click(function(){
    gender = $("#gender").val()

    removeActive(".js-q16");
    $(this).addClass("is-active");

    hideSection(18);
    showSection(17)
})


$(".js-q17.is-input-2div3").click(function(){
    removeActive(".js-q17");
    $(this).addClass("is-active");
    
    hideSection(18);
})

$(".js-q17.btn").click(function(){
    if($("#email").val() == "")
        return;
    
    if(!String($("#email").val()).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        return;
    }

    email = $("#email").val()

    removeActive(".js-q17");
    $(this).addClass("is-active");

    hideSection(19);
    showSection(18)
})



$(".js-q18.is-input-2div3").click(function(){
    removeActive(".js-q18");
    $(this).addClass("is-active");
    
    hideSection(19);
})

$(".js-q18.btn").click(function(){
    if($("#phone").val().length == 0)
        return;
    
    phone = $("#phone").val()

    removeActive(".js-q18");
    $(this).addClass("is-active");

    hideSection(20);
    showSection(19)
})



$(".js-q19.is-input-2div3").click(function(){
    removeActive(".js-q19");
    $(this).addClass("is-active");
    
    hideSection(20);
})

$(".js-q19.btn").click(function(){
    if($("#timezone").val().length == 0)
        return;
    
    timezone = $("#timezone").val()

    removeActive(".js-q19");
    $(this).addClass("is-active");

    showSection(20)
})



$(".js-q20").click(function(){
    if($(this).data("value") == "はい"){

        $.ajax({
            url: "contact-form.php",
            method: "POST",
            data: {
                "client_name" : client_name,
                "age" : age,
                "gender" : gender,
                "email" : email,
                "phone" : phone,
                "timezone": timezone,
                "r_est_type" : r_est_type,
                "location" : `${profecture} ${city} ${village}`,
                "ground_area" : `${ground_area} ${g_area_type == 0 ? '㎡' : '坪'}`,
                "building_area" : `${building_area} ${b_area_type == 0 ? '㎡' : '坪'}`,
                "building_year" : `${b_year_type == 0 ? '' : '築'} ${b_year} 年`,
                "b_price" : `${b_price} 万円/月`,
                "structure" : `${structure}`,
                "relation" : `${relation}`,
                "reason" : `${reason}`,
                "when" : `${when}`,
            },
        })

        var msg_req = `
        お名前: ${client_name} <br>
        年齢: ${age} <br>
        性別: ${gender} <br>
        メールアドレス？: ${email} <br>
        ご連絡先のお電話番号: ${phone} <br>
        連絡のつきやすい時間帯: ${timezone} <br>
        <br>
        ==================================<br>
        <br>
        種別: ${r_est_type}<br>
        エリア（市区町村以下）: ${profecture} ${city} ${village}<br>
        土地面積: ${ground_area} ${g_area_type == 0 ? '㎡' : '坪'}<br>
        建物面積: ${building_area} ${b_area_type == 0 ? '㎡' : '坪'}<br>
        築年数: ${b_year_type == 0 ? '' : '築'} ${b_year} 年 <br>
        家賃収入: ${b_price} 万円/月 <br>
        構造: ${structure} <br>
        物件とのご関係: ${relation} <br>
        依頼理由: ${reason} <br>
        売却時期: ${when} <br>
        `


        var msg_res = `ありがとうございました。<br>
            担当：小田嶋（おだしま）より、 <br>
            2 営業日以内にお電話にてご訪問の予定を調整させて頂<br>
            くためご連絡させていただきます。`

        $("#msg_req").html(msg_req)
        $("#msg_res").html(msg_res)

        
        hideSection(1)
        showMessage();

    }else{
        hideSection(2)
        showSection(1)
    }
})

$("#msg_ok").click(function(){
    window.location.href=""
})

$("#city_selector").change(function(){
    refreshVillage($("#city_selector").val())
    removeActive(".js-q3");
    hideSection(4)
})

$("#village_selector").change(function(){
    removeActive(".js-q3");
    hideSection(4)
})


$("#relation_selector").change(function(){
    hideSection(12)  
    showSection(11)  
})


$("#reason_selector").change(function(){
    hideSection(13)  
    showSection(12)  

})


$("#when_selector").change(function(){
    hideSection(14)  
    showSection(13)  
})
