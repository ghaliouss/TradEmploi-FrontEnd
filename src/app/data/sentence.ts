import { Sentence, NavbarTab } from '../models/vocabulary';

export const NAVBAR_ENGLISH_TABS: NavbarTab = {
  language: 'language',
  logout: 'logout',
  help: 'Start guide',
  gdpr: 'CGU',
};

export const HEBREW: Sentence = {
  applicationName: 'תרגום מיידי',
  send: 'שליחה',
  translate: 'תרגום',
  translationH2: 'הזן טקסט, או לחץ לחיצה ארוכה על המיקרופון הכחול כדי לדבר',
  translationH2Mobile: 'הזן טקסט, או הקש על המיקרופון הכחול כדי לדבר',
  thanks: 'Pôle Emploi תודה',
  listen: 'להקשיב',
  recordText: 'דבר עכשיו',
  displayedWelcome: 'אני המתרגם שלך להחליף בקלות עם היועץ שלך.',
  readedWelcome: 'האם אתה רוצה להמשיך בשפה זו?',
  autoListen: 'האזן אוטומטית',
  rate: {
    qualityTranslate: 'מה הייתה איכות התרגומים?',
    rating: 'איך מדרגים את הכלי?',
    comment: 'תגובה חינם',
    technical: 'האם נתקלת בבעיות טכניות כלשהן בשימוש בכלי?',
  },
};

export const ARAB: Sentence = {
  applicationName: 'الترجمة الفورية',
  displayedWelcome: 'مرحبا انا تفسيرك',
  readedWelcome: 'هل ترغب في التبادل بهذه اللغة؟',
  send: 'إرسال',
  translate: 'ترجمة',
  translationH2: 'أدخل نصًا ، أو اضغط مع الاستمرار على الميكروفون الأزرق للتحدث',
  translationH2Mobile: 'أدخل نصًا أو انقر على الميكروفون الأزرق للتحدث',
  thanks: 'بول إمبلوي شكرا لك',
  listen: 'استمع',
  recordText: 'تكلم الان',
  languageButtonRAW: 'اللغة العربية',
  languageButtonFR: 'langue arabe',
  audioSupported: true,
  rate: {
    qualityTranslate: 'ما هي جودة الترجمات؟',
    rating: 'كيف تقيم الأداة؟',
    comment: 'تعليق مجاني',
    technical: 'هل واجهت أي مشاكل فنية أثناء استخدام الأداة؟',
  },
};

export const FRENCH: Sentence = {
  audioSupported: true,
  applicationName: 'Traduction instantanée',
  send: 'Envoyer',
  translate: 'Traduction',
  translationH2: 'Entrez du texte, ou maintenez le micro bleu enfoncé pour parler',
  translationH2Ios: 'Ecrire la phrase à traduire',
  translationH2Mobile: 'Entrez du texte, ou appuyez sur le micro bleu pour parler',
  thanks: 'Pôle Emploi vous remercie',
  listen: 'Ecouter',
  recordText: 'Parlez maintenant',
  displayedWelcome: 'Je suis votre traducteur pour échanger facilement avec votre conseiller.',
  readedWelcome: 'Voulez-vous continuer dans cette langue ?',
  rate: {
    qualityTranslate: 'Quelle a été la qualité des traductions ?',
    rating: 'Quelle note donnez vous à l’outil ?',
    comment: 'Commentaire libre',
    technical: 'Avez vous rencontré des problèmes techniques dans l’utilisation de l’outil ?',
    typeInterview: 'Type entretien'
  },
  gdpr: {
    title: 'Protection des données à caractère personnel',
    privacyText:
      "Cet outil de traduction instantanée traite vos données dans le cadre de vos échanges avec votre conseiller et de votre accompagnement par Pôle emploi. La base légal de ce traitement est la mission de service public de Pôle emploi.\n\nVos données sont collectées et traitées par Pôle Emploi dans le cadre du suivi des demandeurs d’emploi.\n\nPôle emploi utilisera vos données de manière anonymisée, à des fins d’amélioration continue de ses services, sur la base de ses intérêts légitimes.\n\nVos données personnelles sont transférées vers des datacenters de Google pour la bon fonctionnement de l’outil.\n\nS’agissant de l’hébergement de vos données, Google a recours à différents datacenters présents au sein et en dehors de l’Union européenne. Compte tenu de la nature de cet hébergeur il convient de préciser que ce dernier est soumis au Cloud Act, loi américaine promulguée le 23 mars 2018, permettant aux forces de l'ordre ou aux agences de renseignement américaines d’obtenir des opérateurs télécoms et des fournisseurs de services de Cloud Computing des informations stockées sur leurs serveurs, que ces données soient situées aux États-Unis ou à l’étranger.\n\nVos données sont conservées le temps de la conversation. Elles sont ensuite entièrement anonymisées.\n\nToute personne peut exercer ses droits notamment d’accès et de rectification en adressant sa demande à la délégué à la protection des données de Pôle emploi par courrier à l’adresse suivante ;  1 avenue du Docteur Gley - 75987 Paris cedex 20, ou par courriel à l’adresse email suivante. contact-dpd@pole-emploi.fr.\n\nSi vous estimez que vos droits n’ont pas été respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale Informatique et Libertés (CNIL).",
    closeBtn: 'FERMER',
  },
  logout: {
    title: 'Déconnexion',
    question: 'Voulez-vous vous déconnecter?',
    cancel: 'Annuler',
    confirm: 'Se déconnecter',
  },
  modality: {
    title: 'Modalité de conversation',
    monoSupport: 'Mono support',
    multiSupport: 'Multi supports',
    monoSentenceFR: 'Échangez avec un seul support PC ou tablette',
    multiSentenceFR: 'Échangez avec plusieurs supports PC, téléphones ou tablettes.',
    confirm: 'CONFIRMER',
  },
  choice: {
    mostBtn: 'Langues les plus utilisées',
    allBtn: 'Toutes les langues',
    listBtn: 'Liste',
    gridBtn: 'Grille',
    chooseBtn: 'Choisir',
    search: 'Saisissez la langue ou le pays recherché',
    voice: 'Voix',
  },
  tooltip: {
    pronounce: 'Je peux parler dans cette langue',
    noPronounce: 'Je ne peux pas parler dans cette langue',
    listen: 'Je peux entendre la traduction dans cette langue',
    noListen: 'Je ne peux pas entendre la traduction dans cette langue',
    audio: 'Je peux entendre un échantillon vocal dans cette langue',
  },
};

