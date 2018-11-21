$(function (){
    $('form').on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'addManufacturers',
            data: $('form').serialize(),
            success: function () {
                openManufacturers();
                alert("Succesfull!");

                },
            error:function () {
                alert("oops");
            }
        })
    })
})
$(openManufacturers());

