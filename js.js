import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

var a = 5;
var b = 7;
b = 9;
a = b+5;
console.log(a);
// debugger;
var human={
    name:'Vasia',

}
console.log (human.name);
console.log (human [name]);
var human={
    name:'vasia',
    age:27
}
human.age=27;

console.log (human.age);
// delete human.age;
console.log (human.age);
if('age' in human){
    console.log('ura');
}
for (var key in human){
    console.log('ключ:'+key+'='+human[key]);
}
var human2=human;
human2.name='peta';
console.log(human.name)

var human2={};
for (var key in human){
    human2[key]=human[key];
}
human2.name='peta';
console.log(human);
console.log(human2);
var date=new Date();
console.log (date);
var date2=new Date(2018,8,25);
console.log(date2.getFullYear()+' '+ 
date2.getMonth() +' '+ 
date2.getDate() +' '+ 
date2.getDay()
);
function privet(){
console.log('hi');
};
var data=new Date();
for(var i=0; i<5000;i++){privet()};
console.log(new Date - data);
var seconds = document.querySelector('#seconds');

setInterval(function(){
var now = new Date();
seconds.innerHTML = now.getSeconds();
}, 1000);

let map = new Map();
map.set('student', 'dmitry');
map.set('teacher', 'Vova');
map.get('teacher');
// var conflict=jQuery.noconflict();
$('.block').css('background-color','red');
$('.block').css({'background-color':'black','height':'20px'});
$('.block').addClass('black');
$('.block').removeClass('black');
$('.block').toggleClass('black');
$('.block').hasClass('black');
$('.block').click(function() { $(this).toggleClass('black');  });
$('.h1').click(function() { $('.block').trigger('click');  });
$('.h1').click(function() { $('.block').eq(0).trigger('click');  });
$(document).on('click','#block',function(){
    alert('find');
});
$('body').append ('<div id="block">xxx</div>');
alert($('.block').text());
$('.block').html('<h1>hi</h1>');
$('.block').wrap('<div> </div>');
// $('.block').nnbind('click');
alert($('img.pretty').attr('src'));
$('img.pretty').attr('src', '0.jpg');
$('img').removeAttr('src');
$('.sqr').fadeOut(3000);
$('.sqr').fadeIn(1000);
$('.sqr').fadeToggle(1000);
$('.sqr').show(1000).hide(2000);
$('.sqr').slideDown(2000);
$('.sqr').slideUp(2000);
$('.sqr').slideToggle(2000);
$('.sqr').animate({
    'left':'200px'},2000);
$('.sqr').animate({
        'right':'200px'},2000);
$('body').load('text.txt');
$('body').load('text.txt','a=10',
function(){
    alert('yra');
});
ajaxSend()
$('img').ajaxSend(function(){
    $(this).hide();
});
$('img').ajaxComplete(function(){
    $(this).hide();
});
$('img').ajaxSuccess(function(){
    $(this).hide();
});
$('img').ajaxStart(function(){
    $(this).hide();
});
$.ajax({
    url:'file.php',
    method:'GET',
    dataType:'JSON',
    contentType:'JSON',
    success:function(data){
        alert(data);
    }
});
// $.ajax({
//     url:'http://httpbin.org/ip',
//     method:'GET',
//     success:function(data){
//         console.log(data);
//         alert(data.origin);
    
//     }
})
$.ajax({
    url:'http://httpbin.org/post',
    method:'POST',
    data:{a:2,b:3},
    success:function(data){
        console.log(data)
    }

})