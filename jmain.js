var wn = 0;
var tim = 0;
var bul = 0;
var ifa = 0;
var np = 0;
var a = new Audio();

function vyp(b,e){ return( Math.round(Math.random()*(e-b))+b); }

/*function vsika(ky=1)
{
var e=0, res=mms[ky][0][e++];
if(mms[ky][0][0]=="["){res+=mms[ky][0][e++]; }
for(;mms[ky][0][e];e++)
{
if(mms[ky][0][e]=="]"){res+="]"; break;}
if(mms[ky][0][e]=="("){res+=" ("+mms[ky][0][++e]; continue;}
res+="/"+mms[ky][0][e];
}e--;
return res;
}*/

function vsika(ky=1)
{
var gr=0;
var e=0, res=mms[ky][0][e++];
if(mms[ky][0][e-1]==1){e--;}
if(mms[ky][0][0]=="["){gr=1; res="<span class='bl'>"; /*res+=mms[ky][0][e++];*/ }
for(;mms[ky][0][e];e++)
{
if(mms[ky][0][e]=="]"){/*res+="]";*/ break;}
if(mms[ky][0][e]=="("){
	if(gr==1){res+="</span>";}else{gr=1;} res+="<span class='gr'>"; continue;}
if(mms[ky][0][e]=="1"){e++;
	res+="　";
	if(e==1){res='';}
	br0=0;
	for(q=0;q<100;q++)
	{	
		if(mms[ky][0][e].charCodeAt(q)>0);else{break;}
		if(mms[ky][0][e][q]=="("){br0=1; res+="<span class='re'>"; continue;}
		if(mms[ky][0][e][q]==")" && br0==1){br0=0; res+="</span>"; continue;}
		if(mms[ky][0][e][q]=="["){br0=1; res+="<span class='ge'>"; continue;}
		if(mms[ky][0][e][q]=="]" && br0==1){br0=0; res+="</span>"; continue;}
		res+=mms[ky][0][e][q];
		//if(mms[ky][0][e].charCodeAt(q)>0);else{break;}
	}
continue;	
}
if(e==1 && mms[ky][0][0]=="["){res+=mms[ky][0][e];}else{res+="　"+mms[ky][0][e];}
}e--;
if(gr==1){res+="</span>";}
return res;
}

function vypka(au0=0)
{var e=0, mas1=['',''], res="ura";
var if_=0;
for(x=0;mms[wn][0][x];x++,e++)
{
if(mms[wn][0][x]=="["){if_=1; e--;continue;}
if(mms[wn][0][x]=="("){break;}
if(mms[wn][0][x]=="]"){/*e--;*/ break;}
if(mms[wn][0][x]==1){ x++; //e--; continue;
var sl3='';
var br0=0;
	for(q=0;q<100;q++)
	{	
		if(mms[wn][0][x].charCodeAt(q)>0);else{break;}
		if(mms[wn][0][x][q]=="("){br0=1; continue;}
		if(mms[wn][0][x][q]==")"){br0=0; continue;}
		if(br0==1){continue;}
		if(mms[wn][0][x][q]=="["){ continue;}
		if(mms[wn][0][x][q]=="]"){ continue;}
		sl3+=mms[wn][0][x][q];
		//if(mms[wn][0][x].charCodeAt(q)>0);else{break;}
	}
mas1[e]=sl3; continue;
}
mas1[e]=mms[wn][0][x];
}e--;

if(au0==1){res=mas1[0];}else{res=mas1[ (vyp(0,e)) ];}
//if(if_==1){res="<span class='bl'>"+res+"</span>";}
//res=mas1;
return res;
}

function vsit(ky=1)
{
var e=0;//, res='';
if(mms[ky][1][e]==1){e++;}
var res=mms[ky][1][e++];
for(;mms[ky][1][e];e++)
{
if(mms[ky][1][e]==1){continue;}
if(mms[ky][1][e]=="("){res+=" ("+mms[ky][1][++e]; continue;}
res+="/"+mms[ky][1][e];
}e--;
if( vyp(0,1) ){res=wanakana.toKatakana(res);}
return res;
}

var allau=['',''], eau=0;
function allauf()
{eau=0;
for(x=0;mms[wn][1][x];x++,eau++)
{
if(mms[wn][1][x]=="("){break;}
if(mms[wn][1][x]==1){x++;eau--; continue;}
allau[eau]=mms[wn][1][x];
}eau--;
}
//var a = new Audio();
function sou0(k)
{var a = new Audio();
//var akan=mms[wn][0][0]; if(akan=="["){akan=mms[wn][0][1];}
var kan00=vypka(1);
//$(".transl").append("SFSDF"+wn+kan00);
a.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+allau[k]+'&kanji='+kan00;
a.play();
a.onended = function(){ if(k<eau){sou0(++k);} }
}

function sou(vo)
{
allauf();
if(eau>-1){ sou0(0); }
//$(".transl").append("SFSDF"+wn);
}

/*function vypka()
{var e=0, mas1=['',''], res="ura";
var if_=0;
for(x=0;mms[wn][0][x];x++,e++)
{
if(mms[wn][0][x]=="["){if_=1; e--;continue;}
if(mms[wn][0][x]=="("){break;}
if(mms[wn][0][x]=="]"){ break;}
mas1[e]=mms[wn][0][x];
}e--;
res=mas1[ (vyp(0,e)) ];//+' '+e;
if(if_==1){res="["+res+"]";}
//res=mas1;
return res;
}*/

function word(){
	if(bul==0){bul=1; np=vyp(0,1);
	tim++;
	wn = (vyp(0,kss))+1;
	$(".time").replaceWith("<p class='time'>"+tim+"</p>");
	$(".num").replaceWith("<p class='num'>"+wn+"</p>");
	$(".transc").replaceWith("<p class='transc'> </p>");
		if(np==0){
		$(".orig").replaceWith("<p class='orig'>"+vypka(wn)+"</p>");
		$(".transl").replaceWith("<p class='transl'> </p>");
		}
		else{
		$(".orig").replaceWith("<p class='orig'> </p>");
		$(".transl").replaceWith("<p class='transl'>"+mms[wn][2]+"</p>");
		}
	}else{bul=0;
	$(".transc").replaceWith("<p class='transc'>"+vsit(wn)+"</p>");
	$(".orig").replaceWith("<p class='orig'>"+vsika(wn)+"</p>");
		if(np==0){
		$(".transl").replaceWith("<p class='transl'>"+mms[wn][2]+"</p>");
		}
		else{
		//$(".orig").replaceWith("<p class='orig'>"+vsika(wn)+"</p>");
		}
	if(ifa){ sou(); }
	}
}

var main = function() {
"use strict";

word();

$("button.bm").on("click", function(event){ word(); });
$("button.bsou").on("click", function(event){
	if(ifa==0){ifa=1; document.getElementById("bs").style.color = "blue"; sou();
	}else{ifa=0; document.getElementById("bs").style.color = "red"; a.pause(); a.currentTime = 0.0;}
});

};
$(document).ready(main);