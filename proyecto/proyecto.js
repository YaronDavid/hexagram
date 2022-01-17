var uno, dos, tres, vertical, horizontal, bandera = 0, listo = 0, contador=0, auxiliarNormales, auxiliarCambiadas;
var normalesh, normalesv, cambiadash, cambiadasv;
var elemento1, elemento2, elemento3;
var ban1=0, ban2=0, ban3=0;
function iniciar(){
    elemento1 = document.getElementById("dibujadas");
    elemento2 = document.getElementById("normales");
    elemento3 = document.getElementById("cambiadas");
    var instrucciones = "Primero escribe tres numeros cuya suma sea 6, 7, 8 o 9, eso te dara una linea\n Las lineas del 6 y 9 se llaman mutantes, si dibujas al menos una linea mutante tendras dos resultados\n _______\n____ ____\n___o___(mutante)\n ___x____(mutante)\n Una vez obtenido el resultado acerca el mouse cerca de las lineas y veras la frase para ti\n";
    alert(instrucciones);
}

var lineas1 = new Array(6);
var lineas2 = new Array(6);
var lineasGlobal = new Array(6);
var numeros = new Array(8);
for(var i=0; i<8; i++){
numeros[i]=new Array(8);
}
numeros[0][0]=1;
numeros[0][1]=34;
numeros[0][2]=5;
numeros[0][3]=26;
numeros[0][4]=11;
numeros[0][5]=9;
numeros[0][6]=14;
numeros[0][7]=43;
numeros[1][0]=25;
numeros[1][1]=51;
numeros[1][2]=3;
numeros[1][3]=27;
numeros[1][4]=24;
numeros[1][5]=42;
numeros[1][6]=21;
numeros[1][7]=17;
numeros[2][0]=6;
numeros[2][1]=40;
numeros[2][2]=29;
numeros[2][3]=4;
numeros[2][4]=7;
numeros[2][5]=59;
numeros[2][6]=64;
numeros[2][7]=47;
numeros[3][0]=33;
numeros[3][1]=62;
numeros[3][2]=39;
numeros[3][3]=52;
numeros[3][4]=15;
numeros[3][5]=53;
numeros[3][6]=56;
numeros[3][7]=31;
numeros[4][0]=12;
numeros[4][1]=16;
numeros[4][2]=8;
numeros[4][3]=23;
numeros[4][4]=2;
numeros[4][5]=20;
numeros[4][6]=35;
numeros[4][7]=45;
numeros[5][0]=44;
numeros[5][1]=32;
numeros[5][2]=48;
numeros[5][3]=18;
numeros[5][4]=46;
numeros[5][5]=57;
numeros[5][6]=50;
numeros[5][7]=28;
numeros[6][0]=13;
numeros[6][1]=55;
numeros[6][2]=63;
numeros[6][3]=22;
numeros[6][4]=36;
numeros[6][5]=37;
numeros[6][6]=30;
numeros[6][7]=49;
numeros[7][0]=10;
numeros[7][1]=54;
numeros[7][2]=60;
numeros[7][3]=41;
numeros[7][4]=19;
numeros[7][5]=61;
numeros[7][6]=38;
numeros[7][7]=58;
var nombre = ["Ch'ien", "K'un", "Chun", "Meng", "Hsü", "Sung", "Shih", "Pi", "Hsiao Ch'u", "Lü", "T'ai", "P'i", "T'ung Jen", "Ta Yu", "Ch´ien", 
"Yü", "Sui", "Ku", "Lin", "Kuan", "Shih Ho", "Pi", "Po", "Fu", "Wu Wang", "Ta Ch'u", "I", "Ta Kuo", "K'an", "Li", "Hsien", "Heng", "Tun", 
"Ta Chuang", "Chin", "Ming I", "Chia Jen", "K'uei", "Chien", "Hsieh", "Sun", "I", "Kuai", "Kou", "Ts'ui", "Sheng", "K'un", "Ching", "Ko", 
"Ting", "Chen", "Ken", "Chien", "Kuei Mei", "Feng", "Lü", "Sun", "Tüi", "Huan", "Chieh", "Chung fu", "Hsiao Kuo", "Chi Chi", "Wei Chi"];
var carta = ["Cielo. Lo creativo. El principio generador", "Tierra. Lo receptivo. El principio pasivo", "Acumular. El obstaculo inicial. La dificultad del comienzo",
"Juventud. El joven necio. La inmadurez", "Esperar. La Espera. La maduración", "Disfrutar. El conflicto. El pleito", "Ejército. La legión",
"Solidaridad. La unión", "Animalito doméstico. La pequeña fuerza", "Caminar, El porte, El paso cauteloso", "Prosperidad. La paz. La armonía",
"Cierre. El estancamiento. Lo inherente", "Hombres reunidos. La union comunitaria", "Gran dominio, La gran posesión. Lo que se tiene de más",
"Condescendencia. La modestia. La humildad", "Ocuparse. El entusiasmo. La algarabía", "Conformarse. La continuidad. El seguimiento", 
"Destrucción. La reconstrucción. La labor en lo corrompido", "Acercarce. Lo que va llegando", "Observar. La contemplación", "Quebrar mordiendo. La dentellada. La filosa mordedura",
"Adornar. La elegancia. La gracia", "Resquebrajar. La desintegración. El derrumbe", "Regresar. El retorno. Lo que vuele", "Sinceridad. La inocencia. La naturalidad",
"Fuerza educadora. El poder de lo fuerte. La gran acumulación", "Nutrirse. La alimentación. Las fauces", "Excesos. La preponderancia de lo grande",
"Peligro. Lo abismal. La caida", "Distinguir. El resplandor. Lo adherente", "Unir. La fuerza. La atracción", "Luna creciente. La duración. La permanencia",
"Retirarse. El repliegue", "Gran Fuerza. El gran vigor", "Progresar. El avance", "Luz que se apaga. El oscurecimiento", "Gente de familia. El clan",
"Contraste. La oposición. El antagonismo", "Dificultad. El obstaculo. El impedimento", "Explicar. La liberación. El alivio", "Perder. La disminución",
"Evolución. El argumento. La ganancia", "Decidir, El desbordamiento. La resolución", "Encontrarse. El acoplamiento", "Cosechar, La reunion, La convergencia",
"Subir. El ascenso. La escalada", "Angustia. La pesadumbre. El agotamiento", "El pozo de agua. La fuente", "Renovar. La revolución. El cambio",
"La caldera. Lo alquimico", "Trueno. La conmoción. Lo suscitativo", "Cimientos. La quietud. La detención", "Evolución. El progreso gradual",
"Desposar a la hija menor. La doncella", "Abundancia. La plenitud", "Viajero. El andariego", "Viento, Lo penetrante. Lo suave", "Recogerse. La serenidad. La satisfacción",
"Confución. La disperción. La disolución", "La moderación. La restricción. La limitación", "Fe interior. La verdad interior. La sinceridad interna",
"Pequeñas cosas importantes, La pequeña preponderancia", "Conclusiones. Despues de la realización", "Inconcluso. Antes de la realización"];
function subir(){
    var miNombre, pe, linea;
    if(contador<6){
        uno=parseInt(document.getElementById("uno").value);
        dos=parseInt(document.getElementById("dos").value);
        tres=parseInt(document.getElementById("tres").value);
        elemento1.className= 'final';
        var total = uno + dos + tres;
        lineasGlobal[contador]=total;
        lineas1[contador]=total;
        lineas2[contador]=total;
        switch (total){
            case 6:
                dibujar(1);
                bandera++;
                contador++;
            break;
            case 7:
                dibujar(2);
                contador++;
            break;
            case 8:
                dibujar(3);
                contador++;
            break;
            case 9:
                dibujar(4);
                bandera++;
                contador++;
            break;
            default:
                alert("Suma invalida");
        }
        if(contador==6&&bandera!=0){
            normales(lineas1);
            cambiadas(lineas2);
        }
        if(contador==6&&bandera==0){
            miNombre=nombrar(lineas1, 1);
                pe = document.createElement("p");
                linea = document.createTextNode(miNombre);
                pe.appendChild(linea);
                elemento1.appendChild(pe);
                colorear(1);
        }
    }
    else{
        alert("borra una linea o reinicia");
    }
}
function dibujar(caso){
    var pe, linea, u, ref;
    pe = document.createElement("p");
    u = document.createElement("u");
    if(caso == 1){
        linea = document.createTextNode("___x___");
        pe.appendChild(linea);
    }
    if(caso == 2){
        linea = document.createTextNode("_______");
        pe.appendChild(linea);
    }
    if(caso == 3){
        linea = document.createTextNode("___ ___");
        pe.appendChild(linea);
    }
    if(caso == 4){
        linea = document.createTextNode("___o___");
        pe.appendChild(u);
        u.appendChild(linea);
    }
    if(listo == 1){
        ref = document.getElementById("dibujadas").getElementsByTagName("p")[0];
        document.getElementById('dibujadas').insertBefore(pe,ref);
    }
    else{
        elemento1.appendChild(pe);
        listo = 1;
    }
}
function normales(lineas){
    var pe, linea, miNombre;
    for(var i=5; i>=0; i--){
    pe = document.createElement("p");
    elemento2 = document.getElementById("normales");
    elemento2.className="final";
        if(lineas[i]==7||lineas[i]==9){
            linea = document.createTextNode("_______");
            pe.appendChild(linea);
            lineas[i]=7;
        }
        if(lineas[i]==6||lineas[i]==8){
            linea = document.createTextNode("___ ___");
            pe.appendChild(linea);
            lineas[i]=8;
        }
        elemento2.appendChild(pe);
    }
    miNombre=nombrar(lineas, 2);
            if(miNombre){
                pe = document.createElement("p");
                linea = document.createTextNode(miNombre);
                pe.appendChild(linea);
                elemento2.appendChild(pe);
                colorear(2);
            }
}
function cambiadas(lineas){
    var pe, linea, miNombre;
    for(var i=5; i>=0; i--){
    pe = document.createElement("p");
    elemento3 = document.getElementById("cambiadas");
    elemento3.className="final";
        if(lineas[i]==7||lineas[i]==6){
            linea = document.createTextNode("_______");
            pe.appendChild(linea);
            lineas[i]=7;
        }
        if(lineas[i]==9||lineas[i]==8){
            linea = document.createTextNode("___ ___");
            pe.appendChild(linea);
            lineas[i]=8;
        }
        elemento3.appendChild(pe);
    }
    miNombre=nombrar(lineas, 3);
            if(miNombre){
                pe = document.createElement("p");
                linea = document.createTextNode(miNombre);
                pe.appendChild(linea);
                elemento3.appendChild(pe);
                colorear(3);
            }
}
function nombrar(lineas, caso){
    var num, nom;
    if(lineas[5]==7){
        if(lineas[4]==7){
            if(lineas[3]==7){
                vertical=0;
            }else{
                vertical=5;
            }
        }else{
            if(lineas[3]==7){
                vertical=6;
            }else{
                vertical=3;
            }
        }
    }else{
        if(lineas[4]==7){
            if(lineas[3]==7){
                vertical=7;
            }else{
                vertical=2;
            }
        }else{
            if(lineas[3]==7){
                vertical=1;
            }else{
                vertical=4;
            }
        }
    }
    if(lineas[2]==7){
        if(lineas[1]==7){
            if(lineas[0]==7){
                horizontal=0;
            }else{
                horizontal=5;
            }
        }else{
            if(lineas[0]==7){
                horizontal=6;
            }else{
                horizontal=3;
            }
        }
    }else{
        if(lineas[1]==7){
            if(lineas[0]==7){
                horizontal=7;
            }else{
                horizontal=2;
            }
        }else{
            if(lineas[0]==7){
                horizontal=1;
            }else{
                horizontal=4;
            }
        }
    }
    num=numeros[horizontal][vertical];
    if (caso==2){
        normalesh=horizontal;
        normalesv=vertical;
        auxiliarNormales=num;
    }
    if(caso==3){
        cambiadash=horizontal;
        cambiadasv=vertical;
        auxiliarCambiadas=num;
    }
    nom=num+". "+nombre[num - 1];
    return nom;
}
function borrar(){
    var aux;
    if(!elemento1.hasChildNodes()){
        alert("Ya no hay lineas que borrar");
    }
    if(contador==6&&bandera==0){
        elemento1.removeChild(elemento1.lastChild);
        aux = document.getElementsByClassName("finalmente");
        aux[0].className = "numeros";
    }
    if(contador==6&&bandera!=0){
        elemento2.className="normales";
        elemento3.className="cambiadas";
        while(elemento2.hasChildNodes()){
            elemento2.removeChild(elemento2.lastChild);
        }
        while(elemento3.hasChildNodes()){
            elemento3.removeChild(elemento3.lastChild);
        }
        aux = document.getElementsByClassName("finalmente");
        aux[0].className = "numeros";
        aux[0].className = "numeros";
    }
    if(lineasGlobal[contador-1]==9||lineasGlobal[contador-1]==6){
        bandera--;
    }
    if(elemento1.hasChildNodes()){
        elemento1.removeChild(elemento1.firstChild);
        contador--;
    }
}
function escribir(elem){
    var numero = numeros[horizontal][vertical];
    var letras;
    var span;
    span = document.createElement("h3");
    if(elem==1&&bandera==0&&contador==6){
        letras = document.createTextNode(carta[numero-1]);
        span.appendChild(letras);
        elemento1.appendChild(span);
    }
    if(elem==2&&bandera!=0&&contador==6){
        letras = document.createTextNode(carta[auxiliarNormales-1]);
        span.appendChild(letras);
        elemento2.appendChild(span);
    }
    if(elem==3&&bandera!=0&&contador==6){
        letras = document.createTextNode(carta[auxiliarCambiadas-1]);
        span.appendChild(letras);
        elemento3.appendChild(span);
    }
}
function nada(caso){
    if(contador==6&&bandera==0&&caso==1){
        elemento1.removeChild(elemento1.lastChild);
    }
    if(contador==6&&caso==2){
        elemento2.removeChild(elemento2.lastChild);
    }
    if(contador==6&&caso==3){
        elemento3.removeChild(elemento3.lastChild);
    }
}
function colorear(nume){
    var array=document.getElementsByClassName("numeros");
    var n1, n2;
    if(nume==1)
    array[(horizontal*8)+vertical].className="finalmente";
    if(nume==2)
    array[(normalesh*8)+normalesv].className="finalmente";
    if(nume==3){
        if((normalesh*8)+normalesv>(cambiadash*8)+cambiadasv){
            array[(cambiadash*8)+cambiadasv].className="finalmente";
        }
        else{
            array[(cambiadash*8)+cambiadasv-1].className="finalmente";
        }
    }
}