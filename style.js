import data from './data.json' assert {type:'json'};
console.log(data.comments[0]);
const firstComment = document.getElementById("user1comm").innerHTML = data.comments[0].content;
const secondComment = document.getElementById("user2comm").innerHTML= data.comments[1].content;
const thirdComment = document.getElementById("user3comm").innerHTML = data.comments[1].replies[0].content;
const fourthComment = document.getElementById("user4comm").innerHTML = data.comments[1].replies[1].content;

// TO EDIT COMMENT
