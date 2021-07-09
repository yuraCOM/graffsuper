
let mainWindow = document.querySelector('#main');

let allGamers = [
    {name: "SUPERMAN", score: 900},
    {name: 'Yura', score: 4000},
    {name: 'Vasja', score: 5000 },
    {name: 'Petro', score: 2500 },
    {name: 'Masha', score: 7000 },
    {name: 'Dro4er', score: 1000 },
    {name: 'Dick', score: 6000 }
]
sortByScore(allGamers) //сортировка первоначального массива

//функция сотировка массива по возрастанию
function sortByScore(arr) {
    arr.sort((a, b) => a.score > b.score ? 1 : -1);
}

//индекс нашего спермена
let newGamerInd;

// ищем индекс супермена
function getnewGamerInd (array){
    array.forEach((element, index)=>{
        if(element.name === "SUPERMAN" ){
            newGamerInd = index
            console.log(element.name, index)
        }
    });
}

//рисуем график - вставляем в документ
function drawGraf(array){
    allGamers.forEach((element, index) =>{
        mainWindow.innerHTML += `
        <div class="gamer">
            <p class="score">${element.score}</p>
            <div class="col-gamer-${index}"></div>
            <p class="name">${element.name}</p>
        </div>
    `
        document.querySelector(`.col-gamer-${index}`).classList.add('gamer-color')
        document.querySelector(`.col-gamer-${index}`).style.height = `${element.score/40}px`
        });
};

// задаем очки
function chandgeScore(score){
    allGamers.forEach((item)=>{
        if (item.name === "SUPERMAN" ){
            item.score = score
        }
    })
}

//красим в зеленый
function greenSuper (){
    document.querySelector(`.col-gamer-${newGamerInd}`).classList.add('green')
}

//первый запуск отрисовки графика
drawGraf(allGamers)
//получаем индекс спермена
getnewGamerInd(allGamers)
//красим в зеленый цвет супермена
greenSuper ()
// document.querySelector(`.col-gamer-${newGamerInd}`).classList.add('green')
//
// //запускаем рисовать по всем параметрам супермена
// setTimeout(()=> {
//     chandgeScore(1200);
//     sortByScore(allGamers);
//     getnewGamerInd(allGamers);
//     mainWindow.innerHTML = '';
//     drawGraf(allGamers);
//     greenSuper ();
// }, 1000);
//
// setTimeout(()=> {
//     chandgeScore(3200);
//     sortByScore(allGamers);
//     getnewGamerInd(allGamers);
//     mainWindow.innerHTML = '';
//     drawGraf(allGamers);;
//     greenSuper ();
// }, 3000);


//функция супермен - все в одной!!
function goSuperMan(gol, starttime){
    setTimeout(()=> {
        chandgeScore(gol);
        sortByScore(allGamers);
        getnewGamerInd(allGamers);
        mainWindow.innerHTML = '';
        drawGraf(allGamers);
        greenSuper ();
    }, starttime);
};


goSuperMan(1500, 1000)
goSuperMan(3500, 2500)
goSuperMan(4500, 3500)
goSuperMan(5500, 4500)
goSuperMan(6500, 5500)
goSuperMan(1500, 6500)
goSuperMan(17000, 7500)


setTimeout(()=> {
    mainWindow.innerHTML = '';
    mainWindow.innerHTML = `<img src="super.jpg" alt="">`;
}, 8500);
