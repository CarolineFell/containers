// Создайте класс Team с методами add, addAll и toArray.
// Класс должен хранить данные о персонажах команды в поле типа Set:

// Метод add должен добавлять выбранного персонажа в команду (объект класса Character).
// При этом такой объект уже существует в команде - дублирования происходить не должно,
// должна генерироваться ошибка.

// Метод addAll должен иметь возможность добавлять произвольное количество персонажей
// (используйте rest-parameters) в команду. При этом задвоения быть не должно,
// ошибка генерироваться не должна.

// Метод toArray должен производить конвертацию Set в массив.

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`The character ${character} already exists`);
    }
    this.members.add(character);
    return this.members;
  }

  addAll(...characters) {
    characters.forEach((character) => this.add(character));
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}