// # 1
const address1 = {
  street: "Boudha",
  city: "Kathmandu",
  country: "Nepal",
};
const street = address1.street;
const city = address1.city;
const country = address1.country;
console.log(street);
console.log(city);
console.log(country);
console.log('....................................................... 1')

// # 2
const address2 = {
  street1: "Boudha",
  city1: "Kathmandu",
  country1: "Nepal",
};
const { street1, city1, country1 } = address2;
console.log(street1);
console.log(city1);
console.log(country1);
console.log('....................................................... 2')

// # 3
const address3 = {
  street2: "Boudha",
  city2: "Kathmandu",
  country2: "Nepal",
};
const { street3, city3, country3 } = address3;
console.log(street3);
console.log(city3);
console.log(country3);
console.log('....................................................... 3')

// 4
const address4 = {
  street4: "Boudha",
  city4: "Kathmandu",
  country4: "Nepal",
};
const { street4:st, city4:ct, country4:co } = address4;
console.log(st);
console.log(ct);
console.log(co);
console.log('....................................................... 4')

// 5
const address5 = {
  street5: "Boudha",
  city5: "Kathmandu",
  country5: "Nepal",
};
const { a } = address4;
const { country5 } = address5;
console.log(a);
console.log(country5);
console.log('....................................................... 5')

// 6
const street6 = "Boudha";
const city6 = "Kathmandu";
const country6 = "Nepal";
const address6 = {street6, city6, country6}
console.log(address6.street6);
console.log(address6.city6);
console.log(address6.country6);
console.log('....................................................... 6')

// 7
const address7 = {
  street7: "Boudha",
  city7: "Kathmandu",
  country7: "Nepal",
};
console.log(address7);
console.log({ ...address7 });
const x = { ...address7 };
console.log(x);
x.street7 = 'Kapan';
console.log(x);
console.log(address7);
const y = address7;
console.log(y);
y.street7 = 'Kapan';
console.log(y);
console.log(address7);
console.log('....................................................... 7')