export const ENGLISH: Sentence = {
  audioSupported: true,
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Enter text, or press and hold blue microphone to speak',
  translationH2Ios: 'Write the sentence to translate',
  translationH2Mobile: 'Enter text, or tap the blue mic to speak',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  languageButtonRAW: 'English language',
  languageButtonFR: 'Langue anglaise',
  recordText: 'Speak now',
  displayedWelcome: 'Hello I am your interpret.',
  readedWelcome: 'Would you like to exchange in this language?',
  rate: {
    qualityTranslate: 'What was the quality of the translations?',
    rating: 'How do you rate this tool?',
    comment: 'Free Comment',
    technical: 'Have you encountered any technical problems using the tool?',
    typeInterview: 'Interview type'
  },
  gdpr: {
    title: 'Protection of personal data',
    privacyText:
      "This translation tool processes your data in the context of your exchanges with your advisor and your support by Pôle emploi. The legal basis for this\n processing is the public service mission of Pôle Emploi.\n\nYour data is collected and processed by Pôle Emploi as part of the follow-up of job seekers.\n\nPôle emploi will use your data in an anonymized way, for the purpose of continuous improvement of its services, on the basis of its legitimate interests.\n\nYour personal data is transferred to Google datacenters for the proper functioning of the tool.\n\nGoogle uses various data centers within and outside the European Union to host your data. Given the nature of this host, it should be noted that it is subject \nto the Cloud Act, an American law enacted on March 23, 2018, allowing law enforcement or American intelligence agencies to obtain information stored on their \nservers from telecom operators and cloud computing service providers, whether this data is located in the United States or abroad.\n\nYour data is kept for the duration of the conversation. It is then completely anonymized.\nAny person may exercise his or her rights of access and rectification by sending a request to Pôle emploi's Data Protection Officer by mail to the following \naddress: 1 avenue du Docteur Gley - 75987 Paris cedex 20, or by email to the following address: contact-dpd@pole-emploi.fr.)\n\nIf you feel that your rights have not been respected, you may file a complaint with the Commission Nationale Informatique et Libertés (CNIL).",
    closeBtn: 'CLOSE',
  },
  logout: {
    title: 'Logout',
    question: 'Would you like to log out ?',
    cancel: 'Cancel',
    confirm: 'Logout',
  },
  choice: {
    mostBtn: 'Most used languages',
    allBtn: 'All languages',
    listBtn: 'List',
    gridBtn: 'Grid',
    chooseBtn: 'Choose',
    search: 'Enter the desired language or country',
    voice: 'Voice',
  },
  tooltip: {
    pronounce: 'I can speak in this language',
    noPronounce: 'I cannot speak in this language',
    listen: 'I can hear the translation in this language ',
    noListen: 'I cannot hear the translation in this language ',
    audio: 'I can hear a voice sample in this language',
  },
  introMessage: {
    welcomeFR: 'Voici un outil de traduction qui va traduire votre langue. Pour cela, utilisez la flèche indiqué par la personne vous présentant l\'outil. Pour améliorer l’expérience de traduction, faites des phrases courtes et simples et parlez suffisamment fort.',
    welcomeRAW: 'Here is a translation tool that will translate your language. To do this, use the arrow indicated by the person presenting the tool to you. To improve the translation experience, keep sentences short and simple and speak loudly enough.',
    notifMultiFR: 'L’espace de conversation a été créé en modalité multi-support.',
    notifMultiRAW: "You've joined the conversation.",
    voiceavailabilityFR: 'Saisie vocale indisponible pour la langue sélectionnée',
    voiceavailabilityRAW: 'Voice input is unavailable for this language',
  },
};

