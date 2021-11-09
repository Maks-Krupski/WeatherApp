const sum = (a, b) => {
 return a + b;
};

const multiply = (a, b) => {
  return a * b;
 };

const divide = (a, b) => {
  if (b === 0){
    new Error('на 0 делить нельзя')
  }

  return a / b;
};

const search = (string, substring) =>{
  return string.includes(substring);
};

describe('Test functions module', () => {
  test('sum function should return correct sum', () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });

  test('multiply function should return correct multiply', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(3, 2)).toBe(6);
  });

  test('divide function should return correct divide', () => {
    expect(divide(2, 2)).toBe(1);
    expect(divide(3, 1)).toBe(3);
    expect(() => divide(3, 0)).toThrow();
  });

  describe('Test functions module', () => {
    test('search function should return true if str is included', () => {
      expect(search('qwerty', 'ert')).toBeTruthy();
      expect(search('qweqwsadasd', 'sad')).toBeTruthy();
    });

    test('search function should return false if str is not included', () => {
      expect(search('qwerty', 'cxz')).toBeFalsy();
      expect(search('qweqwsadasd', 'dwqs')).toBeFalsy();
    });
  });
})
