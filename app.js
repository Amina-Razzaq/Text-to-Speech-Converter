let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Default to the first voice

    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener('click', () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
