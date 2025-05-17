const makeChange = (c) => {
  // your name here
	 let quater = 25;
  let dimens = 10;
  let nickles = 5;
  let penny = 1;

  let coins = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  if (c >= quater) {
    coins.q = Math.floor(c / quater);
    c = c % quater;
  }

  if (c >= dimens) {
    coins.d = Math.floor(c / dimens);
    c = c % dimens;
  }

  if (c >= nickles) {
    coins.n = Math.floor(c / nickles);
    c = c % nickles;
  }

  if (c >= penny) {
    coins.p = Math.floor(c / penny);
    c = c % penny;
  }

  return coins;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
