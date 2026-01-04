let container = document.getElementById('container');
let word = document.getElementById('word');
let searchBtn = document.getElementById('searchBtn');
let loader = document.getElementById('loader');
let resultBox = document.getElementById('resultBox');
let wordName = document.getElementById('wordName');
let phonetics = document.getElementById('phonetics');
let definitions = document.getElementById('definitions');
let partOfSpeech = document.getElementById('partOfSpeech');
let audio = document.getElementById('audio');
let error = document.getElementById('error');
let audioBtn = document.getElementById('audioBtn');

let containArr = [];

searchBtn.addEventListener('click', function() {
    if(word.value === '') {
        error.innerText = 'Please enter a keyword!';
    }
    else {
        error.innerText = '';
        let API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
        loader.hidden = false;
        callAPI(API_URL);
    }

});

audioBtn.onclick = () => {
    audio.play();
};

async function callAPI(api) {
    try {
        containArr = [];
        let output = await fetch(api);
        let response = await output.json();
        loader.hidden = true;
        if(response.title) {
            error.innerText = response.title;
        }
        else {
            error.innerText = '';
            for(let resp of response) {
                containArr.push(resp);
            }
            resultBox.hidden = false;
            updateData();
        }
    }
    catch(e) {
        error.innerText = e;
    }
}

function updateData() {
    error.innerText = '';
    definitions.innerText = '';
    wordName.innerText = containArr[0].word;
    if(containArr[0].phonetic) {
        phonetics.innerText = containArr[0].phonetic;
    }
    else {
        for(let ph of containArr[0].phonetics) {
            if(ph.text) {
                phonetics.innerText = ph.text;
            }
        }
    }
    for(let part of containArr[0].meanings) {
        if(part.definitions[0].example) {
            definitions.innerText += `${part.partOfSpeech.charAt(0).toUpperCase() + part.partOfSpeech.slice(1)}: ${part.definitions[0].example} \n`;
        }
        else {
            definitions.innerText += `${part.partOfSpeech.charAt(0).toUpperCase() + part.partOfSpeech.slice(1)}: ${part.definitions[0].definition} \n`;
        }
    }
    for(let phone of containArr[0].phonetics) {
        if(phone.audio !== '') {
            audio.src = phone.audio;
        }
    }
}