const form = document.getElementById("akanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const birthDate = document.getElementById("birthDate").value;

const gender = document.getElementById("gender").value;

if (birthDate === "" || gender === "") {
    alert("Please fill in all fields.");
    return;
}

console.log(birthDate);

console.log(gender);

});