export const ENGLISH_DEFAULT: Sentence = {
  ...ENGLISH,
  audioSupported: false,
};
export const ENGLISH_DEFAULT_NO_VOICE: Sentence = {
  ...ENGLISH_DEFAULT,
  voiceNotSupported: true,
};
export const PENDJABI = {
  ...ENGLISH,
  audioSupported:true,
  readedWelcome:'ਕੀ ਤੁਸੀਂ ਇਸ ਭਾਸ਼ਾ ਵਿੱਚ ਜਾਰੀ ਰੱਖਣਾ ਚਾਹੁੰਦੇ ਹੋ?'
}
export const ESTONIAN = {
  ...ENGLISH_DEFAULT,
  readedWelcome:'Kas soovite selles keeles vahetada ?'
}
export const DANISH: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Vil du udveksle på dette sprog?',
};

export const KOREA: Sentence = {
  ...ENGLISH,
  readedWelcome: '이 언어로 교환 하시겠습니까?',
};

export const FINLAND: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Haluatko vaihtaa tällä kielellä?',
};

export const GUJARATI: Sentence = {
  ...ENGLISH,
  readedWelcome: 'શું તમે આ ભાષામાં ચાલુ રાખવા માંગો છો?',
};

export const HUNGARIAN: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Szeretne ezen a nyelven cserélni?',
};

export const INDONESIA: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Apakah Anda ingin bertukar dalam bahasa ini?',
};

export const KANNADA: Sentence = {
  ...ENGLISH,
  readedWelcome: 'ಈ ಭಾಷೆಯಲ್ಲಿ ವಿನಿಮಯ ಮಾಡಲು ನೀವು ಬಯಸುವಿರಾ?',
};

export const MALAYALAM: Sentence = {
  ...ENGLISH,
  readedWelcome: 'ഈ ഭാഷയിൽ കൈമാറ്റം ചെയ്യാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടോ?',
};

export const NORWAY: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Vil du utveksle på dette språket?',
};

export const HOLLAND: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Wilt u uitwisselen in deze taal?',
};

export const POLAND: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Czy chciałbyś wymienić się w tym języku?',
};

export const SLOVENIA: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Prajete si výmenu v tomto jazyku?',
};

export const SWEDEN: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Vill du byta på det här språket?',
};

export const CZECH: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Chcete si vyměnit v tomto jazyce?',
};

export const THAILAND: Sentence = {
  ...ENGLISH,
  readedWelcome: 'คุณต้องการแลกเปลี่ยนเป็นภาษานี้หรือไม่?',
};

export const TELUGU: Sentence = {
  ...ENGLISH,
  readedWelcome: 'మీరు ఈ భాషలో కొనసాగాలనుకుంటున్నారా?',
};

export const UKRAINE: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Ви хочете обмінюватися цією мовою?',
};

export const JAPANESE: Sentence = {
  ...ENGLISH,
  readedWelcome: 'この言語で交換しますか？',
};

export const SPANISH: Sentence = {
  audioSupported: true,
  applicationName: 'Traducción instantánea',
  send: 'Enviar a',
  translate: 'Traducción',
  languageButtonRAW: 'Idioma español',
  languageButtonFR: 'langue espagnole',
  translationH2: 'Ingresa texto o mantén presionado el micrófono azul para hablar',
  translationH2Mobile: 'Ingresa texto o toca el micrófono azul para hablar',
  thanks: 'Pôle Emploi te agradece',
  listen: 'Escuchar',
  recordText: 'Habla ahora',
  displayedWelcome: 'Hola soy tu interprete',
  readedWelcome: '¿Te gustaría intercambiar en este idioma?',
  autoListen: 'Escuchar automáticamente',
  rate: {
    qualityTranslate: '¿Cuál fue la calidad de las traducciones?',
    rating: '¿Cómo valora la herramienta?',
    comment: 'Comentario gratis',
    technical: '¿Ha encontrado algún problema técnico al utilizar la herramienta?',
  },
};
export const ALBANIAN: Sentence = {
  applicationName: 'Përkthim i menjëhershëm',
  send: 'Dërgoni te',
  translate: 'Përkthimi',
  languageButtonRAW: 'Gjuhë shqipe',
  languageButtonFR: 'langue albanaise',
  translationH2: 'Futni tekst ose shtypni dhe mbani mikrofonin blu për të folur',
  translationH2Mobile: 'Futni tekst ose prekni mikrofonin blu për të folur',
  thanks: 'Pôle Emploi te agradece',
  listen: 'Degjo',
  recordText: 'Fol tani',
  displayedWelcome: 'Përshëndetje, unë jam përkthyesi juaj',
  readedWelcome: 'Dëshironi të shkëmbeni në këtë gjuhë?',
  autoListen: 'Dëgjoni automatikisht',
  rate: {
    qualityTranslate: 'Cila ishte cilësia e përkthimeve?',
    rating: 'Si e vlerësoni mjetin?',
    comment: 'Koment falas',
    technical: 'A keni hasur ndonjë problem teknik duke përdorur mjetin?',
  },
};
export const MANDARIN: Sentence = {
  audioSupported: true,
  applicationName: '即時翻譯',
  send: '發送',
  translate: '翻譯',
  translationH2: '輸入文字，或按住藍色麥克風講話',
  translationH2Mobile: '輸入文字，或點按藍色麥克風講話',
  thanks: 'PôleEmploi謝謝',
  listen: '聽',
  languageButtonRAW: '普通话',
  languageButtonFR: 'langue mandarin',
  recordText: '現在說',
  displayedWelcome: '你好，我是你的翻译',
  readedWelcome: '您想用这种语言交流吗？',
  rate: {
    qualityTranslate: '翻译的质量如何？',
    rating: '您如何评价该工具？',
    comment: '自由评论',
    technical: '您在使用该工具时遇到任何技术问题吗？',
  },
};

