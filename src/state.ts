import { AppState } from './types';

export const state: AppState = {
    isListening: false,
    scriptWords: [],
    currentIndex: 0,
    recognition: null,
    isMirrored: false,
    selectedLanguage: 'en-US', // User's selected language
    config: {
        fontSize: 20,
        lineHeight: 1.5,
        margin: window.innerWidth < 768 ? 8 : 32, // 8px mobile, 32px desktop
        textColor: '#ffffff',
        bgColor: '#000000',
        textAlign: 'center',
        showStopIcon: false,
        preserveFormatting: false,
        voiceCommandsEnabled: true,
        paragraphSpacing: 1.0
    }
};
