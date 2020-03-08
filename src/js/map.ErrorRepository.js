// Вы решили упорядочить работу с ошибками в своём приложении,
// а именно ввести цетрализованно числовой код ошибки и её описание.
// И при генерации любых ошибок в коде приложения брать их из централизованного хранилища.

// Создайте свой класс ErrorRepository внутри которого храните Map,
// в котором ключ - это код ошибки (число), а значение - текстовое описание (человекочитаемое).

// Реализуйте метод translate(code), позволяющий по коду получить текст ошибки,
// а в случае отсутствия подобного кода возвращать строку 'Unknown error'.

export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [503, 'Error 503'],
      [404, 'Error 404'],
      [401, 'Error 401'],
      [202, 'Error 202'],
    ]);

  // constructor() {
  //   this.errors = new Map();
  //   this.errors.set(503, 'Error 503');
  //   this.errors.set(404, 'Error 404');
  //   this.errors.set(401, 'Error 401');
  //   this.errors.set(202, 'Error 202');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error');
    }
    return this.errors.get(code);
  }
}