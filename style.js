import data from './data.json' assert {type:'json'};
console.log(data.comments[0]);
const firstComment = document.getElementById("user1comm").innerHTML =  data.comments[0].content;
const secondComment = document.getElementById("user2comm").innerHTML= data.comments[1].content;
const thirdComment = document.getElementById("user3comm").innerHTML = data.comments[1].replies[0].content;
const fourthComment = document.getElementById("user4comm").innerHTML = data.comments[1].replies[1].content;

// TO EDIT COMMENT
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

// score function
plus.forEach((items)=>{
    items.addEventListener('click', (e)=>{
        let btnParent = e.target.parentElement;
        let score = btnParent.nextElementSibling
        let x = score.innerHTML;
        x++;
        score.innerHTML = x;
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

const btnReply = document.querySelectorAll(".reply");
    btnReply.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            let el = e.target.parentElement;
            let parent = el.parentElement; 
        let box = document.getElementById("curCom");
        let btn = document.getElementById("submit");
        parent.appendChild(box);
        let txt = document.getElementById("textarea");
         txt.focus();
        btn.innerHTML = "post";
        btn.addEventListener('click',()=>{
            let wrapper = document.createElement("div");
            wrapper.classList.add("wrapper");
            let replyBody = document.getElementById("newComment");
            wrapper.appendChild(replyBody);
            
            replyBody.style.display = "block";
            parent.appendChild(wrapper);
            parent.removeChild(box);

        })
       
            })
    })

