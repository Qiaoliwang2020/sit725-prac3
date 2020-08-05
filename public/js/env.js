$(document).ready(function () {
    $('#calculate').click(function () {

        // set focus to result
        $('#result').focus();

        let num1 = $('#number1').val(),
            num2 = $('#number2').val(),
            numbers = {
                num1:num1,
                num2:num2
            };
        $.get("/adder",numbers, function(data){
            console.log(data,'data');
           $('#result').val(data);
        });
    })
})