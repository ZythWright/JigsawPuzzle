// Aldo Menéndez

var intervaloTemporal;
var timeLeft = false;

function canvia(posicion0, posicion1) {

  // Esto se hace para detectar las posiciones.
  // alert(posicion0 + "," + posicion1);

  // El tiempo. Se inicia en cuanto empiece el puzzle.
  var segundos = 1;

  // Aquí se determinan parámetros para detener el contador.
  if (timeLeft == false) {
    window.setInterval(function(){
        intervaloTemporal = document.getElementById("segundos").innerHTML = segundos;
        segundos++;
    },1000);
  }

  timeLeft = true;

  var idPieza = event.srcElement.id;
  if (document.getElementById(idPieza).style.backgroundColor == "rgb(255, 255, 255)") {

  } else {

    // Ordenados del 1 al 9.
    var c21 = document.getElementById("c21").style.backgroundColor;
    var c00 = document.getElementById("c00").style.backgroundColor;
    var c10 = document.getElementById("c10").style.backgroundColor;
    var c20 = document.getElementById("c20").style.backgroundColor;
    var c22 = document.getElementById("c22").style.backgroundColor;
    var c01 = document.getElementById("c01").style.backgroundColor;
    var c12 = document.getElementById("c12").style.backgroundColor;
    var c02 = document.getElementById("c02").style.backgroundColor;

    // Esto es el cuadro blanco.
    var c11 = document.getElementById("c11").style.backgroundColor;

  switch("rgb(255, 255, 255)") {

    // Casilla 2.
    case c00:
    var turnabout = "c00";

    var objetivo = posicion0 + "," + posicion1;

    if (objetivo == "0,1") {
      changeYourCubito();
    } else if (objetivo == "1,0") {
      changeYourCubito();
    } else {
  //  console.log("CONCHATUMADREEEEEEE");
    }
    break;

    // Casilla 6.
    case c01:
    var turnabout = "c01";

    var objetivo = posicion0 + "," + posicion1;

    if (objetivo == "0,0") {
      changeYourCubito();
    } else if (objetivo == "0,1") {
      changeYourCubito();
    } else if (objetivo == "0,2") {
      changeYourCubito();
    } else if (objetivo == "1,2") {
      changeYourCubito();
    } else {
  //  console.log("eeeeeee vela la soplavela eeeeeeeee");
    }
    break;

    // Casilla 8.
    case c02:
    var turnabout = "c02";

    var objetivo = posicion0 + "," + posicion1;

    if (objetivo == "0,1") {
      changeYourCubito();
    } else if (objetivo == "1,2") {
      changeYourCubito();
    } else {
  //  console.log("test");
    }
    break;

    // Casilla 3.
    case c10:
    var turnabout = "c10";

    var objetivo = posicion0 + "," + posicion1;

    if (objetivo == "0,0") {
      changeYourCubito();
    } else if (objetivo == "2,0") {
      changeYourCubito();
    } else if (objetivo == "1,1") {
        changeYourCubito();
    } else {
  //  console.log("(!)");
    }
    break;

    // Cuadrito blanquito color leche.
    case c11:
      var turnabout = "c11";

      var objetivo = posicion0 + "," + posicion1;

      if (objetivo == "0,1") {
        changeYourCubito();
      } else if (objetivo == "1,2") {
        changeYourCubito()
      } else if (objetivo == "2,1") {
        changeYourCubito()
      } else if (objetivo == "1,0") {
        changeYourCubito()
      } else {
        // console.log("el cuadro blanco ya funciona!!!!");
      }
    break;

    // Casilla 7.
    case c12:
    var turnabout = "c12";

    var objetivo = posicion0 + "," + posicion1;

    if (objetivo == "0,2") {
      changeYourCubito();
    } else if (objetivo == "1,2") {
      changeYourCubito();
    } else if (objetivo == "2,2") {
        changeYourCubito();
    } else if (objetivo == "1,1") {
        changeYourCubito();
    } else {
  //  console.log("en doraemon es petit");
    }
    break;

    // Casilla 4.
    case c20:
    var turnabout = "c20";

    var objetivo = posicion0 + "," + posicion1;

    if (objetivo == "1,0") {
      changeYourCubito();
    } else if (objetivo == "2,1") {
      changeYourCubito();
    } else {
  //  console.log("99999999999999999");
    }
    break;

    // Casilla 1.
    case c21:
    var turnabout = "c21";

    var objetivo = posicion0 + "," + posicion1;

    if (objetivo == "2,0") {
      changeYourCubito();
    } else if (objetivo == "2,2") {
      changeYourCubito();
    } else if (objetivo == "1,1") {
        changeYourCubito();
    } else {
  //  console.log("test");
    }
    break;

    // Casilla 5
    case c22:
    var turnabout = "c22";

    var objetivo = posicion0 + "," + posicion1;

    if (objetivo == "2,1") {
      changeYourCubito();
    } else if (objetivo == "1,2") {
      changeYourCubito();
    } else {
  //  console.log("la casilla");
    }
    break;

  }

}

  function changeYourCubito() {

    var change = (document.getElementById(idPieza).style.backgroundColor);

    document.getElementById(turnabout).style.backgroundColor = change;
    document.getElementById(idPieza).style.backgroundColor = "rgb(255, 255, 255)";

    var nambah = document.getElementById(idPieza).innerHTML;
    document.getElementById(idPieza).innerHTML = "";
    document.getElementById(turnabout).innerHTML = nambah;

    var one = document.getElementById("c00").innerHTML;
    var two = document.getElementById("c01").innerHTML;
    var three = document.getElementById("c02").innerHTML;
    var four = document.getElementById("c10").innerHTML;
    var five = document.getElementById("c11").innerHTML;
    var six = document.getElementById("c12").innerHTML;
    var seven = document.getElementById("c20").innerHTML;
    var eight = document.getElementById("c21").innerHTML;
    var nine = document.getElementById("c22").innerHTML;

    if (one == 1 && two == 2 && three == 3 && four == 4 && six == 5 && seven == 6 && eight == 7 && nine == 8) {
    clearInterval(intervaloTemporal);

    alert('¡Has ganado! ¡Enhorabuena!');
    console.log("Mensaje de victoria.");

    }

    console.log("Click en el puzzle detectado.");

  }

}

function muestraReloj(){

  if (segundos > 59) {
    segundos=00;
    minutos++;
  }

  document.getElementById("segundos").innerHTML = segundos;

}

/*
var count = 0;

function canvia(posicion, columna) {
  var empty_square;
  count +=1;

  if (count == 1) {

    empty_square ==
  }

  console.log("Casilla blanca: " + empty_square);
  if (columna == 0 && posicion == 0) {

    console.log("c00");
    if (empty_square == c01) {
      document.getElementById('c01').innerHTML = "2";
      document.getElementById('c01').style.backgroundColor = "red";
      document.getElementById('c00').innerHTML = "";
      document.getElementById('c00').style.backgroundColor = "blue";
      empty_square = document.getElementsById('c00').id;

    }

  } else if (columna == 2 && posicion == 0) {
    console.log("c02");

  }

  function victoriaWeon() {

    var one = getElementById('c21').value;
    var two = getElementById('c00').value;
    var three = getElementById('c10').value;

    var four = getElementById('c20').value;
    var five = getElementById('c22').value;
    var six = getElementById('c01').value;

    var seven = getElementById('c12').value;
    var eight = getElementById('c02').value;
    var empty_square = getElementById('c11').value;

  }

}
*/
