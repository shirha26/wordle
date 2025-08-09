// רשימת 147 מילים עבריות בנות 5 אותיות בדיוק למשחק Wordle
// כל מילה ברשימה נבדקה ואומתה כבת 5 אותיות עבריות בלבד

const hebrewWords = [
  "דברים", "אנשים", "ילדים", "גברים", "חברים", "ספרים", "כלבים", "פרחים", "עבודה", "משפחה",
  "שנייה", "בניין", "מסעדה", "משטרה", "מונית", "אוניה", "תמונה", "מילים", "בעיות", "שאלות",
  "תשובה", "חשבון", "כתובת", "טלפון", "מחשבה", "רעיון", "החלטה", "אמונה", "תקווה", "עצבות",
  "שמיים", "נהרות", "מעיין", "בריכה", "רמזור", "חדרים", "שולחן", "מכונת", "פחיות", "בקבוק",
  "מברשת", "וילון", "שמיכה", "ציפית", "מנורה", "חולצה", "חצאית", "תחתון", "חזייה", "כפפות",
  "רצועה", "חגורה", "משקפי", "שרשרת", "תליון", "רוכסן", "ארוחה", "נשנוש", "בייגל", "אפרסק",
  "אבטיח", "גבינה", "וודקה", "משאית", "חלקים", "נסיעה", "כרטיס", "דיילת", "דרכון", "כניסה",
  "ינואר", "אפריל", "דצמבר", "אמירה", "אולפן", "איטלי", "אכזבה", "אמיתי", "אספקה", "אפשרי",
  "ארגון", "אתגרי", "בגידה", "בוגרת", "בזבוז", "בחירה", "בנייה", "בעיתי", "בשורה", "גיבור",
  "גילוי", "גירוד", "גמילה", "געגוע", "גפרור", "דאגות", "דכאון", "יהלום", "ימיני", "יתרון",
  "להיות", "מבוכה", "אברהם", "איכות", "אלהים", "אמיצי", "אנגלי", "אסורי", "אפילו", "ארוכה",
  "אשכול", "אתריה", "בדיקי", "בזמני", "בלשון", "בפנים", "בצורה", "בשביל", "גבריל", "גדולה",
  "גלויה", "גמורה", "גפרור", "דגושה", "דמיון", "וסכום", "זהובה", "זכותי", "זעירה", "זקוקה",
  "זרועי", "חבורה", "חדישה", "חזיתי", "חנותי", "חסידי", "חפירה", "חצובי", "חקלאי", "חריפי",
  "חשובי", "טבעיי", "טובתי", "טיוחי", "טלפני", "טעותי", "טקסיס"
];

// פונקציה לבחירת מילה אקראית מהרשימה
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * hebrewWords.length);
    return hebrewWords[randomIndex];
}

// פונקציה לבדיקה אם מילה קיימת ברשימה
function isValidWord(word) {
    return hebrewWords.includes(word);
}

// פונקציה לקבלת כל המילים
function getAllWords() {
    return [...hebrewWords];
}

// פונקציה לבדיקת תקינות הרשימה
function checkWordList() {
    const invalid = [];
    hebrewWords.forEach((word, index) => {
        if (word.length !== 5 || !/^[א-ת]+$/.test(word)) {
            invalid.push({ word, index: index + 1, length: word.length });
        }
    });
    
    return {
        totalWords: hebrewWords.length,
        validWords: hebrewWords.length - invalid.length,
        invalidWords: invalid
    };
}

// בדיקה אוטומטית - תרוץ כשמטענים את הקובץ
console.log('🔍 בדיקת רשימת המילים העבריות...');
const validation = checkWordList();
console.log(`📊 סך הכל: ${validation.totalWords} מילים`);
console.log(`✅ תקינות: ${validation.validWords}`);
console.log(`❌ לא תקינות: ${validation.invalidWords.length}`);

if (validation.invalidWords.length > 0) {
    console.warn('⚠️  נמצאו מילים לא תקינות:', validation.invalidWords);
} else {
    console.log('🎉 כל המילים ברשימה תקינות!');
}

// ייצוא הפונקציות לשימוש במשחק
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        hebrewWords, 
        getRandomWord, 
        isValidWord, 
        getAllWords, 
        checkWordList 
    };
}