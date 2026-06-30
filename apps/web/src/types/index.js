/**
 * @typedef {Object} Subject
 * @property {string} id - ID предмета (math, russian, physics, etc.)
 * @property {string} name - Название предмета
 * @property {number} score - Балл ЕГЭ (0-100)
 * @property {boolean} isMandatory - Обязательный ли предмет
 */

/**
 * @typedef {Object} SearchResult
 * @property {string} universityId - ID вуза
 * @property {string} universityName - Название вуза
 * @property {string} programName - Название программы
 * @property {string} programCode - Код специальности
 * @property {string} region - Регион
 * @property {string} city - Город
 * @property {number} minScore - Минимальный балл
 * @property {number} cutoffScore - Проходной балл (исторический)
 * @property {boolean} isVerified - Проверена ли программа
 * @property {string} sourceLink - Ссылка на источник
 * @property {string} mode - Режим поиска (route/reachable/compatible)
 */

/**
 * @typedef {Object} SearchParams
 * @property {Subject[]} subjects - Баллы по предметам
 * @property {string} region - Регион (опционально)
 * @property {string} city - Город (опционально)
 * @property {string} university - Вуз (опционально)
 * @property {string} mode - Режим поиска
 */

export const SUBJECTS = [
  { id: 'russian', name: 'Русский язык', isMandatory: true },
  { id: 'math', name: 'Математика (профиль)', isMandatory: true },
  { id: 'physics', name: 'Физика', isMandatory: false },
  { id: 'chemistry', name: 'Химия', isMandatory: false },
  { id: 'informatics', name: 'Информатика', isMandatory: false },
  { id: 'biology', name: 'Биология', isMandatory: false },
  { id: 'history', name: 'История', isMandatory: false },
  { id: 'socialStudies', name: 'Обществознание', isMandatory: false },
  { id: 'literature', name: 'Литература', isMandatory: false },
  { id: 'geography', name: 'География', isMandatory: false },
  { id: 'foreignLanguage', name: 'Иностранный язык', isMandatory: false },
];

export const SEARCH_MODES = [
  { id: 'route', name: 'Маршрут поступления', description: 'Программы по вашим баллам' },
  { id: 'reachable', name: 'Доступные', description: 'По историческим срезам' },
  { id: 'compatible', name: 'Совместимые', description: 'По набору экзаменов' },
];

export const REGIONS = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирская область',
  'Свердловская область',
  'Республика Татарстан',
  'Краснодарский край',
  'Нижегородская область',
  'Ростовская область',
  'Челябинская область',
  'Самарская область',
];