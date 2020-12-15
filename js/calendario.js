let months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let currentDate = new Date(); //Fecha actual del pc

let currentDay = currentDate.getDate();

let numberMonth = currentDate.getMonth();

let currentYear = currentDate.getFullYear();

let dayWeek = currentDate.getDay();
console.log(dayWeek);

// console.log(`Día: ${currentDay}, Mes: ${numberMonth}, Año: ${currentYear}`);

// Unión con el HTML
let year = document.getElementById("year");
let month = document.getElementById("month");
let dates = document.getElementById("dates");
let prev_month = document.getElementById("prevMonth");
let next_month = document.getElementById("nextMonth");

//Escribir el mes y año actual directamente en el navegador
month.textContent = months[numberMonth];
year.textContent = currentYear.toString();

//Llamar a las funciones para cambiar de fecha
prev_month.addEventListener("click", (e) => lastMonth());
next_month.addEventListener("click", (e) => nextMonth());

function init() {
  writeMonth(numberMonth);
}

// ---- ******** POSICIÓN DEL DÍA 1 CON EL DÍA DE LA SEMANA *********

function getDayofTheWeek() {
  let day = new Date(`${currentYear}, ${numberMonth + 1}, 1`).getDay();
  if (day === 0) day = 7;
  return day - 1;
}

// ---- *************************************************************

//------ Pinta el mes con sus días

function writeMonth(month) {
  let week = [];
  let day = getDayofTheWeek();
  console.log(`Día: ${day}, Mes: ${numberMonth + 1}, Año: ${currentYear}`);
  for (i = 1; i <= getTotalDays(month); i++) {
    if (i === 1) {
      week = Array(day).fill(null);
      week[day] = i;
    } else {
      week.push(i);
    }
    // --- Divide el mes en semanas
    if (week.length === 7 || i == getTotalDays(month)) {
      addWeek(week);
      week = [];
    }
  }
}

//--- Añade la semana a la tabla
function addWeek(days) {
  let workDays;
  let weekend;

  if (days.length === 7) {
    workDays = days.slice(0, days.length - 2);
    console.log("Otros dias", workDays);

    weekend = days.slice(days.length - 2, days.length);
    console.log("FINDES", weekend);
  }

  if (days.length < 7) {
    workDays = days;
    console.log("Otros dias", workDays);

    if (workDays.length === 6) {
      workDays = days.slice(0, days.length - 1);
      console.log("Otros dias", workDays);

      weekend = days.slice(days.length - 1, days.length);
      console.log("FINDES", weekend);
    }
  }
  console.log("array inicial", days);

  let tr = document.createElement("tr");

  //Mete los días en la misma fila
  if (workDays) {
    workDays.forEach((day) => {
      let td = document.createElement("td");
      td.innerHTML = day;

      if (day) {
        td.classList.add("mystyle");
        td.style.border = "1px rgba(240,248,255, 0.3) solid";
      }

      tr.appendChild(td);
    });
  }

  if (weekend) {
    weekend.forEach((day) => {
      let td = document.createElement("td");
      td.innerHTML = day;
      td.style.color = "red";
      td.style.fontWeight = "bold";
      if (day) {
        td.classList.add("mystyle");
        td.style.border = "1px rgba(240,248,255, 0.3) solid";
      }
      tr.appendChild(td);
    });
  }

  dates.appendChild(tr);
}

//------ Determinar el total de días del mes
function getTotalDays(month) {
  if (month === -1) month = 11;
  if (
    month === 0 ||
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 7 ||
    month === 9 ||
    month === 11
  ) {
    return 31;
  } else if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  } else {
    return isLeap() ? 29 : 28;
  }
}

//------ Año bisiesto?
function isLeap() {
  if (
    (currentYear % 100 !== 0 && currentYear % 4 === 0) ||
    currentYear % 400 === 0
  ) {
    return true;
  }
  return false;
}

//------ Día de la semana de inicio del mes
function firstDayMonth() {
  let firstDay = new Date(currentYear, numberMonth, 1); //Día 1 del mes

  if (firstDay.getDay() - 1 === -1) {
    //Domingo
    return 6;
  } else {
    firstDay.getDay() - 1; //Día distinto a domingo
  }
}

//------ Último mes
function lastMonth() {
  if (numberMonth !== 0) {
    numberMonth--;
  } else {
    numberMonth = 11;
    currentYear--;
  }

  selectNewDate();
}

//------ Mes siguiente
function nextMonth() {
  if (numberMonth !== 11) {
    numberMonth++;
  } else {
    numberMonth = 0;
    currentYear++;
  }

  selectNewDate();
}

//------ Cambiar la a la fecha seleccionada
function selectNewDate() {
  currentDate.setFullYear(currentYear, numberMonth);
  month.textContent = months[numberMonth];
  year.textContent = currentYear.toString();
  dates.innerHTML = '<tbody class="calendarDate" id="dates"></tbody>';
  writeMonth(numberMonth);
  gifAppears();
}

init();
