/* 404 Web page - NUIT DE L'INFO: malloc(rane) Group © 2018. */

function game(){
    width = 600;
    height = 700;
    if(window.innerWidth){
        var left = (window.innerWidth-width)/2;
        var top = (window.innerHeight-height)/2;
    }
    else{
        var left = (document.body.clientWidth-width)/2;
        var top = (document.body.clientHeight-height)/2;
    }
    window.open('views/Canvas_HTML.html','Morpion','menubar=no, scrollbars=no, top='+top+', left='+left+', width='+width+', height='+height+'');
}

function cookies(){
    width = 450;
    height = 450;
    if(window.innerWidth){
        var left = (window.innerWidth-width)/2;
        var top = (window.innerHeight-height)/2;
    }
    else{
        var left = (document.body.clientWidth-width)/2;
        var top = (document.body.clientHeight-height)/2;
    }
    window.open('views/Cookie_HTML.html','Cookies','menubar=no, scrollbars=no, top='+top+', left='+left+', width='+width+', height='+height+'');
}