var ExcelToJSON = function() {
    var workbook = XLSX.read(data, {
      type: 'binary'
    });
    workbook.SheetNames.forEach(function(sheetName) {
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      var productList = JSON.parse(JSON.stringify(XL_row_object));

      var rows = $('#tblItems tbody');
      // console.log(productList)
      for (i = 0; i < productList.length; i++) {
        var columns = Object.values(productList[i])
        rows.append(`
            <tr>
                <td>${columns[0]}</td>
                <td>${columns[1]}</td>
                <td>${columns[2]}</td>
                <td>${columns[3]}</td>
                <td>${columns[4]}</td>
            </tr>
        `);
      }

    })
  };
  
  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(files[0]);
  }