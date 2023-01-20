
indice = 0;
taille = 1000;
function next(){
    if(indice<taille-1){
        indice++;
    }
}
function pred(){
    if(indice>0){
        indice--;
    }
}

function load_CoupeDumonde(){
    //cette fonction load le contenu de la premiere league
    $('#content1').load('CoupeDumonde.html');
    setInterval(function score(){
        if(window.XMLHttpRequest){
            var request = new XMLHttpRequest();
        }else{
            var request = new ActiveXObject("Microsoft.HMLHTTP");
        }
        request.onreadystatechange = function(){
            if(request.readyState == 4 && request.status ==200){
                var change1="";
                var change2="";
                var xmlDoc = request.responseXML;
                var result = xmlDoc.getElementsByTagName("match");
                taille = result.length;
                change1+="<img class='l'src='images/"+result[indice].getElementsByTagName("equipe1")[0].childNodes[0].nodeValue+".jpg"+"'>";
                document.getElementById("eq1").innerHTML=change1;
                document.getElementById("nm1").innerHTML=result[indice].getElementsByTagName("nom1")[0].childNodes[0].nodeValue;
                change2+="<img class='l'src='images/"+result[indice].getElementsByTagName("equipe2")[0].childNodes[0].nodeValue+".jpg"+"'>";
                document.getElementById("eq2").innerHTML=change2;
                document.getElementById("nm2").innerHTML=result[indice].getElementsByTagName("nom2")[0].childNodes[0].nodeValue;
                document.getElementById("score").innerHTML=result[indice].getElementsByTagName("score")[0].childNodes[0].nodeValue;
                document.getElementById("h").innerHTML=result[indice].getElementsByTagName("heure")[0].childNodes[0].nodeValue;
                document.getElementById("d").innerHTML=result[indice].getElementsByTagName("duree")[0].childNodes[0].nodeValue;
                document.getElementById("ch").innerHTML=result[indice].getElementsByTagName("chaine")[0].childNodes[0].nodeValue;
                
            }  
        }
        request.open("GET","Resultat.xml",true);
        request.send();
    },1000);
}


function load_DZ(){
    //cette fonction load le contenu de la premiere league
    $('#content1').load('DZ.html');
    setInterval(function score(){
        if(window.XMLHttpRequest){
            var request = new XMLHttpRequest();
        }else{
            var request = new ActiveXObject("Microsoft.HMLHTTP");
        }
        request.onreadystatechange = function(){
            if(request.readyState == 4 && request.status ==200){
                var change1="";
                var change2="";
                var xmlDoc = request.responseXML;
                var result = xmlDoc.getElementsByTagName("match");
                taille = result.length;
                change1+="<img class='l'src='images2/"+result[indice].getElementsByTagName("equipee1")[0].childNodes[0].nodeValue+".jpg"+"'>";
                document.getElementById("eqq1").innerHTML=change1;
                document.getElementById("nmm1").innerHTML=result[indice].getElementsByTagName("nomm1")[0].childNodes[0].nodeValue;
                change2+="<img class='l'src='images2/"+result[indice].getElementsByTagName("equipee2")[0].childNodes[0].nodeValue+".jpg"+"'>";
                document.getElementById("eqq2").innerHTML=change2;
                document.getElementById("nmm2").innerHTML=result[indice].getElementsByTagName("nomm2")[0].childNodes[0].nodeValue;
                document.getElementById("scoree").innerHTML=result[indice].getElementsByTagName("scoree")[0].childNodes[0].nodeValue;
                document.getElementById("hh").innerHTML=result[indice].getElementsByTagName("heuree")[0].childNodes[0].nodeValue;
                document.getElementById("dd").innerHTML=result[indice].getElementsByTagName("duree")[0].childNodes[0].nodeValue;
                document.getElementById("chh").innerHTML=result[indice].getElementsByTagName("chainee")[0].childNodes[0].nodeValue;
                
            }  
        }
        request.open("GET","Resultat2.xml",true);
        request.send();
    },1000);
}
