//load levels
const loadLevels = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayEachLevel(data.data))
}

//display each level
const displayEachLevel = (levels) => {
    const levelContainer = document.getElementById("level-container");
    levels.forEach((level) => {
        const levelName = document.createElement("div")
        levelName.innerHTML = `<div onclick="loadLevelWords(${level.level_no})" class="btn btn-outline btn-primary hover:btn-active"><i class="fa-solid fa-book-open"></i> level-${level.level_no}</div>`;
        levelContainer.appendChild(levelName);
    })
}

//load each levels every words
const loadLevelWords = (data) => {
    const url = `https://openapi.programming-hero.com/api/level/${data}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLevelWords(data.data));
}



//display each levels every words
const displayLevelWords = (levelWords) => {


    // document.getElementById("first-default-message").style.display = "none";
    // const emptyWordMessage = document.getElementById("empty-word-message")
    const allLevelWords = document.getElementById("all-level-words")
    allLevelWords.innerHTML = "";

    if (levelWords.length == 0) {
        allLevelWords.innerHTML = `
        <div
        class="text-center  col-span-full rounded-xl py-10 space-y-6 font-bangla"
      >
        <img class="mx-auto" src="./assets/alert-error.png"/>
        <p class="text-xl font-medium text-gray-400">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
      </div>
        `;
        return;
    }


    levelWords.forEach((levelWord) => {
        const wordsCards = document.createElement("div")
        wordsCards.innerHTML = `<div class="text-center p-4 bg-white shadow-sm rounded-lg">
    <h1 class="mb-2 font-semibold text-3xl">${levelWord.word}</h1>
    <h1 class="mb-2  text-xl">meaning/pronunciation</h1>
    <h1 class="mb-2  text-xl">${levelWord.meaning}/${levelWord.pronunciation}</h1>
    <div class="flex justify-between">
        <button class="btn"><i class="fa-solid fa-circle-question"></i></button>
        <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
    </div>
    </div>`;
        allLevelWords.appendChild(wordsCards)
    })
}

loadLevels()