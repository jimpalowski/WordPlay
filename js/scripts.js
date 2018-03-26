$(document).ready(function() {
  $("#form").submit(function(event) {
    var str = $("input[name=write]").val();
    console.log(str);
    var splitstr = str.split(" ");
    console.log(splitstr);

    });
    });
