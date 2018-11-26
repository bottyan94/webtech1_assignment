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
$(function ManufacturersName() {
    $.getJSON('manufacturerNames', function (data) {
        var output = [];

        $.each(data, function (key, value) {
            output.push('<option value="' + value + '">' + value + '</option>');
        })
        $('#ManufacturerNameList').html(output);
    })
});

