import Team from '../set.Team';

test('Should add new character', () => {
  const team = new Team();
  const newCharacter = { username: 'NewOne', level: 4 };

  team.add(newCharacter);

  expect(team.toArray()).toEqual([{
    username: 'NewOne',
    level: 4,
  }]);
});

test('Should add all new characters', () => {
  const team = new Team();
  const newCharacterOne = { username: 'NewOne-One', level: 4 };
  const newCharacterTwo = { username: 'NewOne-Two', level: 5 };
  const newCharacterThree = { username: 'NewOne-Three', level: 6 };

  team.addAll(newCharacterOne, newCharacterTwo, newCharacterThree);

  expect(team.toArray()).toEqual(
    [
      { username: 'NewOne-One', level: 4 },
      { username: 'NewOne-Two', level: 5 },
      { username: 'NewOne-Three', level: 6 },
    ],
  );
});

test('Should throw Error', () => {
  const team = new Team();
  const newCharacter = { username: 'NewOne', level: 4 };

  expect(() => team.addAll(newCharacter, newCharacter)).toThrow(`The character ${newCharacter} already exists`);
});