export const BENGALI: Sentence = {
  audioSupported: false,
  applicationName: 'তাত্ক্ষণিক অনুবাদ',
  send: 'পাঠান',
  translate: 'অনুবাদ',
  translationH2: 'টেক্সট লিখুন, অথবা কথা বলতে নীল মাইক্রোফোন টিপে ধরে রাখুন',
  translationH2Mobile: 'টেক্সট লিখুন, অথবা কথা বলতে নীল মাইকে ট্যাপ করুন',
  thanks: 'পোলে কর্মচারী আপনাকে ধন্যবাদ',
  listen: 'শোনা',
  languageButtonRAW: 'বেঙ্গালি ভাষা',
  languageButtonFR: 'langue bengali',
  gaugeText: 'এখন কথা বলুন',
  recordText: 'এখন কথা বলুন',
  displayedWelcome: 'হ্যালো আমি আপনার ব্যাখ্যা',
  readedWelcome: 'আপনি কি এই ভাষায় বিনিময় করতে চান?',
  rate: {
    qualityTranslate: 'অনুবাদগুলির গুণমানটি কী ছিল?',
    rating: 'আপনি কীভাবে সরঞ্জামটি রেট করেন?',
    comment: 'ফ্রি মন্তব্য',
    technical: 'আপনি কি সরঞ্জামটি ব্যবহার করে কোনও প্রযুক্তিগত সমস্যার সম্মুখীন হয়েছেন?',
  },
};

export const BENGALI_INDIA: Sentence = {
  ...BENGALI,
  audioSupported: true,
};

export const DARI: Sentence = {
  applicationName: 'ترجمه فوری',
  send: 'ارسال',
  translate: 'ترجمه',
  translationH2: 'جمله را برای ترجمه بنویسید یا تلفظ کنید',
  thanks: 'Pôle Emploi از شما متشکرم',
  listen: 'گوش دادن',
  recordText: 'الان صحبت کن',
  displayedWelcome: '.سلام ، من مترجم شما خواهم بود تا با مشاور شما به راحتی تبادل شوید',
  readedWelcome: 'آیا می خواهید به این زبان ادامه دهید؟',
  autoListen: 'پخپله غوږ شه',
  rate: {
    qualityTranslate: 'کیفیت ترجمه ها چگونه بود؟',
    rating: 'ابزار را چگونه ارزیابی می کنید؟',
    comment: 'نظر رایگان',
    technical: 'آیا با استفاده از این ابزار به مشکلات فنی برخورد کرده اید؟',
  },
};

export const PACHTO: Sentence = {
  voiceNotSupported: true,
  displayedWelcome: 'سلام زه ستاسو تفسیر یم',
  readedWelcome: 'ایا تاسو غواړئ پدې ژبه کې تبادله وکړئ؟',
  applicationName: 'فوري ژباړه',
  send: 'ولېږئ',
  translate: 'ژباړه',
  translationH2: 'متن دننه کړئ ، یا د خبرو کولو لپاره نیلي مایکروفون فشار ورکړئ او ونیسئ',
  translationH2Mobile: 'متن دننه کړئ ، یا د خبرو کولو لپاره نیلي مایک ټایپ کړئ',
  thanks: 'پویل کارمند له تاسو څخه مننه',
  listen: 'واورئ',
  recordText: 'اوس خبره وکړه',
  gaugeText: 'Speak now',
  autoListen: 'پخپله غوږ شه',
  languageButtonRAW: 'پښتو ژبه',
  languageButtonFR: 'langue pachto',
  rate: {
    qualityTranslate: 'د ژباړې کیفیت څه و؟',
    rating: 'تاسو د وسیلې درجه څنګه کوئ؟',
    comment: 'وړیا نظر',
    technical: 'ایا تاسو د وسیلې په کارولو سره کوم تخنیکي ستونزې سره مخ شوي یاست؟',
  },
};

