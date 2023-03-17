
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
                    "最高土地値" : row['最高土地値'],
                    "～5 年" : row['～5 年'],
                    "6～10 年" : row['6～10 年'],
                    "11～20 年" : row['11～20 年'],
                    "21～30 年" : row['21～30 年'],
                    "30 年以上" : row['30 年以上']
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
                loadData(row['都道府県'])
            }
            $("#prefecture_selector").append("<li class='p-select__item js-q2' data-value='"+row['都道府県']+"' ><p>" + row['都道府県'] + "</p></li>")
            prefectures.push(row['都道府県'])
        })

        
        $(".js-q2").click(function(){
            city = ""
            village = ""
            profecture = $(this).data("value")

            removeActive(".js-q2");
            $(this).addClass("is-active");
                
            hideSection(4);
            showSection(3)

            var name = $(this).data("value");        
            loadData(name)
        })
    });
}

loadPrefecture() ;