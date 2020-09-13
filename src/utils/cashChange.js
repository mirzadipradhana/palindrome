export const INIT_CHANGE_MONEY = [
  {
    nominal: 100000,
    count: 0,
  },
  {
    nominal: 50000,
    count: 0,
  },
  {
    nominal: 20000,
    count: 0,
  },
  {
    nominal: 10000,
    count: 0,
  },
  {
    nominal: 5000,
    count: 0,
  },
  {
    nominal: 2000,
    count: 0,
  },
  {
    nominal: 1000,
    count: 0,
  },
  {
    nominal: 500,
    count: 0,
  },
  {
    nominal: 200,
    count: 0,
  },
  {
    nominal: 100,
    count: 0,
  },
]

const convertStringToNumber = (input, thousandSeparator = '.') => {
  const regex = new RegExp(`\\${thousandSeparator}`, 'g')
  return parseFloat(input.replace(regex, ''));
}

export const giveChange = (input = '', money = INIT_CHANGE_MONEY) => {
  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new Error('The input should be string or number');
  }

  let convertedInput = input
  const change = money.sort((a, b) => b.nominal - a.nominal) ;

  if (typeof input === 'string') {
    convertedInput = convertStringToNumber(input)
    if (isNaN(convertedInput)) {
      throw new Error('The input not recognized');
    }
  }

  let result = change.map(res => {
    const count = Math.floor(convertedInput / res.nominal);
    convertedInput -= res.nominal * count;

    return {
      ...res,
      count: count
    };
  }, {});

  return result.concat({
    nominal: 'uncategorized',
    count: convertedInput,
  });
}