export const OURDOU: Sentence = {
  displayedWelcome: 'ہیلو ، میں آپ کے مشیر سے آسانی سے تبادلہ کرنے کے لئے آپ کا ترجمان ہوں گا۔',
  readedWelcome: 'کیا آپ اس زبان میں تبادلہ کرنا چاہیں گے؟',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'متن درج کریں ، یا بولنے کے لیے نیلے مائیکروفون کو دبائیں اور تھامیں۔',
  translationH2Mobile: 'متن درج کریں ، یا بولنے کے لیے نیلے مائیک کو تھپتھپائیں۔',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'اب بولو',
  gaugeText: 'Speak now',
  autoListen: 'پخپله غوږ شه',
  rate: {
    qualityTranslate: 'What was the quality of the translations?',
    rating: 'How do you rate this tool?',
    comment: 'Free Comment',
    technical: 'Have you encountered any technical problems using the tool?',
  },
};

export const PORTUGUESE: Sentence = {
  audioSupported: true,
  displayedWelcome: 'Olá eu sou sua interpretação.',
  readedWelcome: 'Deseja trocar neste idioma?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Digite o texto ou pressione e segure o microfone azul para falar',
  translationH2Mobile: 'Digite o texto ou toque no microfone azul para falar',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'Fale agora',
  gaugeText: 'Speak now',
  autoListen: 'Ouvir automaticamente',
  languageButtonRAW: 'Língua portuguesa',
  languageButtonFR: 'langue portugaise',
  rate: {
    qualityTranslate: 'Qual foi a qualidade das traduções?',
    rating: 'Como você avalia a ferramenta?',
    comment: 'Comentário grátis',
    technical: 'Você encontrou algum problema técnico ao usar a ferramenta?',
  },
};

export const GERMAN: Sentence = {
  audioSupported: true,
  displayedWelcome: 'Hallo ich bin dein interpret',
  readedWelcome: 'Möchten Sie in dieser Sprache austauschen?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Geben Sie Text ein oder halten Sie das blaue Mikrofon gedrückt, um zu sprechen',
  translationH2Mobile: 'Geben Sie Text ein oder tippen Sie auf das blaue Mikrofon, um zu sprechen',
  languageButtonRAW: 'Deutsche Sprache',
  languageButtonFR: 'langue allemande',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  gaugeText: 'Speak now',
  recordText: 'Sprich jetzt',
  autoListen: 'Automatisch zuhören',
  rate: {
    qualityTranslate: 'Wie war die Qualität der Übersetzungen?',
    rating: 'Wie bewerten Sie das Tool?',
    comment: 'Kostenloser Kommentar',
    technical: 'Haben Sie technische Probleme mit dem Tool festgestellt?',
  },
};

export const TURC: Sentence = {
  audioSupported: true,
  displayedWelcome: 'Merhaba, danışmanınızla kolayca alışveriş yapmak için tercümanınız olurum.',
  readedWelcome: 'Bu dilde takas yapmak ister misiniz?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Metin girin veya konuşmak için mavi mikrofonu basılı tutun',
  translationH2Mobile: 'Metni girin veya konuşmak için mavi mikrofona dokunun',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'Şimdi konuşun',
  gaugeText: 'Speak now',
  autoListen: 'Otomatik olarak dinle',
  rate: {
    qualityTranslate: 'Çevirilerin kalitesi neydi?',
    rating: 'Aracı nasıl değerlendiriyorsunuz?',
    comment: 'Ücretsiz yorum',
    technical: 'Aracı kullanırken herhangi bir teknik sorunla karşılaştınız mı?',
  },
};

export const AMHARIC: Sentence = {
  displayedWelcome: 'ጤና ይስጥልኝ ፣ ከአማካሪህ ጋር በቀላሉ ለመቀየር አስተርጓሚ እሆን ነበር',
  readedWelcome: 'በዚህ ቋንቋ መለወጥ ይፈልጋሉ?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'ጽሑፍ ያስገቡ ፣ ወይም ለመናገር ሰማያዊ ማይክሮፎን ተጭነው ይያዙ',
  translationH2Mobile: 'ጽሑፍ ያስገቡ ፣ ወይም ለመናገር ሰማያዊውን ማይክሮፎኑን መታ ያድርጉ',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'አሁን መናገር ጀምር',
  gaugeText: 'Speak now',
  autoListen: 'በራስ-ሰር ያዳምጡ',
  rate: {
    qualityTranslate: 'የትርጉሞቹ ጥራት ምን ነበር?',
    rating: 'መሣሪያውን እንዴት ደረጃ ይሰጣሉ?',
    comment: 'ነፃ አስተያየት',
    technical: 'መሣሪያውን በመጠቀም ማንኛውንም ቴክኒካዊ ችግሮች አጋጥመውዎታል?',
  },
};

