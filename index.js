const adviceId = document.getElementById("id");
const advice = document.getElementById("advice");

const getData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceId.innerHTML = "ADVICE " + data.slip.id;
  advice.innerHTML = data.slip.advice;
};

getData();
