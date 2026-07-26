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

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(century);
    console.log(yearPart);

});