export const KHMER: Sentence = {
  displayedWelcome: 'ជំរាបសួរ, ខ្ញុំនឹងក្លាយជាអ្នកបកប្រែរបស់អ្នកដើម្បីផ្លាស់ប្តូរយ៉ាងងាយស្រួលជាមួយទីប្រឹក្សារបស់អ្នក។',
  readedWelcome: 'តើអ្នកចង់ផ្លាស់ប្តូរភាសានេះទេ?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'បញ្ចូលអត្ថបទឬចុចនិងសង្កត់មីក្រូហ្វូនពណ៌ខៀវដើម្បីនិយាយ',
  translationH2Mobile: 'បញ្ចូលអត្ថបទឬប៉ះមីក្រូពណ៌ខៀវដើម្បីនិយាយ',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'សូម​និយាយ​ភ្លាម',
  gaugeText: 'Speak now',
  autoListen: 'ស្តាប់ដោយស្វ័យប្រវត្តិ',
  rate: {
    qualityTranslate: 'តើការបកប្រែមានគុណភាពយ៉ាងណា?',
    rating: 'តើអ្នកវាយតម្លៃឧបករណ៍យ៉ាងដូចម្តេច?',
    comment: 'មតិយោបល់ដោយឥតគិតថ្លៃ',
    technical: 'តើអ្នកបានជួបប្រទះបញ្ហាបច្ចេកទេសណាមួយដោយប្រើឧបករណ៍នេះទេ?',
  },
};

export const HINDI: Sentence = {
  audioSupported: true,
  displayedWelcome: 'नमस्कार, मैं आपके सलाहकार के साथ आसानी से आदान-प्रदान करने वाला आपका दुभाषिया बनूंगा।',
  readedWelcome: 'क्या आप इस भाषा में विनिमय करना चाहेंगे?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'टेक्स्ट दर्ज करें, या बोलने के लिए नीले माइक्रोफ़ोन को दबाकर रखें',
  translationH2Mobile: 'टेक्स्ट डालें या बोलने के लिए नीले माइक पर टैप करें',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'अब बोलो',
  gaugeText: 'Speak now',
  autoListen: 'स्वचालित रूप से सुनो',
  rate: {
    qualityTranslate: 'अनुवादों की गुणवत्ता क्या थी?',
    rating: 'आप उपकरण को कैसे रेट करते हैं?',
    comment: 'नि: शुल्क टिप्पणी',
    technical: 'क्या आपने उपकरण का उपयोग करके किसी तकनीकी समस्या का सामना किया है?',
  },
};

export const TAMOUL: Sentence = {
  displayedWelcome: 'வணக்கம், உங்கள் ஆலோசகருடன் எளிதாக பரிமாறிக்கொள்ள உங்கள் மொழிபெயர்ப்பாளராக இருப்பேன்.',
  readedWelcome: 'இந்த மொழியில் பரிமாற விரும்புகிறீர்களா?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'உரையை உள்ளிடவும் அல்லது பேசுவதற்கு நீல ஒலிவாங்கியை அழுத்திப் பிடிக்கவும்',
  translationH2Mobile: 'உரையை உள்ளிடவும் அல்லது பேச நீல மைக்கைத் தட்டவும்',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'இப்பொழுது பேசவும்',
  gaugeText: 'Speak now',
  autoListen: 'தானாகவே கேளுங்கள்',
  rate: {
    qualityTranslate: 'What was the quality of the translations?',
    rating: 'How do you rate this tool?',
    comment: 'Free Comment',
    technical: 'Have you encountered any technical problems using the tool?',
  },
};

export const TAMOUL_INDIA: Sentence = {
  ...TAMOUL,
  audioSupported: true,
};

export const ITALIAN: Sentence = {
  audioSupported: true,
  displayedWelcome: 'Ciao sono il tuo interprete.',
  readedWelcome: 'Ti piacerebbe scambiare in questa lingua?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Inserisci il testo o tieni premuto il microfono blu per parlare',
  translationH2Mobile: 'Inserisci il testo o tocca il microfono blu per parlare',
  thanks: 'Pôle Emploi thanks you.',
  languageButtonRAW: 'Lingua italiana',
  languageButtonFR: 'langue italienne',
  listen: 'Listen',
  gaugeText: 'Speak now',
  recordText: 'Parla adesso',
  autoListen: 'Ascolta automaticamente',
  rate: {
    qualityTranslate: 'Qual era la qualità delle traduzioni?',
    rating: 'Come valuti lo strumento?',
    comment: 'Commento gratuito',
    technical: 'Hai riscontrato problemi tecnici utilizzando lo strumento?',
  },
};

