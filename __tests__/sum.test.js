import { Sum } from '../src/components/Header';

describe('Testing Sum', () => {
  test('Expect 1 + 3 to be 4', () => {
    expect(Sum(1, 3)).toBe(4);
  });
});
