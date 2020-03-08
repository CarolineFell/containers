import ErrorRepository from '../map.ErrorRepository';

const error = new ErrorRepository();

test('Should translate Error 503', () => {
  expect(error.translate(503)).toBe('Error 503');
});

test('Should throw Unknown Error', () => {
  expect(() => error.translate(546)).toThrow('Unknown error');
});