export const MONGOL: Sentence = {
  displayedWelcome: 'Сайн байна уу, би зөвлөхтэйгээ хялбархан солилцох орчуулагч болно.',
  readedWelcome: 'Та энэ хэлээр солилцохыг хүсч байна уу?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Текст оруулах, эсвэл ярихын тулд цэнхэр микрофоныг удаан дарна уу',
  translationH2Mobile: 'Текст оруулах, эсвэл ярихын тулд цэнхэр микрофоныг товшино уу',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'Одоо ярь',
  gaugeText: 'Speak now',
  autoListen: 'Автоматаар сонс',
  rate: {
    qualityTranslate: 'Орчуулгын чанар ямар байв?',
    rating: 'Та багажийг хэрхэн үнэлдэг вэ?',
    comment: 'Үнэгүй сэтгэгдэл',
    technical: 'Хэрэгслийг ашиглахад ямар нэгэн техникийн асуудал тулгарсан уу?',
  },
};

export const NEPALESE: Sentence = {
  displayedWelcome: 'नमस्कार, म तपाईको दोभाषे बन्ने छ तपाईंको सल्लाहकार संग सजिलै साटासाट गर्न।',
  readedWelcome: 'के तपाईं यस भाषामा आदान प्रदान गर्न चाहनुहुन्छ?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'पाठ प्रविष्ट गर्नुहोस्, वा नीलो माइक्रोफोन थिच्नुहोस् र बोल्नुहोस्',
  translationH2Mobile: 'पाठ प्रविष्ट गर्नुहोस्, वा बोल्न नीलो माइक ट्याप गर्नुहोस्',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'अहिले बोल्नुस्',
  gaugeText: 'Speak now',
  autoListen: 'स्वचालित रूपमा सुन्नुहोस्',
  rate: {
    qualityTranslate: 'अनुवादको गुणस्तर के थियो?',
    rating: 'तपाईं कसरी उपकरण मूल्या rate्कन गर्नुहुन्छ?',
    comment: 'नि: शुल्क टिप्पणी',
    technical: 'के तपाईंले उपकरण प्रयोग गर्दा कुनै प्राविधिक समस्याहरू सामना गर्नु भएको छ?',
  },
};

export const RUSSIA: Sentence = {
  audioSupported: true,
  displayedWelcome: 'Привет я твой переводчик',
  readedWelcome: 'Вы хотите продолжить на этом языке?',
  applicationName: 'Мгновенный перевод',
  send: 'Отправить',
  translate: 'перевод',
  translationH2: 'Введите текст или нажмите и удерживайте синий микрофон, чтобы говорить',
  translationH2Mobile: 'Введите текст или коснитесь синего микрофона, чтобы говорить',
  thanks: 'Pôle emploi Спасибо вам.',
  listen: 'Слушать',
  recordText: 'Говорите сейчас',
  gaugeText: 'Говорите сейчас',
  autoListen: 'Автоматически слушать',
  languageButtonRAW: 'Русский язык',
  languageButtonFR: 'langue russe',
  rate: {
    qualityTranslate: 'Какое было качество переводов?',
    rating: 'Как вы оцениваете инструмент?',
    comment: 'Бесплатный комментарий',
    technical: 'Сталкивались ли вы с какими-либо техническими проблемами при использовании инструмента?',
  },
};

export const OUZBEK: Sentence = {
  displayedWelcome: "Assalomu alaykum, maslahatchingiz bilan osonlikcha almashish uchun sizning tarjimoningiz bo'lardim.",
  readedWelcome: 'Ushbu tilda almashishni xohlaysizmi?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: "Matn kiriting yoki gapirish uchun ko'k mikrofonni bosib turing",
  translationH2Mobile: "Matn kiriting yoki gapirish uchun ko'k mikrofonga teging",
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'Hozir gapiring',
  gaugeText: 'Speak now',
  autoListen: 'Avtomatik tinglash',
  rate: {
    qualityTranslate: 'Tarjimalarning sifati qanday edi?',
    rating: 'Asbobni qanday baholaysiz?',
    comment: 'Bepul sharh',
    technical: 'Asbobni ishlatishda biron bir texnik muammoga duch keldingizmi?',
  },
};

export const ROMANIAN: Sentence = {
  audioSupported: true,
  displayedWelcome: 'Buna ziua, eu as fi interpretul tau pentru a schimba usor cu consilierul tau.',
  readedWelcome: 'Buna ziua, eu as fi interpretul tau pentru a schimba usor cu consilierul tau.',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Introduceți text sau țineți apăsat microfonul albastru pentru a vorbi',
  translationH2Mobile: 'Introduceți text sau atingeți microfonul albastru pentru a vorbi',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'Vorbește acum',
  gaugeText: 'Speak now',
  autoListen: 'Ascultă automat',
  rate: {
    qualityTranslate: 'Care a fost calitatea traducerilor?',
    rating: 'Cum evaluați instrumentul?',
    comment: 'Comentariu gratuit',
    technical: 'Ați întâmpinat probleme tehnice folosind instrumentul?',
  },
};

