
var URL="https://samples.openweathermap.org/data/2.5/weather?zip=12345&appid=";
var KEY="7422de85d889b71fd15b74abc2731f08";
var zip;

$(function() {
    $(".btn").on('click' , function() {
        $.ajax({
            method: 'GET', 
            url: 'https://api.openweathermap.org/data/2.5/weather?zip=07407&appid=741fb7c2bade5517ba546ee3fd714e78',
            dataType: 'json' 
        }).done(function (data){
        console.log(data.weather);
        $('.weather').append(data);
        });
    });
});