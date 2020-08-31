import { Vocabulary } from '../models/vocabulary';
import {
  HEBREW,
  ARAB,
  PERSAN,
  FRENCH,
  ENGLISH,
  SPANISH,
  MANDARIN,
  BENGALI,
  DARI,
  PACHTO,
  OURDOU,
  PORTUGUESE,
  TURC,
  GERMAN,
  AMHARIC,
  KHMER,
  HINDI,
  TAMOUL,
  ITALIAN,
  MONGOL,
  NEPALESE,
  OUZBEK,
  RUSSIA,
  ROMANIAN,
  SOMALI,
  VIETNAMESE,
  GREEK,
  NAVBAR_ENGLISH_TABS,
} from './sentence';

export const VOCABULARY_DEFAULT: Vocabulary = {
  isoCode: 'default',
  sentences: ENGLISH,
  navbarTabs: NAVBAR_ENGLISH_TABS,
};

export const VOCABULARY: Vocabulary[] = [
  {
    isoCode: 'ar-IL',
    audioCode: 'ar-XA',
    countryNameRaw: 'إسرائيل',
    countryNameFr: 'Israël',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-DZ',
    audioCode: 'ar-XA',
    countryNameRaw: 'الجزائر',
    countryNameFr: 'Algérie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-JO',
    audioCode: 'ar-XA',
    countryNameRaw: 'الأردن',
    countryNameFr: 'Jordanie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-AE',
    audioCode: 'ar-XA',
    countryNameRaw: 'الإمارات',
    countryNameFr: 'Emirats Arabes Unis',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-BH',
    audioCode: 'ar-XA',
    countryNameRaw: 'البحرين',
    countryNameFr: 'Bahreïn',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-XA',
    audioCode: 'ar-XA',
    countryNameRaw: 'الدول العربية',
    countryNameFr: 'Pays arabes',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-SA',
    audioCode: 'ar-XA',
    countryNameRaw: 'السعودية',
    countryNameFr: 'Arabie Saoudite',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-IQ',
    audioCode: 'ar-XA',
    countryNameRaw: 'العراق',
    countryNameFr: 'Irak',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-KW',
    audioCode: 'ar-XA',
    countryNameRaw: 'الكويت',
    countryNameFr: 'Koweït',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-MA',
    audioCode: 'ar-XA',
    countryNameRaw: 'المغرب',
    countryNameFr: 'Maroc',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-TN',
    audioCode: 'ar-XA',
    countryNameRaw: 'تونس',
    countryNameFr: 'Tunisie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-OM',
    audioCode: 'ar-XA',
    countryNameRaw: 'عُمان',
    countryNameFr: 'Oman',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-PS',
    audioCode: 'ar-XA',
    countryNameRaw: 'فلسطين',
    countryNameFr: 'Palestine',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-QA',
    audioCode: 'ar-XA',
    countryNameRaw: 'قطر',
    countryNameFr: 'Qatar',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-LB',
    audioCode: 'ar-XA',
    countryNameRaw: 'لبنان',
    countryNameFr: 'Liban',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-EG',
    audioCode: 'ar-XA',
    countryNameRaw: 'مصر',
    countryNameFr: 'Egypte',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  {
    isoCode: 'fa-IR',
    countryNameRaw: 'ایران',
    countryNameFr: 'Iran',
    languageNameRaw: 'فارسی',
    languageNameFr: 'Persan',
    sentences: PERSAN,
  },
  {
    isoCode: 'fr-FR',

    countryNameRaw: 'France',
    countryNameFr: 'France',
    languageNameRaw: 'Français',
    languageNameFr: 'Français',
    sentences: FRENCH,
  },
  {
    isoCode: 'en-GB',

    countryNameRaw: 'United Kingdom',
    countryNameFr: 'Royaume-Uni',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'es-ES',

    countryNameRaw: 'España',
    countryNameFr: 'Espagne',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-AR',
    audioCode: 'es-ES',
    countryNameRaw: 'Argentina',
    countryNameFr: 'Argentine',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'zh-CN',
    audioCode: 'cmn-CN',
    countryNameRaw: '中国大陆',
    countryNameFr: 'Chine',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    sentences: MANDARIN,
  },
  {
    isoCode: 'zh-HK',
    audioCode: 'yue-Hant-HK',
    countryNameRaw: '香港',
    countryNameFr: 'Hong-Kong',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    sentences: MANDARIN,
  },
  {
    isoCode: 'zh-TW',
    audioCode: 'cmn-TW',
    countryNameRaw: '台湾',
    countryNameFr: 'Taïwan',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    sentences: MANDARIN,
  },
  {
    isoCode: 'en-AU',
    audioCode: 'en-GB',
    countryNameRaw: 'Australia',
    countryNameFr: 'Australie',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-GH',
    audioCode: 'en-GB',
    countryNameRaw: 'Ghana',
    countryNameFr: 'Ghana',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-CA',
    audioCode: 'en-US',
    countryNameRaw: 'Canada',
    countryNameFr: 'Canada',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-IN',

    countryNameRaw: 'India',
    countryNameFr: 'Inde',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-ZA',
    audioCode: 'en-GB',
    countryNameRaw: 'South Africa',
    countryNameFr: 'Afrique du Sud',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-IE',
    audioCode: 'en-GB',
    countryNameRaw: 'Ireland',
    countryNameFr: 'Irelande',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-KE',
    audioCode: 'en-GB',
    countryNameRaw: 'Kenya',
    countryNameFr: 'Kenya',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-NZ',
    audioCode: 'en-GB',
    countryNameRaw: 'New Zealand',
    countryNameFr: 'Nouvelle-Zélande',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-SG',
    audioCode: 'en-GB',
    countryNameRaw: 'Singapore',
    countryNameFr: 'Singapour',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-PH',
    audioCode: 'en-GB',
    countryNameRaw: 'Philippines',
    countryNameFr: 'Philippines',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-NG',
    audioCode: 'en-GB',
    countryNameRaw: 'Nigeria',
    countryNameFr: 'Nigeria',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-TZ',
    audioCode: 'en-GB',
    countryNameRaw: 'Tanzania',
    countryNameFr: 'Tanzanie',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-US',

    countryNameRaw: 'United-States',
    countryNameFr: 'Etats-Unis',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'bn-BD',

    countryNameRaw: 'বাংলাদেশ',
    countryNameFr: 'Bangladesh',
    languageNameRaw: 'বাংলা',
    languageNameFr: 'Bengali',
    sentences: BENGALI,
  },
  {
    isoCode: 'bn-IN',

    countryNameRaw: 'ভারত',
    countryNameFr: 'Inde',
    languageNameRaw: 'Bengali',
    languageNameFr: 'বাংলা',
    sentences: BENGALI,
  },
  {
    isoCode: 'fa-AF',

    countryNameRaw: 'افغانستان',
    countryNameFr: 'Afghanistan',
    languageNameFr: 'Dari',
    languageNameRaw: 'دري',
    sentences: DARI,
  },
  {
    isoCode: 'ps-AF',

    countryNameRaw: 'افغانستان',
    countryNameFr: 'Afghanistan',
    languageNameFr: 'Pachto',
    languageNameRaw: 'پښتو',
    sentences: PACHTO,
  },
  {
    isoCode: 'ur-PK',

    countryNameRaw: 'پاکستان',
    countryNameFr: 'Pakistan',
    languageNameFr: 'Ourdou',
    languageNameRaw: 'اردو',
    sentences: OURDOU,
  },
  {
    isoCode: 'pt-PT',

    countryNameRaw: 'Portugal',
    countryNameFr: 'Portugal',
    languageNameFr: 'Portugais',
    languageNameRaw: 'Português',
    sentences: PORTUGUESE,
  },
  {
    isoCode: 'tr-TR',

    countryNameRaw: 'Türkiye',
    countryNameFr: 'Turquie',
    languageNameFr: 'Turc',
    languageNameRaw: 'Türkçe',
    sentences: TURC,
  },
  {
    isoCode: 'de-DE',

    countryNameRaw: 'Deutschland',
    countryNameFr: 'Allemagne',
    languageNameFr: 'Allemand',
    languageNameRaw: 'Deutsch',
    sentences: GERMAN,
  },
  {
    isoCode: 'am-ET',

    countryNameRaw: 'ኢትዮጵያ',
    countryNameFr: 'Ethiopie',
    languageNameFr: 'Amharique',
    languageNameRaw: 'አማርኛ',
    sentences: AMHARIC,
  },
  {
    isoCode: 'km-KH',

    countryNameRaw: 'កម្ពុជា',
    countryNameFr: 'Cambodge',
    languageNameFr: 'Khmer',
    languageNameRaw: 'ភាសាខ្មែរ',
    sentences: KHMER,
  },
  {
    isoCode: 'hi-IN',

    countryNameRaw: 'भारत',
    countryNameFr: 'Inde',
    languageNameFr: 'Hindi',
    languageNameRaw: 'हिन्दी',
    sentences: HINDI,
  },
  {
    isoCode: 'ta-IN',

    countryNameRaw: 'இந்தியா',
    countryNameFr: 'Inde',
    languageNameFr: 'Tamoul',
    languageNameRaw: 'தமிழ்',
    sentences: TAMOUL,
  },
  {
    isoCode: 'it-IT',

    countryNameRaw: 'Italia',
    countryNameFr: 'Italie',
    languageNameFr: 'Italien',
    languageNameRaw: 'Italiano',
    sentences: ITALIAN,
  },
  {
    isoCode: 'mn-MN',

    countryNameRaw: 'Монгол Улс',
    countryNameFr: 'Mongolie',
    languageNameFr: 'Mongol',
    languageNameRaw: 'Монгол',
    sentences: MONGOL,
  },
  {
    isoCode: 'ne-NP',

    countryNameRaw: 'नेपाल',
    countryNameFr: 'Népal',
    languageNameFr: 'Népalais',
    languageNameRaw: 'नेपाली',
    sentences: NEPALESE,
  },
  {
    isoCode: 'ru-RU',

    countryNameRaw: 'Россия',
    countryNameFr: 'Russie',
    languageNameFr: 'Russe',
    languageNameRaw: 'Русский',
    sentences: RUSSIA,
  },
  {
    isoCode: 'uz-UZ',

    countryNameRaw: 'Ўзбекистон',
    countryNameFr: 'Ouzbékistan',
    languageNameFr: 'Ouzbek',
    languageNameRaw: 'ўзбек',
    sentences: OUZBEK,
  },
  {
    isoCode: 'ro-RO',

    countryNameRaw: 'România',
    countryNameFr: 'Roumanie',
    languageNameFr: 'Roumain',
    languageNameRaw: 'Română',
    sentences: ROMANIAN,
  },
  {
    isoCode: 'so-SO',

    countryNameRaw: 'Soomaaliya',
    countryNameFr: 'Somalie',
    languageNameFr: 'Somali',
    languageNameRaw: 'Af-Soomaali',
    sentences: SOMALI,
  },
  {
    isoCode: 'vi-VN',

    countryNameRaw: 'Việt Nam',
    countryNameFr: 'Vietnam',
    languageNameFr: 'Vietnamien',
    languageNameRaw: 'Tiếng Việt',
    sentences: VIETNAMESE,
  },
  {
    isoCode: 'el-GR',

    countryNameRaw: 'Ελλάδα',
    countryNameFr: 'Grèce',
    languageNameFr: 'Grec',
    languageNameRaw: 'Ελληνικά',
    sentences: GREEK,
  },
  {
    isoCode: 'es-BO',
    audioCode: 'es-ES',
    countryNameRaw: 'Bolivia',
    countryNameFr: 'Bolivie',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-CL',
    audioCode: 'es-ES',
    countryNameRaw: 'Chile',
    countryNameFr: 'Chili',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-CO',
    audioCode: 'es-ES',
    countryNameRaw: 'Colombia',
    countryNameFr: 'Colombie',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-CR',
    audioCode: 'es-ES',
    countryNameRaw: 'Costa Rica',
    countryNameFr: 'Costa Rica',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-EC',
    audioCode: 'es-ES',
    countryNameRaw: 'Ecuador',
    countryNameFr: 'Equateur',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-SV',
    audioCode: 'es-ES',
    countryNameRaw: 'El Salvador',
    countryNameFr: 'Salvador',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-US',

    countryNameRaw: 'Estados Unidos',
    countryNameFr: 'Etats-Unis',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-GT',
    audioCode: 'es-ES',
    countryNameRaw: 'Guatemala',
    countryNameFr: 'Guatemala',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-HN',
    audioCode: 'es-ES',
    countryNameRaw: 'Honduras',
    countryNameFr: 'Honduras',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-MX',
    audioCode: 'es-ES',
    countryNameRaw: 'México',
    countryNameFr: 'Mexico',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-NI',
    audioCode: 'es-ES',
    countryNameRaw: 'Nicaragua',
    countryNameFr: 'Nicaragua',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-PA',
    audioCode: 'es-ES',
    countryNameRaw: 'Panamà',
    countryNameFr: 'Panama',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-PY',
    audioCode: 'es-ES',
    countryNameRaw: 'Paraguay',
    countryNameFr: 'Paraguay',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-PE',
    audioCode: 'es-ES',
    countryNameRaw: 'Perù',
    countryNameFr: 'Pérou',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-PR',
    audioCode: 'es-ES',
    countryNameRaw: 'Puerto Rico',
    countryNameFr: 'Porto Rico',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-DO',
    audioCode: 'es-ES',
    countryNameRaw: 'República Dominicana',
    countryNameFr: 'République Dominicaine',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-UY',
    audioCode: 'es-ES',
    countryNameRaw: 'Uruguay',
    countryNameFr: 'Uruguay',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'es-VE',
    audioCode: 'es-ES',
    countryNameRaw: 'Venezuela',
    countryNameFr: 'Venezuela',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    sentences: SPANISH,
  },
  {
    isoCode: 'th-TH',

    countryNameRaw: 'ประเทศไทย',
    countryNameFr: 'Thaïlande',
    languageNameRaw: 'ไทย',
    languageNameFr: 'Thaï',
    sentences: ENGLISH,
  },
  {
    isoCode: 'ko-KR',

    countryNameRaw: '대한민국',
    countryNameFr: 'Corée du Sud',
    languageNameRaw: '한국어',
    languageNameFr: 'Coréen',
    sentences: ENGLISH,
  },
  {
    isoCode: 'ja-JP',

    countryNameRaw: '日本',
    countryNameFr: 'Japon',
    languageNameRaw: '日本語',
    languageNameFr: 'Japonais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-HK',
    audioCode: 'en-GB',
    countryNameRaw: 'Hong Kong',
    countryNameFr: 'Hong Kong',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    sentences: ENGLISH,
  },
  {
    isoCode: 'ar-YE',
    audioCode: 'ar-XA',
    countryNameRaw: 'اليمن',
    countryNameFr: 'Yemen',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    sentences: ARAB,
  },
  { isoCode: 'gl-ES', countryNameRaw: 'España', countryNameFr: 'Espagne', languageNameRaw: 'Galego', languageNameFr: 'Galicien', sentences: ENGLISH },
  { isoCode: 'ka-GE', countryNameRaw: 'საქართველო', countryNameFr: 'Géorgie', languageNameRaw: 'ქართული', languageNameFr: 'Géorgien', sentences: ENGLISH },
  { isoCode: 'gu-IN', countryNameRaw: 'ભારત', countryNameFr: 'Inde', languageNameRaw: 'ગુજરાતી', languageNameFr: 'Gujarati', sentences: ENGLISH },
  { isoCode: 'hr-HR', countryNameRaw: 'Hrvatska', countryNameFr: 'Croatie', languageNameRaw: 'Hrvatski', languageNameFr: 'Croate', sentences: ENGLISH },
  { isoCode: 'zu-ZA', countryNameRaw: 'Ningizimu Afrika', countryNameFr: 'Afrique du Sud', languageNameRaw: 'IsiZulu', languageNameFr: 'Zoulou', sentences: ENGLISH },
  { isoCode: 'is-IS', countryNameRaw: 'Ísland', countryNameFr: 'Islande', languageNameRaw: 'Íslenska', languageNameFr: 'Islandais', sentences: ENGLISH },
  { isoCode: 'jv-ID', countryNameRaw: 'Indonesia', countryNameFr: 'Indonésie', languageNameRaw: 'Jawa', languageNameFr: 'Javanais', sentences: ENGLISH },
  { isoCode: 'kn-IN', countryNameRaw: 'ಭಾರತ', countryNameFr: 'Inde', languageNameRaw: 'ಕನ್ನಡ', languageNameFr: 'Kannada', sentences: ENGLISH },
  { isoCode: 'lo-LA', countryNameRaw: 'ລາວ', countryNameFr: 'Laos', languageNameRaw: 'ລາວ', languageNameFr: 'Lao', sentences: ENGLISH },
  { isoCode: 'lv-LV', countryNameRaw: 'latviešu', countryNameFr: 'Lettonie', languageNameRaw: 'Latviešu', languageNameFr: 'Letton', sentences: ENGLISH },
  { isoCode: 'lt-LT', countryNameRaw: 'Lietuva', countryNameFr: 'Lituanie', languageNameRaw: 'Lietuvių', languageNameFr: 'Lituanien', sentences: ENGLISH },
  { isoCode: 'hu-HU', countryNameRaw: 'Magyarország', countryNameFr: 'Hongrie', languageNameRaw: 'Magyar', languageNameFr: 'Hongrois', sentences: ENGLISH },
  { isoCode: 'ml-IN', countryNameRaw: 'ഇന്ത്യ', countryNameFr: 'Inde', languageNameRaw: 'മലയാളം', languageNameFr: 'Malayalam', sentences: ENGLISH },
  { isoCode: 'mr-IN', countryNameRaw: 'भारत', countryNameFr: 'Inde', languageNameRaw: 'मराठी', languageNameFr: 'Marathi', sentences: ENGLISH },
  { isoCode: 'nl-NL', countryNameRaw: 'Nederlands', countryNameFr: 'Pays-Bas', languageNameRaw: 'Nederlands', languageNameFr: 'Néerlandais', sentences: ENGLISH },
  { isoCode: 'ne-NP', countryNameRaw: 'नेपाल', countryNameFr: 'Népal', languageNameRaw: 'नेपाली', languageNameFr: 'Népalais', sentences: NEPALESE },
  { isoCode: 'nb-NO', countryNameRaw: 'Norge', countryNameFr: 'Norvège', languageNameRaw: 'Norsk bokmål', languageNameFr: 'Norvégien bokmål', sentences: ENGLISH },
  { isoCode: 'pl-PL', countryNameRaw: 'Polska', countryNameFr: 'Pologne', languageNameRaw: 'Polski', languageNameFr: 'Polonais', sentences: ENGLISH },
  { isoCode: 'pt-BR', countryNameRaw: 'Brasil', countryNameFr: 'Brésil', languageNameRaw: 'Português', languageNameFr: 'Portugais', sentences: PORTUGUESE },
  { isoCode: 'ro-RO', countryNameRaw: 'România', countryNameFr: 'Roumanie', languageNameRaw: 'Română', languageNameFr: 'Roumain', sentences: ROMANIAN },
  { isoCode: 'si-LK', countryNameRaw: 'ශ්රී ලංකාව', countryNameFr: 'Sri-Lanka', languageNameRaw: 'සිංහල', languageNameFr: 'Cingalais', sentences: ENGLISH },
  { isoCode: 'sk-SK', countryNameRaw: 'Slovensko', countryNameFr: 'Slovaquie', languageNameRaw: 'Slovenčina', languageNameFr: 'Slovaque', sentences: ENGLISH },
  { isoCode: 'sl-SI', countryNameRaw: 'Slovenija', countryNameFr: 'Slovénie', languageNameRaw: 'Slovenščina', languageNameFr: 'Slovène', sentences: ENGLISH },
  { isoCode: 'su-ID', countryNameRaw: 'Indonesia', countryNameFr: 'Indonésie', languageNameRaw: 'Sunda', languageNameFr: 'Soudanais', sentences: ENGLISH },
  { isoCode: 'sw-TZ', countryNameRaw: 'Tanzania', countryNameFr: 'Tanzanie', languageNameRaw: 'Swahili', languageNameFr: 'Swahili', sentences: ENGLISH },
  { isoCode: 'sw-KE', countryNameRaw: 'Kenya', countryNameFr: 'Kenya', languageNameRaw: 'Swahili', languageNameFr: 'Swahili', sentences: ENGLISH },
  { isoCode: 'fi-FI', countryNameRaw: 'Suomi', countryNameFr: 'Finlande', languageNameRaw: 'Suomalainen', languageNameFr: 'Finnois', sentences: ENGLISH },
  { isoCode: 'sv-SE', countryNameRaw: 'Sverige', countryNameFr: 'Suède', languageNameRaw: 'Svenska', languageNameFr: 'Suédois', sentences: ENGLISH },
  { isoCode: 'ta-IN', countryNameRaw: 'இந்தியா', countryNameFr: 'Inde', languageNameRaw: 'தமிழ்', languageNameFr: 'Tamoul', sentences: TAMOUL },
  { isoCode: 'ta-SG', countryNameRaw: 'சிங்கப்பூர்', countryNameFr: 'Singapour', languageNameRaw: 'தமிழ்', languageNameFr: 'Tamoul', sentences: TAMOUL },
  { isoCode: 'ta-LK', countryNameRaw: 'இலங்கை', countryNameFr: 'Sri-Lanka', languageNameRaw: 'தமிழ்', languageNameFr: 'Tamoul', sentences: TAMOUL },
  { isoCode: 'ta-MY', countryNameRaw: 'மலேசியா', countryNameFr: 'Malaisie', languageNameRaw: 'தமிழ்', languageNameFr: 'Tamoul', sentences: TAMOUL },
  { isoCode: 'te-IN', countryNameRaw: 'భారతదేశం', countryNameFr: 'Inde', languageNameRaw: 'తెలుగు', languageNameFr: 'Télougou', sentences: ENGLISH },
  { isoCode: 'vi-VN', countryNameRaw: 'Việt Nam', countryNameFr: 'Vietnam', languageNameRaw: 'Tiếng Việt', languageNameFr: 'Vietnamien', sentences: VIETNAMESE },
  { isoCode: 'tr-TR', countryNameRaw: 'Türkiye', countryNameFr: 'Turquie', languageNameRaw: 'Türkçe', languageNameFr: 'Turc', sentences: TURC },
  { isoCode: 'en-PK', audioCode: 'en-GB', countryNameRaw: 'Pakistan', countryNameFr: 'Pakistan', languageNameRaw: 'English', languageNameFr: 'Anglais', sentences: ENGLISH },
  { isoCode: 'ur-IN', countryNameRaw: 'بھارت', countryNameFr: 'Inde', languageNameRaw: 'اردو', languageNameFr: 'Ourdou', sentences: OURDOU },
  { isoCode: 'bg-BG', countryNameRaw: 'България', countryNameFr: 'Bulgarie', languageNameRaw: 'Български', languageNameFr: 'Bulgare', sentences: ENGLISH },
  { isoCode: 'ru-RU', countryNameRaw: 'Россия', countryNameFr: 'Russie', languageNameRaw: 'Русский', languageNameFr: 'Russe', sentences: RUSSIA },
  { isoCode: 'sr-RS', countryNameRaw: 'Србија', countryNameFr: 'Serbie', languageNameRaw: 'Српски', languageNameFr: 'Serbe', sentences: ENGLISH },
  { isoCode: 'uk-UA', countryNameRaw: 'Україна', countryNameFr: 'Ukraine', languageNameRaw: 'Українська', languageNameFr: 'ukrainien', sentences: ENGLISH },
  { isoCode: 'he-IL', countryNameRaw: 'ישראל', countryNameFr: 'Israël', languageNameRaw: 'עברית', languageNameFr: 'Hébreu', sentences: HEBREW },
];