export const SOMALI: Sentence = {
  voiceNotSupported: true,
  displayedWelcome: 'Salaan, waxaan noqon lahaa turjubaankaaga si aan si fudud ula beddelo la-taliyahaaga.',
  readedWelcome: 'Ma jeceshahay inaad ku badasho luqadan?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Geli qoraalka, ama riix oo qabso makarafoon buluug ah si aad u hadasho',
  translationH2Mobile: 'Geli qoraalka, ama taabo makarafoonka buluugga ah si aad u hadasho',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'Hadda hadal',
  gaugeText: 'Speak now',
  autoListen: 'Si toos ah u dhagayso',
  rate: {
    qualityTranslate: 'Muxuu ahaa tayada tarjumaadaha?',
    rating: 'Sideed u qiimeysaa qalabka?',
    comment: 'Faallo Bilaash ah',
    technical: 'Miyaad la kulantay wax dhibaato farsamo ah adoo adeegsanaya qalabka?',
  },
};

export const VIETNAMESE: Sentence = {
  audioSupported: true,
  displayedWelcome: 'Xin chào, tôi sẽ là thông dịch viên của bạn để trao đổi dễ dàng với cố vấn của bạn.',
  readedWelcome: 'Bạn có muốn trao đổi bằng ngôn ngữ này?',
  applicationName: 'Instant Translation',
  send: 'Send',
  translate: 'Translate',
  translationH2: 'Nhập văn bản hoặc nhấn và giữ micrô màu xanh lam để nói',
  translationH2Mobile: 'Nhập văn bản hoặc nhấn vào micrô màu xanh lam để nói',
  thanks: 'Pôle Emploi thanks you.',
  listen: 'Listen',
  recordText: 'Nói đi',
  gaugeText: 'Speak now',
  autoListen: 'Tự động nghe',
  rate: {
    qualityTranslate: 'Chất lượng của các bản dịch là gì?',
    rating: 'Bạn đánh giá công cụ này như thế nào?',
    comment: 'Bình luận miễn phí',
    technical: 'Bạn có gặp bất kỳ sự cố kỹ thuật nào khi sử dụng công cụ này không?',
  },
};

export const PERSAN: Sentence = {
  displayedWelcome: 'سلام من تفسیر شما هستم',
  readedWelcome: 'آیا می خواهید به این زبان ادامه دهید؟',
  applicationName: 'ترجمه فوری',
  send: 'ارسال',
  translate: 'ترجمه',
  translationH2: 'متن را وارد کنید ، یا میکروفون آبی را برای صحبت فشار داده و نگه دارید',
  translationH2Mobile: 'متن را وارد کنید یا برای صحبت روی میکروفن آبی ضربه بزنید',
  thanks: 'Pôle Emploi از شما متشکرم',
  listen: 'گوش دادن',
  recordText: 'الان صحبت کن',
  gaugeText: 'الان صحبت کن',
  languageButtonRAW: 'زبان فارسی',
  languageButtonFR: 'langue persane',
  rate: {
    qualityTranslate: 'کیفیت ترجمه ها چگونه بود؟',
    rating: 'ابزار را چگونه ارزیابی می کنید؟',
    comment: 'نظر رایگان',
    technical: 'آیا با استفاده از این ابزار به مشکلات فنی برخورد کرده اید؟',
  },
};

export const GREEK: Sentence = {
  audioSupported: true,
  applicationName: 'Άμεση μετάφραση',
  send: 'Αποστολή',
  translate: 'Μετάφραση',
  translationH2: 'Εισαγάγετε κείμενο ή πατήστε παρατεταμένα το μπλε μικρόφωνο για να μιλήσετε',
  translationH2Mobile: 'Εισαγάγετε κείμενο ή πατήστε το μπλε μικρόφωνο για να μιλήσετε',
  thanks: 'Pôle Emploi σε ευχαριστώ',
  listen: 'Άκου',
  recordText: 'Μίλα τώρα',
  displayedWelcome: 'Είμαι ο μεταφραστής σας για εύκολη ανταλλαγή με τον σύμβουλό σας.',
  readedWelcome: 'Θέλετε να συνεχίσετε σε αυτήν τη γλώσσα;',
  rate: {
    qualityTranslate: 'Ποια ήταν η ποιότητα των μεταφράσεων;',
    rating: 'Πώς αξιολογείτε το εργαλείο;',
    comment: 'Δωρεάν σχόλιο',
    technical: 'Έχετε αντιμετωπίσει τεχνικά προβλήματα κατά τη χρήση του εργαλείου;',
  },
};

export const BULGARE: Sentence = {
  ...ENGLISH,
  readedWelcome: 'Искате ли да превключите на този език?',
  translationH2: 'Въведете текст или натиснете и задръжте син микрофон, за да говорите',
  translationH2Ios: 'Напишете изречението за превод',
  translationH2Mobile: 'Въведете текст или докоснете синия микрофон, за да говорите',
};
