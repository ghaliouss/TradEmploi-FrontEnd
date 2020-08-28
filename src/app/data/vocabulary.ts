import { Vocabulary } from '../models/vocabulary';
import {
  HEBREW,
  ARAB,
  PERSAN,
  FRENCH,
  ENGLISH,
  SPANNISH,
  MADARIN,
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
    audioCode: 'ar-IL',
    countryNameRaw: 'ישראל',
    countryNameFr: 'Israël',
    languageNameRaw: 'עברי',
    languageNameFr: 'Hébreu',
    flag: 'IL',
    sentences: HEBREW,
  },
  {
    isoCode: 'ar-DZ',
    audioCode: 'ar-XA',
    countryNameRaw: 'الجزائر',
    countryNameFr: 'Algérie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'DZ',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-JO',
    audioCode: 'ar-XA',
    countryNameRaw: 'الأردن',
    countryNameFr: 'Jordanie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'JO',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-AE',
    audioCode: 'ar-XA',
    countryNameRaw: 'الإمارات',
    countryNameFr: 'Emirats Arabes Unis',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'AE',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-BH',
    audioCode: 'ar-XA',
    countryNameRaw: 'البحرين',
    countryNameFr: 'Bahreïn',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'BH',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-XA',
    audioCode: 'ar-XA',
    countryNameRaw: 'الدول العربية',
    countryNameFr: 'Pays arabes',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'arabic',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-SA',
    audioCode: 'ar-XA',
    countryNameRaw: 'السعودية',
    countryNameFr: 'Arabie Saoudite',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'SA',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-IQ',
    audioCode: 'ar-XA',
    countryNameRaw: 'العراق',
    countryNameFr: 'Irak',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'IQ',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-KW',
    audioCode: 'ar-XA',
    countryNameRaw: 'الكويت',
    countryNameFr: 'Koweït',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'KW',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-MA',
    audioCode: 'ar-XA',
    countryNameRaw: 'المغرب',
    countryNameFr: 'Maroc',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'MA',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-TN',
    audioCode: 'ar-XA',
    countryNameRaw: 'تونس',
    countryNameFr: 'Tunisie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'TN',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-OM',
    audioCode: 'ar-XA',
    countryNameRaw: 'عُمان',
    countryNameFr: 'Oman',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'OM',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-PS',
    audioCode: 'ar-XA',
    countryNameRaw: 'فلسطين',
    countryNameFr: 'Palestine',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'PS',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-QA',
    audioCode: 'ar-XA',
    countryNameRaw: 'قطر',
    countryNameFr: 'Qatar',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'QA',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-LB',
    audioCode: 'ar-XA',
    countryNameRaw: 'لبنان',
    countryNameFr: 'Liban',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'LB',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-EG',
    audioCode: 'ar-XA',
    countryNameRaw: 'مصر',
    countryNameFr: 'Egypte',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'EG',
    sentences: ARAB,
  },
  {
    isoCode: 'fa-IR',
    audioCode: 'fa-IR',
    countryNameRaw: 'ایران',
    countryNameFr: 'Iran',
    languageNameRaw: 'فارسی',
    languageNameFr: 'Persan',
    flag: 'IR',
    sentences: PERSAN,
  },
  {
    isoCode: 'fr-FR',
    audioCode: 'fr-FR',
    countryNameRaw: 'France',
    countryNameFr: 'France',
    languageNameRaw: 'Français',
    languageNameFr: 'Français',
    flag: 'FR',
    sentences: FRENCH,
  },
  {
    isoCode: 'en-GB',
    audioCode: 'en-GB',
    countryNameRaw: 'United Kingdom',
    countryNameFr: 'Royaume-Uni',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'GB',
    sentences: ENGLISH,
  },
  {
    isoCode: 'es-ES',
    audioCode: 'es-ES',
    countryNameRaw: 'España',
    countryNameFr: 'Espagne',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    flag: 'ES',
    sentences: SPANNISH,
  },
  {
    isoCode: 'zh-ZH',
    audioCode: 'cmn-CN',
    countryNameRaw: '中国大陆',
    countryNameFr: 'Chine',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    flag: 'CN',
    sentences: MADARIN,
  },
  {
    isoCode: 'zh-HK',
    audioCode: 'yue-Hant-HK',
    countryNameRaw: '香港',
    countryNameFr: 'Hong-Kong',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    flag: 'HK',
    sentences: MADARIN,
  },
  {
    isoCode: 'en-AU',
    audioCode: 'en-GB',
    countryNameRaw: 'Australia',
    countryNameFr: 'Australie',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'AU',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-GH',
    audioCode: 'en-GB',
    countryNameRaw: 'Ghana',
    countryNameFr: 'Ghana',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'GH',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-CA',
    audioCode: 'en-US',
    countryNameRaw: 'Canada',
    countryNameFr: 'Canada-Uni',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'CA',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-IN',
    audioCode: 'en-IN',
    countryNameRaw: 'India',
    countryNameFr: 'Inde',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'IN',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-ZA',
    audioCode: 'en-GB',
    countryNameRaw: 'South Africa',
    countryNameFr: 'Afrique du Sud',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'ZA',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-IE',
    audioCode: 'en-GB',
    countryNameRaw: 'Ireland',
    countryNameFr: 'Irelande',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'IE',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-KE',
    audioCode: 'en-GB',
    countryNameRaw: 'Kenya',
    countryNameFr: 'Kenya',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'KE',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-NZ',
    audioCode: 'en-GB',
    countryNameRaw: 'New Zealand',
    countryNameFr: 'Nouvelle-Zélande',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'NZ',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-SG',
    audioCode: 'en-GB',
    countryNameRaw: 'Singapore',
    countryNameFr: 'Singapour',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'SG',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-PH',
    audioCode: 'en-GB',
    countryNameRaw: 'Philippines',
    countryNameFr: 'Philippines',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'PH',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-NG',
    audioCode: 'en-GB',
    countryNameRaw: 'Nigeria',
    countryNameFr: 'Nigeria',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'NG',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-TZ',
    audioCode: 'en-GB',
    countryNameRaw: 'Tanzania',
    countryNameFr: 'Tanzanie',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'TZ',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-US',
    countryNameRaw: 'United-States',
    countryNameFr: 'Etats-Unis',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'US',
    sentences: ENGLISH,
  },
  {
    isoCode: 'bn-BD',
    audioCode: 'bn-BD',
    countryNameRaw: 'বাংলাদেশ',
    countryNameFr: 'Bangladesh',
    languageNameRaw: 'বাংলা',
    languageNameFr: 'Bengali',
    flag: 'BD',
    sentences: BENGALI,
  },
  {
    isoCode: 'bn-IN',
    audioCode: 'bn-IN',
    countryNameRaw: 'ভারত',
    countryNameFr: 'Inde',
    languageNameRaw: 'Bengali',
    languageNameFr: 'বাংলা',
    flag: 'IN',
    sentences: BENGALI,
  },
  {
    isoCode: 'fa-AF',
    audioCode: 'fa-AF',
    countryNameRaw: 'افغانستان',
    countryNameFr: 'Afghanistan',
    languageNameFr: 'Dari',
    languageNameRaw: 'پښتو',
    flag: 'AF',
    sentences: DARI,
  },
  {
    isoCode: 'ps-AF',
    audioCode: 'ps-AF',
    countryNameRaw: 'افغانستان',
    countryNameFr: 'Afghanistan',
    languageNameFr: 'Pachto',
    languageNameRaw: 'پښتو',
    flag: 'AF',
    sentences: PACHTO,
  },
  {
    isoCode: 'ur-PK',
    audioCode: 'ur-PK',
    countryNameRaw: 'پاکستان',
    countryNameFr: 'Pakistan',
    languageNameFr: 'Ourdou',
    languageNameRaw: 'اردو',
    flag: 'PK',
    sentences: OURDOU,
  },
  {
    isoCode: 'pt-PT',
    audioCode: 'pt-PT',
    countryNameRaw: 'Portugal',
    countryNameFr: 'Portugal',
    languageNameFr: 'Portugais',
    languageNameRaw: 'Português',
    flag: 'PT',
    sentences: PORTUGUESE,
  },
  {
    isoCode: 'tr-TR',
    audioCode: 'tr-TR',
    countryNameRaw: 'Türkiye',
    countryNameFr: 'Turquie',
    languageNameFr: 'Turc',
    languageNameRaw: 'Türkçe',
    flag: 'TR',
    sentences: TURC,
  },
  {
    isoCode: 'de-DE',
    audioCode: 'de-DE',
    countryNameRaw: 'Deutschland',
    countryNameFr: 'Allemagne',
    languageNameFr: 'Allemand',
    languageNameRaw: 'Deutsch',
    flag: 'DE',
    sentences: GERMAN,
  },
  {
    isoCode: 'am-ET',
    audioCode: 'am-ET',
    countryNameRaw: 'ኢትዮጵያ',
    countryNameFr: 'Ethiopie',
    languageNameFr: 'Amharique',
    languageNameRaw: 'አማርኛ',
    flag: 'ET',
    sentences: AMHARIC,
  },
  {
    isoCode: 'km-KH',
    audioCode: 'km-KH',
    countryNameRaw: 'កម្ពុជា',
    countryNameFr: 'Cambodge',
    languageNameFr: 'Khmer',
    languageNameRaw: 'ភាសាខ្មែរ',
    flag: 'KH',
    sentences: KHMER,
  },
  {
    isoCode: 'hi-IN',
    countryNameRaw: 'भारत',
    countryNameFr: 'Inde',
    languageNameFr: 'Hindi',
    languageNameRaw: 'हिन्दी',
    flag: 'IN',
    sentences: HINDI,
  },
  {
    isoCode: 'ta-IN',
    countryNameRaw: 'இந்தியா',
    countryNameFr: 'Inde',
    languageNameFr: 'Tamoul',
    languageNameRaw: 'தமிழ்',
    flag: 'IN',
    sentences: TAMOUL,
  },
  {
    isoCode: 'it-IT',
    audioCode: 'it-IT',
    countryNameRaw: 'Italia',
    countryNameFr: 'Italie',
    languageNameFr: 'Italien',
    languageNameRaw: 'Italiano',
    flag: 'IT',
    sentences: ITALIAN,
  },
  {
    isoCode: 'mn-MN',
    countryNameRaw: 'Монгол Улс',
    countryNameFr: 'Mongolie',
    languageNameFr: 'Mongol',
    languageNameRaw: 'Монгол',
    flag: 'MN',
    sentences: MONGOL,
  },
  {
    isoCode: 'ne-NP',
    countryNameRaw: 'नेपाल',
    countryNameFr: 'Népal',
    languageNameFr: 'Népalais',
    languageNameRaw: 'नेपाली',
    flag: 'NP',
    sentences: NEPALESE,
  },
  {
    isoCode: 'ru-RU',
    audioCode: 'ru-RU',
    countryNameRaw: 'Россия',
    countryNameFr: 'Russie',
    languageNameFr: 'Russe',
    languageNameRaw: 'Русский',
    flag: 'RU',
    sentences: RUSSIA,
  },
  {
    isoCode: 'uz-UZ',
    countryNameRaw: 'Ўзбекистон',
    countryNameFr: 'Ouzbékistan',
    languageNameFr: 'Ouzbek',
    languageNameRaw: 'ўзбек',
    flag: 'UZ',
    sentences: OUZBEK,
  },
  {
    isoCode: 'ro-RO',
    countryNameRaw: 'România',
    countryNameFr: 'Roumanie',
    languageNameFr: 'Roumain',
    languageNameRaw: 'Română',
    flag: 'RO',
    sentences: ROMANIAN,
  },
  {
    isoCode: 'so-SO',
    countryNameRaw: 'Soomaaliya',
    countryNameFr: 'Somalie',
    languageNameFr: 'Somali',
    languageNameRaw: 'Af-Soomaali',
    flag: 'SO',
    sentences: SOMALI,
  },
  {
    isoCode: 'vi-VN',
    countryNameRaw: 'Việt Nam',
    countryNameFr: 'Vietnam',
    languageNameFr: 'Vietnamien',
    languageNameRaw: 'Tiếng Việt',
    flag: 'VN',
    sentences: VIETNAMESE,
  },
  {
    isoCode: 'el-GR',
    countryNameRaw: 'Ελλάδα',
    countryNameFr: 'Grèce',
    languageNameFr: 'Grec',
    languageNameRaw: 'Ελληνικά',
    flag: 'GR',
    sentences: GREEK,
  },
];
