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
} from './sentence';

export const VOCABULARY_DEFAULT: Vocabulary = {
  isoCode: 'default',
  sentences: ENGLISH,
};

export const VOCABULARY: Vocabulary[] = [
  {
    isoCode: 'ar-IL',
    countryNameRaw: 'ישראל',
    countryNameFr: 'Israël',
    languageNameRaw: 'עברי',
    languageNameFr: 'Hébreu',
    flag: 'IL',
    sentences: HEBREW,
  },
  {
    isoCode: 'ar-JO',
    countryNameRaw: 'الأردن',
    countryNameFr: 'Jordanie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'JO',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-AE',
    countryNameRaw: 'الإمارات',
    countryNameFr: 'Emirats Arabes Unis',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'AE',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-BH',
    countryNameRaw: 'البحرين',
    countryNameFr: 'Bahreïn',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'BH',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-XA',
    countryNameRaw: 'الدول العربية',
    countryNameFr: 'Pays arabes',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'arabic',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-SA',
    countryNameRaw: 'السعودية',
    countryNameFr: 'Arabie Saoudite',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'SA',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-IQ',
    countryNameRaw: 'العراق',
    countryNameFr: 'Irak',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'IQ',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-KW',
    countryNameRaw: 'الكويت',
    countryNameFr: 'Koweït',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'KW',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-MA',
    countryNameRaw: 'المغرب',
    countryNameFr: 'Maroc',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'MA',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-TN',
    countryNameRaw: 'تونس',
    countryNameFr: 'Tunisie',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'TN',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-OM',
    countryNameRaw: 'عُمان',
    countryNameFr: 'Oman',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'OM',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-PS',
    countryNameRaw: 'فلسطين',
    countryNameFr: 'Palestine',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'PS',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-QA',
    countryNameRaw: 'قطر',
    countryNameFr: 'Qatar',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'QA',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-LB',
    countryNameRaw: 'لبنان',
    countryNameFr: 'Liban',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'LB',
    sentences: ARAB,
  },
  {
    isoCode: 'ar-EG',
    countryNameRaw: 'مصر',
    countryNameFr: 'Egypte',
    languageNameRaw: 'العربية',
    languageNameFr: 'Arabe',
    flag: 'EG',
    sentences: ARAB,
  },
  {
    isoCode: 'fa-IR',
    countryNameRaw: 'ایران',
    countryNameFr: 'Iran',
    languageNameRaw: 'فارسی',
    languageNameFr: 'Persan',
    flag: 'IR',
    sentences: PERSAN,
  },
  {
    isoCode: 'fr-FR',
    countryNameRaw: 'France',
    countryNameFr: 'France',
    languageNameRaw: 'Français',
    languageNameFr: 'Français',
    flag: 'FR',
    sentences: FRENCH,
  },
  {
    isoCode: 'en-GB',
    countryNameRaw: 'United Kingdom',
    countryNameFr: 'Royaume-Uni',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'GB',
    sentences: ENGLISH,
  },
  {
    isoCode: 'es-ES',
    countryNameRaw: 'España',
    countryNameFr: 'Espagne',
    languageNameRaw: 'Español',
    languageNameFr: 'Espagnol',
    flag: 'ES',
    sentences: SPANNISH,
  },
  {
    isoCode: 'zh-ZH',
    countryNameRaw: '中国大陆',
    countryNameFr: 'Chine',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    flag: 'CN',
    sentences: MADARIN,
  },
  {
    isoCode: 'zh-HK',
    countryNameRaw: '香港',
    countryNameFr: 'Hong-Kong',
    languageNameRaw: '普通话',
    languageNameFr: 'Mandarin',
    flag: 'HK',
    sentences: MADARIN,
  },
  {
    isoCode: 'en-AU',
    countryNameRaw: 'Australia',
    countryNameFr: 'Australie',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'AU',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-GH',
    countryNameRaw: 'Ghana',
    countryNameFr: 'Ghana',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'GH',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-CA',
    countryNameRaw: 'Canada',
    countryNameFr: 'Canada-Uni',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'CA',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-IN',
    countryNameRaw: 'India',
    countryNameFr: 'Inde',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'IN',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-ZA',
    countryNameRaw: 'South Africa',
    countryNameFr: 'Afrique du Sud',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'ZA',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-IE',
    countryNameRaw: 'Ireland',
    countryNameFr: 'Irelande',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'IE',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-KE',
    countryNameRaw: 'Kenya',
    countryNameFr: 'Kenya',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'KE',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-NZ',
    countryNameRaw: 'New Zealand',
    countryNameFr: 'Nouvelle-Zélande',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'NZ',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-SG',
    countryNameRaw: 'Singapore',
    countryNameFr: 'Singapour',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'SG',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-PH',
    countryNameRaw: 'Philippines',
    countryNameFr: 'Philippines',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'PH',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-NG',
    countryNameRaw: 'Nigeria',
    countryNameFr: 'Nigeria',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'NG',
    sentences: ENGLISH,
  },
  {
    isoCode: 'en-TZ',
    countryNameRaw: 'Tanzania',
    countryNameFr: 'Tanzanie',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'TZ',
    sentences: ENGLISH,
  },
  {
    isoCode: 'us-US',
    countryNameRaw: 'United-States',
    countryNameFr: 'Etats-Unis',
    languageNameRaw: 'English',
    languageNameFr: 'Anglais',
    flag: 'US',
    sentences: ENGLISH,
  },
  {
    isoCode: 'bn-BD',
    countryNameRaw: 'বাংলাদেশ',
    countryNameFr: 'Bangladesh',
    languageNameRaw: 'বাংলা',
    languageNameFr: 'Bengali',
    flag: 'BD',
    sentences: BENGALI,
  },
  {
    isoCode: 'bn-IN',
    countryNameRaw: 'ভারত',
    countryNameFr: 'Inde',
    languageNameRaw: 'Bengali',
    languageNameFr: 'বাংলা',
    flag: 'IN',
    sentences: BENGALI,
  },
  {
    isoCode: 'fa-AF',
    countryNameRaw: 'افغانستان',
    countryNameFr: 'Afghanistan',
    languageNameFr: 'Dari',
    languageNameRaw: 'پښتو',
    flag: 'AF',
    sentences: DARI,
  },
  {
    isoCode: 'ps-AF',
    countryNameRaw: 'افغانستان',
    countryNameFr: 'Afghanistan',
    languageNameFr: 'Pachto',
    languageNameRaw: 'پښتو',
    flag: 'AF',
    sentences: PACHTO,
  },
  {
    isoCode: 'ur-PK',
    countryNameRaw: 'پاکستان',
    countryNameFr: 'Pakistan',
    languageNameFr: 'Ourdou',
    languageNameRaw: 'اردو',
    flag: 'PK',
    sentences: OURDOU,
  },
  {
    isoCode: 'pt-PT',
    countryNameRaw: 'Portugal',
    countryNameFr: 'Portugal',
    languageNameFr: 'Portugais',
    languageNameRaw: 'Português',
    flag: 'PT',
    sentences: PORTUGUESE,
  },
  {
    isoCode: 'tr-TR',
    countryNameRaw: 'Türkiye',
    countryNameFr: 'Turquie',
    languageNameFr: 'Turc',
    languageNameRaw: 'Türkçe',
    flag: 'TR',
    sentences: TURC,
  },
  {
    isoCode: 'de-DE',
    countryNameRaw: 'Deutschland',
    countryNameFr: 'Allemagne',
    languageNameFr: 'Allemand',
    languageNameRaw: 'Deutsch',
    flag: 'DE',
    sentences: GERMAN,
  },
  {
    isoCode: 'am-ET',
    countryNameRaw: 'ኢትዮጵያ',
    countryNameFr: 'Ethiopie',
    languageNameFr: 'Amharique',
    languageNameRaw: 'አማርኛ',
    flag: 'ET',
    sentences: AMHARIC,
  },
  {
    isoCode: 'km-KH',
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
];
