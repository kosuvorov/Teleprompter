import { franc } from 'franc-min';

// Map ISO 639-3 (franc output) to BCP 47 (Speech Recognition API)
const languageMap: Record<string, string> = {
    'eng': 'en-US',
    'spa': 'es-ES',
    'fra': 'fr-FR',
    'deu': 'de-DE',
    'ita': 'it-IT',
    'por': 'pt-PT',
    'rus': 'ru-RU',
    'jpn': 'ja-JP',
    'cmn': 'zh-CN',
    'kor': 'ko-KR',
    'nld': 'nl-NL',
    'pol': 'pl-PL',
    'swe': 'sv-SE',
    'dan': 'da-DK',
    'fin': 'fi-FI',
    'nor': 'no-NO',
    'ces': 'cs-CZ',
    'hun': 'hu-HU',
    'ron': 'ro-RO',
    'tur': 'tr-TR',
    'ara': 'ar-SA',
    'heb': 'he-IL',
    'hin': 'hi-IN',
    'tha': 'th-TH',
    'vie': 'vi-VN',
    'ind': 'id-ID',
    'msa': 'ms-MY',
    'ukr': 'uk-UA',
    'cat': 'ca-ES',
    'ell': 'el-GR'
};

export function detectLanguage(text: string): string {
    if (!text || text.length < 10) return 'en-US';

    const detected = franc(text, { minLength: 10 });

    // If detection is uncertain or not in map, default to English
    if (detected === 'und' || !languageMap[detected]) {
        return 'en-US';
    }

    return languageMap[detected];
}

export function getLanguageName(code: string): string {
    const names: Record<string, string> = {
        'en-US': 'English (US)',
        'es-ES': 'Spanish',
        'fr-FR': 'French',
        'de-DE': 'German',
        'it-IT': 'Italian',
        'pt-PT': 'Portuguese',
        'ru-RU': 'Russian',
        'ja-JP': 'Japanese',
        'zh-CN': 'Chinese',
        'ko-KR': 'Korean',
        'nl-NL': 'Dutch',
        'pl-PL': 'Polish',
        'sv-SE': 'Swedish',
        'da-DK': 'Danish',
        'fi-FI': 'Finnish',
        'no-NO': 'Norwegian',
        'cs-CZ': 'Czech',
        'hu-HU': 'Hungarian',
        'ro-RO': 'Romanian',
        'tr-TR': 'Turkish',
        'ar-SA': 'Arabic',
        'he-IL': 'Hebrew',
        'hi-IN': 'Hindi',
        'th-TH': 'Thai',
        'vi-VN': 'Vietnamese',
        'id-ID': 'Indonesian',
        'ms-MY': 'Malay',
        'uk-UA': 'Ukrainian',
        'ca-ES': 'Catalan',
        'el-GR': 'Greek'
    };
    return names[code] || 'English (US)';
}
