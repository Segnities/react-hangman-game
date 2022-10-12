const words = ["application", "vue", "react", "angular", "interface", "wizard"];

export function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
