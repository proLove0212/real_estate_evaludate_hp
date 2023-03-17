
function refreshVillage(city_name){
    data = Object.keys(store[city_name])

    $("#village_selector").html("")

    data.forEach(village =>{
        $("#village_selector").append("<option value='"+village+"'>"+village+"</option>")
    })
}

function loadData(name) {
    fetch('/assets/data/'+name+".xlsx", {
        method: 'get',
    }).then(res => { 
        return res.arrayBuffer();
    })
    .then(res => {
        var workbook = XLSX.read(new Uint8Array(res), {
            type: 'array'
        });

        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets["Sheet1"]);

        store = {}

        $("#city_selector").html("")
        $("#village_selector").html("")

        XL_row_object.forEach(function(row){
            if(store[row['市区町村']]){
                store[row['市区町村']][row['町字']] = {
                    "最低土地値" : row['最低土地値'],
                    "最高土地値" : row['最高土地値']
                }
            }else{
                store[row['市区町村']] = {}
                $("#city_selector").append("<option value='"+row['市区町村']+"'>"+row['市区町村']+"</option>")
            }
        })

        if(Object.keys(store).length > 0){
            refreshVillage(Object.keys(store)[0])
        }else{
            $("#village_selector").html("")
        }
    });
}


function loadPrefecture() {
    fetch('/assets/data/index.xlsx', {
        method: 'get',
    }).then(res => { 
        return res.arrayBuffer();
    })
    .then(res => {
        var workbook = XLSX.read(new Uint8Array(res), {
            type: 'array'
        });

        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets["Sheet1"]);

        prefectures = []

        $("#prefecture_selector").html("")

        XL_row_object.forEach(function(row){
            if(prefectures.length == 0){
                $("#prefecture_selector").append("<li class='p-select__item js-q2 is-active' data-value='"+row['都道府県']+"' ><p>" + row['都道府県'] + "</p></li>")
                
                loadData(row['都道府県'])
            }else{
                $("#prefecture_selector").append("<li class='p-select__item js-q2' data-value='"+row['都道府県']+"' ><p>" + row['都道府県'] + "</p></li>")
            }
            prefectures.push(row['都道府県'])
        })

        
        $(".js-q2").click(function(){
            removeActive(".js-q2");
            $(this).addClass("is-active");
                
            hideSection(4);
            $(`#card-3`).removeClass("d-none")
            var name = $(this).data("value");        
            loadData(name)
        })
    });
}

loadPrefecture() ;