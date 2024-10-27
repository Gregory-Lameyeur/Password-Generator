getRandomLowerCase = () => {
  const randomIndex = Math.floor(Math.random() * 26) + 97;
  return String.fromCharCode(randomIndex);
};

getRandomUpperCase = () => {
  const randomIndex = Math.floor(Math.random() * 26) + 65;
  return String.fromCharCode(randomIndex);
};

getRandomNumber = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  return randomIndex.toString();
};

getRandomSymbol = () => {
  const symbol = "!@#$%^&*(){}[]=<>/,.";
  return symbol[Math.floor(Math.random() * symbol.length)];
};

const randomFunc = {
  lower: getRandomLowerCase(),
  upper: getRandomUpperCase(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),
};

generateRandomPassword = () => {
  const length = 12;
  let password = "";
  const types = [
    getRandomLowerCase,
    getRandomUpperCase,
    getRandomNumber,
    getRandomSymbol,
  ];
  types.forEach((type) => {
    password += type();
  });

  for (let i = 0; i < length; i++) {
    const randomType = types[Math.floor(Math.random() * types.length)];
    password += randomType();
  }

  document.getElementById("password-display").textContent = password;
  return password;
};
