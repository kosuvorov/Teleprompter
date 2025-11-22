import { HistoryItem } from './types';

const HISTORY_KEY = 'teleprompter_history';

export function getHistory(): HistoryItem[] {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
}

export function saveToHistory(text: string): void {
    let history = getHistory();
    if (history.length > 0 && history[0].text === text) return;

    const item: HistoryItem = {
        id: Date.now(),
        text: text,
        preview: text.substring(0, 40) + (text.length > 40 ? '...' : ''),
        date: new Date().toLocaleDateString()
    };

    history.unshift(item);
    if (history.length > 10) history.pop();
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function clearAllHistory(): void {
    localStorage.removeItem(HISTORY_KEY);
}
