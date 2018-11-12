$(function (){
    $('form').on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'addCar',
            data: $('form').serialize(),
            success: function () {
                openCars();
            },
            error:function () {
                alert("oops");
            }
        })
    })
})