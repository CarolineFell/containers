// У вас есть default'ные настройки, хранящиеся в Map'е:

// 'theme': 'dark' (другие возможные значения - 'light', 'gray');
// 'music': 'trance' (другие возможные значения - 'pop', 'rock', 'chillout', 'off');
// 'difficulty': 'easy' (другие возможные значения - 'normal', 'hard', 'nightmare').

// Напишите класс Settings, который содержит:

// Набор настроек по умолчанию - хранить в Map'е;
// Набор пользовательских настроек (пользователь может установить конкретную настройку по 
// имени и значению) - хранить в Map'е нужно только те настройки, которые пользователь установил;
// Get'тер settings, который возвращает Map, полученный путём наложения пользовательских настроек, 
// на default'ные.

export default class Settings {
  constructor() {
    this.settingsDefault = new Map([
      { theme: 'dark' },
      { music: 'trance' },
      { difficulty: 'easy' },
    ]);
    this.settingsUser = new Map();
  }

  setSettingsUser(key, value) {
    const settingsOther = new Map([
      { theme: ['dark', 'light', 'gray'] },
      { music: [ 'trance', 'pop', 'rock', 'chillout', 'off'] },
      { difficulty: ['easy', 'normal', 'hard', 'nightmare'] },
    ]);

    if (!settingsOther.has(key) || !settingsOther.get(key).includes(value)) {
      throw new Error('Settings are incomplete or incorrect');
    }

    this.settingsUser.set(key, value);
  }
  
  get settingsToGet() {
    const settingsToGet = [];
    this.settingsDefault.forEach((key,value) => {
      if (this.settingsUser.has(key)) {
        settingsToGet.push({ [key]: this.settingsUser(key) });
      } else {
        settingsToGet.push({ [key]: value });
      }
    });
    return settingsToGet;
  }
}