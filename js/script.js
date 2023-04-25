// // Exemplo de Funções
// const divElement = document.getElementById("div-box")

// // divElement.addEventListener("click",()=>{
// //     console.log(divElement);
// // });


// divElement.addEventListener("click", mostraElemento);

// function mostraElemento() {
//     console.log(divElement)
// }

// function soma(){
//     let n1 = 10
//     let n2 = 5
//     console.log(n1 + n2)

// }

//Recuperando elementos do HTML com querySelector
// const liElements = document.querySelector("li");
// console.log(liElements);

//Recuperando elementos do HTML com querySelectorAll
//const liElements = [...document.querySelectorAll("li")];

//Convertendo NodeList em array COM SPREAD
//const liElements = [...document.querySelectorAll("li")];
// const arrayElements = [...liElements];
// console.log(arrayElements);


// const arrayElements = [...document.querySelectorAll("li")];

// arrayElements.map((el,key)=>{

//     if (el.textContent =="item-24") {
//         el.textContent = `${key+1}[ <-- É esse aqui oh ]`; //Texto
//     }

// });
// let tmp = 0;


// function mudaCor() {  //para mudar cores
//      let r = Math.ceil(Math.random()*255);
//      let g = Math.ceil(Math.random()*255);
//      let b = Math.ceil(Math.random()*255);
    
//      const elemento = [...document.getElementsByClassName("conteudo")];
//      elemento.forEach( (el)=>{
//          el.style.backgroundColor = `rgb(${r},${g},${b})`;
//      } )

//     tmp = setTimeout(mudaCor, 5000);

//  }

// ----------------------- AULA DO DIA 25.04 ----------------------
//----------------------- ADICIONANDO IMAGENS ---------------------

let tmp = 0;

function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )

   tmp = setTimeout(mudaCor, 1000);

}

function alteraBanner1() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "../RM98690/img/banner-lateral-1.png";
    img2.src = "../RM98690/img/banner-lateral-2.png";

    setTimeout(alteraBanner2, 1000);

}
 
function alteraBanner2() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "../RM98690/img/banner-lateral-1.png";
    img2.src = "../RM98690/img/banner-lateral-2.png";

    setTimeout(alteraBanner3, 1000);

}

function alteraBanner3() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "../RM98690/img/banner-lateral-1.png";
    img2.src = "../RM98690/img/banner-lateral-2.png";

    setTimeout(alteraBanner1, 1000);

}
