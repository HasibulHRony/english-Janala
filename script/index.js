//load levels
const loadLevels = () =>{
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displayEachLevel(data.data))
}

//display each level
const displayEachLevel = (levels) =>{
    const levelContainer = document.getElementById("level-container");
    levels.forEach((level)=>{
        const levelName = document.createElement("div")
        levelName.innerHTML = `<div class="btn btn-outline btn-primary hover:btn-active"><i class="fa-solid fa-book-open"></i> level-${level.level_no}</div>`;
        levelContainer.appendChild(levelName);
    })
}

loadLevels()