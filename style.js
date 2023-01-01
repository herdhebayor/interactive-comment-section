import data from './data.json' assert {type:'json'};
console.log(data.comments[0]);
const firstComment = document.getElementById("user1comm").innerHTML = data.comments[0].content;
const secondComment = document.getElementById("user2comm").innerHTML= data.comments[1].content;
const thirdComment = document.getElementById("user3comm").innerHTML = data.comments[1].replies[0].content;
const fourthComment = document.getElementById("user4comm").innerHTML = data.comments[1].replies[1].content;

// TO EDIT COMMENT
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
plus.forEach((items)=>{
    items.addEventListener('click', (e)=>{
        let btnParent = e.target.parentElement;
        let score = btnParent.nextElementSibling
        let x = score.innerHTML;
        x++;
        score.innerHTML = x;
        if(score.innerHTML ===20){
            clearInterval();
            return
        }
    })
})
minus.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let btnParent = e.target.parentElement;
        let val = btnParent.previousElementSibling
        let x = val.innerHTML;
        x--;
        val.innerHTML = x;
    })
})