

var displayTable = function(params) {

        var html = '';

        $.each(params, function(key, value) {

                html += '<tr><td>' +

                    value["name"] +

                    '</td><td>' +

                    value["date"] +

                    '</td><td>' +

                    value["assigned"] +

                    '</td></tr>';

            });

        $('#dataTable').prepend(html);

    };

 var addTaskToTable = function(data){
        var tableData = '';
       
        $.each(data,function(key,value){
            
            if ($.trim(value["value"]).length === 0) {
                tableData = ''
                return false;
            }
            
            tableData = tableData + '<td>' + value["value"] +'</td>'
        });  
        
        if(tableData.length === 0){
            return false;
        }

        $('#dataTable').prepend('<tr>'+tableData+'</tr>');
}

var taskRunner = function(params){
    
       $("#datePicker").datepicker();

       displayTable(params);

      $('#add-task').on('submit', function(e) {
                e.preventDefault();
                var data = $(this).serializeArray();
                addTaskToTable(data)
        });
};

 $(document).on("ready", function(){
    var existingData = [
            {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
            {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
            {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
            {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
            {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
            {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
            {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
            ];
           taskRunner(existingData);
});
