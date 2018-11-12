$(function (){
    $('form').on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'addManufacturers',
            data: $('form').serialize(),
            success: function () {
                openManufacturers();
            },
            error:function () {
                alert("oops");
            }
        })
    })
})