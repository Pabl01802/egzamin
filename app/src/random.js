import questions from "./questions";

export let randomArr = []

let i = 40

while(i>0){
  let random = Math.floor(Math.random()*questions.length)
  randomArr.push(random)
  i--;
}