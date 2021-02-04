let obj = {
    hours: '21',
    minutes: '24',
    seconds: '15'
}

// function showTime() {
//     alert(`${obj.hours}:${obj.minutes}:${obj.seconds}`)
// }
// showTime()


// let seconds = obj.hours * 3600 + obj.minutes * 60 + obj.seconds
let sec = obj.hours * 3600 + obj.minutes * 60 + obj.seconds
console.log(sec)
function format(seconds) {
    let s = (seconds % 60).toString();
    let m = Math.floor(seconds / 60 % 60).toString();
    let h = Math.floor(seconds / 60 / 60 % 60).toString();
    return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
  }
  
  console.log(format(sec));

// let inputSeconds = +prompt('How many seconds do you wanna add?') 
// function addTime() {
//     obj.hours *= 3600
//     obj.minutes *= 60
//     // console.log(obj.hours)
//     // console.log(obj.minutes)
//     let sum = obj.hours + obj.minutes + obj.seconds
//     console.log(sum)
//     obj.hours = sum / 3600 % 60
//     obj.minutes = sum / 60 - obj.hours * 60
//     obj.seconds = sum % 60
//     console.log(Math.floor(obj.hours))
//     console.log(obj.minutes)
//     console.log(obj.seconds)

    // console.log(sum)
    // sum += inputSeconds
    // obj.minutes = Math.floor(sum / 60)
    // obj.hours = obj.minutes / 60
    // console.log(obj.hours)

