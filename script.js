let hero = document.createElement('div')
hero.className = 'hero'

let texIn = document.createElement('div')
texIn.className = 'texIn'
texIn.innerHTML = `<h1>Text TO Speech <span>Converter</span></h1>
                     <textarea placeholder="Write anything here..."></textarea>
                     <div class="row">
                     <select></select>
                     <button><i class="fa-solid fa-play"  id="ctrlIcon"></i>Listen</button>
                     </div>`
hero.append(texIn)                     
     

document.body.append(hero)

let speech = new SpeechSynthesisUtterance();

let voices = []

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});