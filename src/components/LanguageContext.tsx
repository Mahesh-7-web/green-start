"use client";

import React, { createContext, useContext, useState, useMemo } from "react";

export type Language = "en" | "te" | "ta" | "kn" | "ml";

export const languageNames: Record<Language, string> = {
  en: "English",
  te: "తెలుగు",
  ta: "தமிழ்",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
};

type Translations = {
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  viewPlans: string;
  browseProducts: string;
  whyChooseUs: string;
  whySubtitle: string;
  requestSprouts: string;
  helpCentre: string;
  home: string;
  products: string;
  pricing: string;
  compare: string;
  addToCart: string;
  freshOrganic: string;
  freshOrganicDesc: string;
  hygienicallyGrown: string;
  hygienicallyGrownDesc: string;
  richInNutrients: string;
  richInNutrientsDesc: string;
  noPreservatives: string;
  noPreservativesDesc: string;
  farmToHome: string;
  farmToHomeDesc: string;
  healthyLifestyle: string;
  healthyLifestyleDesc: string;
  contactUs: string;
  faq: string;
};

const translations: Record<Language, Translations> = {
  en: {
    heroTagline: "Green Start",
    heroTitle: "Start Your Healthy Morning",
    heroSubtitle:
      "Fresh sprouts delivered daily — farm-grown, hygienically packed, and bursting with nutrition.",
    viewPlans: "View Plans",
    browseProducts: "Browse Products",
    whyChooseUs: "Why Choose Our Sprouts?",
    whySubtitle:
      "We grow every batch with care, delivering farm-fresh goodness straight to your doorstep.",
    requestSprouts: "Request Sprouts",
    helpCentre: "Help Centre",
    home: "Home",
    products: "Products",
    pricing: "Pricing",
    compare: "Compare",
    addToCart: "Add to Cart",
    freshOrganic: "100% Fresh & Organic",
    freshOrganicDesc: "Every sprout is grown fresh daily with zero chemicals.",
    hygienicallyGrown: "Hygienically Grown",
    hygienicallyGrownDesc: "Clean sprouting process in sanitised facilities.",
    richInNutrients: "Rich in Nutrients",
    richInNutrientsDesc: "Packed with proteins, vitamins, and minerals.",
    noPreservatives: "No Preservatives",
    noPreservativesDesc: "Pure sprouts with nothing artificial added.",
    farmToHome: "Farm-to-Home Delivery",
    farmToHomeDesc: "Direct from our farm to your table, same morning.",
    healthyLifestyle: "Healthy Lifestyle Choice",
    healthyLifestyleDesc: "Perfect start for a balanced, energetic day.",
    contactUs: "Contact Us",
    faq: "FAQs",
  },
  te: {
    heroTagline: "గ్రీన్ స్టార్ట్",
    heroTitle: "మీ ఆరోగ్యకరమైన ఉదయాన్ని ప్రారంభించండి",
    heroSubtitle:
      "తాజా మొలకలు రోజువారీగా డెలివరీ — వ్యవసాయం నుండి నేరుగా, పోషకాలతో నిండి ఉంటాయి.",
    viewPlans: "ప్లాన్‌లు చూడండి",
    browseProducts: "ఉత్పత్తులు చూడండి",
    whyChooseUs: "మా మొలకలు ఎందుకు ఎంచుకోవాలి?",
    whySubtitle: "మేము ప్రతి బ్యాచ్‌ను శ్రద్ధతో పెంచుతాం.",
    requestSprouts: "మొలకలు అభ్యర్థించండి",
    helpCentre: "సహాయ కేంద్రం",
    home: "హోమ్",
    products: "ఉత్పత్తులు",
    pricing: "ధరలు",
    compare: "పోల్చండి",
    addToCart: "కార్ట్‌కు జోడించండి",
    freshOrganic: "100% తాజా & సేంద్రీయ",
    freshOrganicDesc: "ప్రతి మొలక రసాయనాలు లేకుండా తాజాగా పెరుగుతుంది.",
    hygienicallyGrown: "పరిశుభ్రంగా పెంచిన",
    hygienicallyGrownDesc: "శుభ్రమైన వాతావరణంలో పెరిగిన మొలకలు.",
    richInNutrients: "పోషకాలతో నిండిన",
    richInNutrientsDesc: "ప్రోటీన్లు, విటమిన్లు మరియు ఖనిజాలతో నిండి ఉంటాయి.",
    noPreservatives: "కృత్రిమ పదార్థాలు లేవు",
    noPreservativesDesc: "స్వచ్ఛమైన మొలకలు, ఏమీ కలపలేదు.",
    farmToHome: "వ్యవసాయం నుండి నేరుగా డెలివరీ",
    farmToHomeDesc: "మా వ్యవసాయం నుండి మీ టేబుల్‌కు నేరుగా.",
    healthyLifestyle: "ఆరోగ్యకరమైన జీవనశైలి",
    healthyLifestyleDesc: "సమతుల్య, శక్తివంతమైన రోజుకు సరైన ప్రారంభం.",
    contactUs: "సంప్రదించండి",
    faq: "తరచుగా అడిగే ప్రశ్నలు",
  },
  ta: {
    heroTagline: "கிரீன் ஸ்டார்ட்",
    heroTitle: "உங்கள் ஆரோக்கியமான காலையை தொடங்குங்கள்",
    heroSubtitle:
      "தினசரி புதிய முளைகள் டெலிவரி — வயலில் இருந்து நேரடியாக, சத்துக்கள் நிறைந்தது.",
    viewPlans: "திட்டங்களை காண்க",
    browseProducts: "தயாரிப்புகளை காண்க",
    whyChooseUs: "எங்கள் முளைகளை ஏன் தேர்வு செய்ய வேண்டும்?",
    whySubtitle: "நாங்கள் ஒவ்வொரு தொகுப்பையும் அக்கறையுடன் வளர்க்கிறோம்.",
    requestSprouts: "முளைகள் கோரிக்கை",
    helpCentre: "உதவி மையம்",
    home: "முகப்பு",
    products: "தயாரிப்புகள்",
    pricing: "விலை",
    compare: "ஒப்பிடு",
    addToCart: "கார்ட்டில் சேர்",
    freshOrganic: "100% புதிய & இயற்கை",
    freshOrganicDesc: "ஒவ்வொரு முளையும் ரசாயனங்கள் இல்லாமல் வளர்க்கப்படுகிறது.",
    hygienicallyGrown: "சுகாதாரமாக வளர்க்கப்பட்டது",
    hygienicallyGrownDesc: "சுத்தமான சூழலில் வளர்க்கப்பட்ட முளைகள்.",
    richInNutrients: "சத்துக்கள் நிறைந்தது",
    richInNutrientsDesc: "புரதங்கள், வைட்டமின்கள் மற்றும் தாதுக்கள் நிறைந்தது.",
    noPreservatives: "செயற்கை பொருட்கள் இல்லை",
    noPreservativesDesc: "தூய்மையான முளைகள், எதுவும் கலக்கப்படவில்லை.",
    farmToHome: "வயலில் இருந்து வீட்டிற்கு",
    farmToHomeDesc: "எங்கள் வயலில் இருந்து உங்கள் மேசைக்கு நேரடியாக.",
    healthyLifestyle: "ஆரோக்கியமான வாழ்க்கை முறை",
    healthyLifestyleDesc: "சமநிலையான, ஆற்றல் நிறைந்த நாளுக்கு சரியான தொடக்கம்.",
    contactUs: "தொடர்பு கொள்ளுங்கள்",
    faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
  },
  kn: {
    heroTagline: "ಗ್ರೀನ್ ಸ್ಟಾರ್ಟ್",
    heroTitle: "ನಿಮ್ಮ ಆರೋಗ್ಯಕರ ಬೆಳಿಗ್ಗೆ ಪ್ರಾರಂಭಿಸಿ",
    heroSubtitle:
      "ದಿನನಿತ್ಯ ತಾಜಾ ಮೊಳಕೆಗಳ ವಿತರಣೆ — ತೋಟದಿಂದ ನೇರವಾಗಿ, ಪೋಷಣೆಯಿಂದ ತುಂಬಿದ.",
    viewPlans: "ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
    browseProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
    whyChooseUs: "ನಮ್ಮ ಮೊಳಕೆಗಳನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",
    whySubtitle: "ನಾವು ಪ್ರತಿ ಬ್ಯಾಚ್ ಅನ್ನು ಕಾಳಜಿಯಿಂದ ಬೆಳೆಸುತ್ತೇವೆ.",
    requestSprouts: "ಮೊಳಕೆ ವಿನಂತಿ",
    helpCentre: "ಸಹಾಯ ಕೇಂದ್ರ",
    home: "ಮನೆ",
    products: "ಉತ್ಪನ್ನಗಳು",
    pricing: "ಬೆಲೆ",
    compare: "ಹೋಲಿಸಿ",
    addToCart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
    freshOrganic: "100% ತಾಜಾ & ಸಾವಯವ",
    freshOrganicDesc: "ಪ್ರತಿ ಮೊಳಕೆ ರಾಸಾಯನಿಕಗಳಿಲ್ಲದೆ ತಾಜಾ ಬೆಳೆಯುತ್ತದೆ.",
    hygienicallyGrown: "ಶುಚಿಯಾಗಿ ಬೆಳೆದ",
    hygienicallyGrownDesc: "ಸ್ವಚ್ಛ ವಾತಾವರಣದಲ್ಲಿ ಬೆಳೆದ ಮೊಳಕೆಗಳು.",
    richInNutrients: "ಪೋಷಕಾಂಶಗಳಿಂದ ಸಮೃದ್ಧ",
    richInNutrientsDesc: "ಪ್ರೋಟೀನ್, ವಿಟಮಿನ್ ಮತ್ತು ಖನಿಜಗಳಿಂದ ತುಂಬಿದ.",
    noPreservatives: "ಸಂರಕ್ಷಕಗಳಿಲ್ಲ",
    noPreservativesDesc: "ಶುದ್ಧ ಮೊಳಕೆಗಳು, ಯಾವುದೇ ಸೇರ್ಪಡೆ ಇಲ್ಲ.",
    farmToHome: "ತೋಟದಿಂದ ಮನೆಗೆ",
    farmToHomeDesc: "ನಮ್ಮ ತೋಟದಿಂದ ನಿಮ್ಮ ಟೇಬಲ್‌ಗೆ ನೇರವಾಗಿ.",
    healthyLifestyle: "ಆರೋಗ್ಯಕರ ಜೀವನಶೈಲಿ",
    healthyLifestyleDesc: "ಸಮತೋಲಿತ, ಶಕ್ತಿಯುತ ದಿನಕ್ಕೆ ಸರಿಯಾದ ಪ್ರಾರಂಭ.",
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    faq: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
  },
  ml: {
    heroTagline: "ഗ്രീൻ സ്റ്റാർട്ട്",
    heroTitle: "നിങ്ങളുടെ ആരോഗ്യകരമായ രാവിലെ ആരംഭിക്കൂ",
    heroSubtitle:
      "ദൈനംദിന പുതിയ മുളകൾ ഡെലിവറി — കൃഷിയിടത്തിൽ നിന്ന് നേരിട്ട്, പോഷകഗുണങ്ങൾ നിറഞ്ഞ.",
    viewPlans: "പ്ലാനുകൾ കാണൂ",
    browseProducts: "ഉൽപ്പന്നങ്ങൾ കാണൂ",
    whyChooseUs: "ഞങ്ങളുടെ മുളകൾ എന്തുകൊണ്ട് തിരഞ്ഞെടുക്കണം?",
    whySubtitle: "ഞങ്ങൾ ഓരോ ബാച്ചും ശ്രദ്ധയോടെ വളർത്തുന്നു.",
    requestSprouts: "മുളകൾ അഭ്യർഥിക്കൂ",
    helpCentre: "സഹായ കേന്ദ്രം",
    home: "ഹോം",
    products: "ഉൽപ്പന്നങ്ങൾ",
    pricing: "വില",
    compare: "താരതമ്യം",
    addToCart: "കാർട്ടിൽ ചേർക്കൂ",
    freshOrganic: "100% പുതിയ & ജൈവ",
    freshOrganicDesc: "ഓരോ മുള രാസവസ്തുക്കൾ ഇല്ലാതെ പുതുതായി വളരുന്നു.",
    hygienicallyGrown: "ശുചിത്വത്തോടെ വളർത്തിയത്",
    hygienicallyGrownDesc: "ശുദ്ധമായ അന്തരീക്ഷത്തിൽ വളർത്തിയ മുളകൾ.",
    richInNutrients: "പോഷകഗുണങ്ങൾ നിറഞ്ഞ",
    richInNutrientsDesc: "പ്രോട്ടീൻ, വിറ്റാമിനുകൾ, ധാതുക്കൾ നിറഞ്ഞ.",
    noPreservatives: "സംരക്ഷണ വസ്തുക്കൾ ഇല്ല",
    noPreservativesDesc: "ശുദ്ധമായ മുളകൾ, ഒന്നും ചേർത്തിട്ടില്ല.",
    farmToHome: "കൃഷിയിടത്തിൽ നിന്ന് വീട്ടിലേക്ക്",
    farmToHomeDesc: "ഞങ്ങളുടെ കൃഷിയിടത്തിൽ നിന്ന് നിങ്ങളുടെ മേശയ്ക്ക് നേരിട്ട്.",
    healthyLifestyle: "ആരോഗ്യകരമായ ജീവിതശൈലി",
    healthyLifestyleDesc: "സന്തുലിതമായ, ഊർജ്ജസ്വലമായ ദിവസത്തിന് ശരിയായ തുടക്കം.",
    contactUs: "ഞങ്ങളെ ബന്ധപ്പെടൂ",
    faq: "പതിവ് ചോദ്യങ്ങൾ",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
