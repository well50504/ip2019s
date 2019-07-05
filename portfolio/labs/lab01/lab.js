/*

*/


function start(e) {
    var name = [
    {
        char: '徐',
        big5: 'AE7D',
        cns:  '1-5541',
        unicode: '5F90',

    },
    {
        char: '煒',
        big5: 'DE6D',
        cns:  '2-4453',
        unicode: '7152',

    },
    {
        char: '彤',
        big5: 'A7CD',
        cns:  '1-4A2F',
        unicode: '5F64',

    },


    ];

    var ele = document.getElementById('div1');

    for(var i = 0; i < 3; i++){
       ele.innerHTML += name[i].char;
       ele.innerHTML += ' big5 = ';
       ele.innerHTML += name[i].big5;
       ele.innerHTML += ' cns = ';
       ele.innerHTML += name[i].cns;
       ele.innerHTML += ' unicode = ';
       ele.innerHTML += name[i].unicode;
       ele.innerHTML += '<br>';


    }


}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
