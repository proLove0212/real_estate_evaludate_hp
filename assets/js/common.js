var store = {}
var q1;

function removeActive(param){
    $(param).removeClass("is-active")
}


$(".js-q1").click(function(){
    removeActive(".js-q1");
    $(this).addClass("is-active");
    q1 = $(this).children("p").html();
})

$(".js-q2").click(function(){
    removeActive(".js-q2");
    $(this).addClass("is-active");
    q2 = $(this).children("p").html();

    console.log($(this).attr("value"))
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



function loadData() {
    fetch('/assets/data/data.xlsx', {
        method: 'get',
    }).then(res => { 
        return res.arrayBuffer();
    })
    .then(res => {
        var workbook = XLSX.read(new Uint8Array(res), {
            type: 'array'
        });

        workbook.SheetNames.forEach(function(sheetName) {
            // Here is your object
            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
 
            XL_row_object.forEach(function(row){
                
            })
        })
    });
}