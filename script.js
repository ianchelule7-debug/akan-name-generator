const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

const form = document.getElementById("akanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const birthDate = document.getElementById("birthDate").value;

const gender = document.getElementById("gender").value;

if (birthDate === "" || gender === "") {
    alert("Please fill in all fields.");
    return;
}

 const date = new Date(birthDate);

    const day = date.getDate();

    const month = date.getMonth() + 1;

    const year = date.getFullYear();

    const century = Math.floor(year / 100);

    const yearPart = year % 100;

    const dayOfWeek = (
  Math.floor(century / 4) -
    (2 * century) -
    1 +
    Math.floor((5 * yearPart) / 4) +
    Math.floor((26 * (month + 1)) / 10) +
    day
) % 7;

const dayIndex = (dayOfWeek + 7) % 7;

console.log("dayIndex:", dayIndex);

console.log("dayOfWeek:", dayOfWeek);

let akanName;

if (gender === "male") {
    akanName = maleNames[dayIndex];
} else {
    akanName = femaleNames[dayIndex];
}
console.log(akanName);

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(century);
    console.log(yearPart);

});
