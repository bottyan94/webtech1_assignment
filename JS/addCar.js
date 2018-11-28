$(openCars());
$(function () {
    $('form').on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'addCar',
            data: $('form').serialize(),
            success: function () {
                openCars();
                alert("Succesfull!");
            },
            error: function () {
                alert("oops");
            }
        })
    })
})
$(function getManufacturersNames() {
    $.getJSON('manufacturerNames', function (data) {
        var output = [];

        $.each(data, function (key, value) {
            output.push('<option value="' + value + '">' + value + '</option>');
        })
        $('#ManufacturerNameList').html(output);
    })
});

$($('input').change(function () {
    var y = $('#year').val();
    if (y !== null) {
        if (y < 1995) {
            $('#year').val(2018);
        }
        if (n > 2018) {
            $('#year').val(2018);
        }
    }
    var a = $('#available').val();
    if (a !== null){
        if (a<0) {
            $('#available').val(1);
        }
    }

    var h = $('#horsepower').val();
    if (h !== null){
        if (h<25) {
            $('#horsepower').val(90);
        }
    }


}))


