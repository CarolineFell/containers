import Settings from '../map.Settings';

const settings = new Settings();

test('Should set settingsUser', () => {
  expect(() => { settings.setSettingsUser('theme', 'light') }).toEqual([
    { theme: 'light'} ,
  ]);
});

test('Should throw Error', () => {
  expect(() => { settings.setSettingsUser('theme', 'none') }).toThrow('Settings are incomplete or incorrect'); 
})