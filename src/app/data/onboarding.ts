import { Onboarding, OnboardingTitle } from "../models/vocabulary";

export const onboardingTabs: Onboarding[] = [
  {
    image: 'illu-accueil.png',
    indication: 'Compatible devices',
    textFR: 'Utilisez un téléphone, une tablette ou un ordinateur pour échanger avec votre conseiller dans votre langue.',
    textEN: 'Use your phone, a tablet or a computer to discuss with your advisor in your language.',
  },
  {
    image: 'illu-chrome.png',
    indication: 'Go to this website',
    textFR: 'Rendez-vous sur le site grâce à un QR code ou en saisissant l\'adresse sur votre navigateur chrome',
    textEN: 'Go to the website with a QR code or typing this adress on your chrome browser',
    browserFR: 'Seulement sur Google chrome',
    browserEN: 'Only on Google chrome',
  },
  {
    image: 'illu-qrcode.png',
    indication: 'How to scan a QR code',
    textFR: `Utiliser l\'application photo de votre mobile pour scanner le QR code. 
    Si votre téléphone supporte la lecture de QR code, un lien vers ce site apparaîtra sur votre écran.`,
    textEN: `Use the camera application on your phone to scan the QR code. 
    If your device supports QR codes, a link to the website will appear on your screen.`,
  },
  {
    image: 'illu-name.png',
    indication: 'Enter your firstname',
    textFR: 'Une fois sur le site traduction instant, saisissez votre prénom.',
    textEN: 'Once on the translation site, enter your firstname.',
  },
  {
    image: 'illu-choice.png',
    indication: 'Choose a language',
    textFR: 'Sélectionner votre langue usuelle parmis plus de 110 langues disponibles.',
    textEN: 'Select your usual language among more 110 available languages.',
  },
];

export const onboardbingTitle: OnboardingTitle = {
  helpFR: 'Aide',
  helpEN: 'Help',
  descriptionFR: 'Présentation de l\'outil de traduction',
  descriptionEN: 'Presentation of the translation tool',
};
