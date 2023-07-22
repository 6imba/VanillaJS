const address1 = {
    street: "Boudha",
    city: "Kathmandu",
    country: "Nepal",
};

// Shallow copy:
  console.log(address1);
  const shallowCopy = address1; //Shallow copy
  console.log(shallowCopy);
  shallowCopy.street = 'Kapan';
  console.log(shallowCopy);
  console.log(address1);
console.log('....................................................... 7')

const address2 = {
    street: "Boudha",
    city: "Kathmandu",
    country: "Nepal",
};
// Deep copy:
  console.log(address2);
  console.log({ ...address2 });
  const deepCopy = { ...address2 }; // Deep copy:
  console.log(deepCopy);
  deepCopy.street = 'Kapan';
  console.log(deepCopy);
  console.log(address2);
  console.log('....................................................... 7')

  