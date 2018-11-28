$(document).ready(function () {
    $("#content").load("home.html");

    $.each($('.menuButton'), function (mbIndex, mbValue) {


        $(mbValue).click(function (event) {
            event.preventDefault();
            if (($(this).find('a').attr("href")) != "index.html") {
                $('#content').load($(this).find('a').attr("href"));
                $('#table').load($(this).find('a'))
            } else {
                open("index.html", "_self")
            }
        })
    })
});


function openCars() {
    $.getJSON('cars', function (data) {
        var table = $('<table></table>');
        table.append('<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th>');

        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var name = $('<td>' + value.name + '</td>');
            var consumption = $('<td>' + value.consumption + '</td>');
            var color = $('<td>' + value.color + '</td>');
            var manufacturer = $('<td>' + value.manufacturer + '</td>');
            var available = $('<td>' + value.available + '</td>');
            var year = $('<td>' + value.year + '</td>');
            var horsepower = $('<td>' + value.horsepower + '</td>');
            row.append(name);
            row.append(consumption);
            row.append(color);
            row.append(manufacturer);
            row.append(available);
            row.append(year);
            row.append(horsepower);
            table.append(row);
        })



        $("#tableManufacturers").empty();
        $("#tableCar").html(table);
    })
}

function CookieManufacturers(man) {
    document.cookie = "name=" + man;
    $.getJSON("manufacturer", function (data) {
        var table = $('<table></table>');
        table.append('<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th>');

        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var name = $('<td>' + value.name + '</td>');
            var consumption = $('<td>' + value.consumption + '</td>');
            var color = $('<td>' + value.color + '</td>');
            var manufacturer = $('<td>' + value.manufacturer + '</td>');
            var available = $('<td>' + value.available + '</td>');
            var year = $('<td>' + value.year + '</td>');
            var horsepower = $('<td>' + value.horsepower + '</td>');
            row.append(name);
            row.append(consumption);
            row.append(color);
            row.append(manufacturer);
            row.append(available);
            row.append(year);
            row.append(horsepower);
            table.append(row);
        })

        $("#selectTable").html(table);
    })
}

function openManufacturers() {
    $.getJSON('manufacturers', function (data) {
        var table = $('<table></table>');
        table.append('<tr><th>Name</th><th>Country</th><th>Founded</th>');

        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var Name = $('<td onclick="CookieManufacturers(' + "'" + value.name + "'" + ')">' + value.name + '</td>');
            var Country = $('<td>' + value.country + '</td>');
            var Founded = $('<td>' + value.founded + '</td>');
            row.append(Name);
            row.append(Country);
            row.append(Founded);
            table.append(row);
        })

        $("#tableCar").empty();
        $("#tableManufacturers").html(table);
    })
}

function carsTableLoad() {
    if ($('#tableCar').is(':empty')) {
        document.getElementById("tesla").style.display="none";
        openCars();
    } else {
        $('#tableCar').empty();
        document.getElementById("tesla").style.display="";
    }
}

function manufacturersTableLoad() {
    if ($('#tableManufacturers').is(':empty')) {
        document.getElementById("tesla").style.display="none";
        openManufacturers();
    } else {
        $('#tableManufacturers').empty();
        document.getElementById("tesla").style.display="";
    }
}



