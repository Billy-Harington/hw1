let random = (Math.random() * 60)
let float = parseInt(random)
let azimsHW;
if (float >= 0 && float <= 15) {
    azimsHW = "1-z Четверть"
} else if (float >= 16 && float <= 30) {
    azimsHW = "2-я четверть"
}

else if (float >= 31 && float <= 45) {
  azimsHW = "3-я Четверть"
}

else {
  azimsHW = "4-я Четверть";
}

console.log(
  `Это число ${float}. Это  ${azimsHW}`
  
)


