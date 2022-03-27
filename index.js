fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    return console.log(response.json());
  })
  .then((data) => {
    console.log(data);
  });

const getData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  console.log(response.json());
};

getData();
