import should from 'should';
import {INIT_CHANGE_MONEY, giveChange} from './cashChange';

const caseToTitleCase = [
  {
    name: 'cashChange_giveChange_1.500',
    input: '1.500',
    expected: [
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
        count: 1,
      },
      {
        nominal: 500,
        count: 1,
      },
      {
        nominal: 200,
        count: 0,
      },
      {
        nominal: 100,
        count: 0,
      },
      {
        nominal: 'uncategorized',
        count: 0,
      },
    ]
  },
  {
    name: 'cashChange_giveChange_1.500.210',
    input: '1.500.210',
    expected: [
      {
        nominal: 100000,
        count: 15,
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
        count: 1,
      },
      {
        nominal: 100,
        count: 0,
      },
      {
        nominal: 'uncategorized',
        count: 10,
      },
    ]
  },
  {
    name: 'cashChange_giveChange_42.500',
    input: '42.500',
    expected: [
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
        count: 2,
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
        count: 1,
      },
      {
        nominal: 1000,
        count: 0,
      },
      {
        nominal: 500,
        count: 1,
      },
      {
        nominal: 200,
        count: 0,
      },
      {
        nominal: 100,
        count: 0,
      },
      {
        nominal: 'uncategorized',
        count: 0,
      },
    ]
  },
  {
    name: 'cashChange_giveChange_iv.	224',
    input: 224,
    expected: [
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
        count: 1,
      },
      {
        nominal: 100,
        count: 0,
      },
      {
        nominal: 'uncategorized',
        count: 24,
      },
    ]
  }
];

describe('Cash Change Utils giveChange', () => {
  caseToTitleCase.forEach(item => {
    it(`${item.name}`, () => {
      should(giveChange(item.input)).be.deepEqual(item.expected);
    });
  });
});
