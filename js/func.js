function $(id){return document.getElementById(id);}
function show(o){document.getElementById(o).style.display="block";}
function hide(o){document.getElementById(o).style.display="none";}
function geturl(url,id){
var http=false;
$(id).innerHTML='<span class="loading">&nbsp;&nbsp;</span>';
if(window.XMLHttpRequest){http=new XMLHttpRequest();if(http.overrideMimeType){http.overrideMimeType('text/plain');}}else if(window.ActiveXObject){try{http=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{http=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}}
if(!http){alert('Cannot send an XMLHTTP request');return false;}
http.onreadystatechange=function(){if(http.readyState==4){$(id).innerHTML=http.responseText;}}
http.open("get", url, true);
http.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
http.send(null);
}







