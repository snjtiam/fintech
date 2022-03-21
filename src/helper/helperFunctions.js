const getTransformedCurrency = value => {
  let amount = value;

  let splittedAmount = amount?.toString().split('').reverse();

  for (let index = 0; index < splittedAmount.length; index++) {
    if (index % 3 == 0 && index !== 0) {
      splittedAmount.splice(index - 1, 1, `,${splittedAmount[index]}`);
    }
  }

  return splittedAmount.reverse().join('');
};

export default getTransformedCurrency;
