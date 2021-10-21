const fs = require('fs')

function getCurrentDate() {
    const data = new Date();
const currentDate = data.getTime()
return currentDate
}

getCurrentDate()

const fileExists = fs.existsSync('./time.txt')
if (!fileExists) {
    console.log('Окей, ты меня запустил. Ты доволен?')
    const currentDate = getCurrentDate()
    fs.writeFileSync('./time.txt', currentDate)
} else {
    const lastTime = fs.readFileSync('./time.txt', 'utf-8')

    const currentTime = getCurrentDate()

    const milliseconds = currentTime - lastTime
 
const days = Math.floor(milliseconds / 86400000)

if (days === 0) {
    resultDays = ''
} else {
     resultDays = `${days} дня,`;
}

    const hours = Math.floor(milliseconds / 3600000)

if (hours === 0) {
    resultHours = ''
} else {
     resultHours = `${hours} часа,`;
}
   
 const mins = ((milliseconds / 3600000)- hours)* 60
 const minutes = Math.floor(mins)

if (minutes === 0) {
    resultMinutes = ''
    } else {
        resultMinutes = `${minutes} минут,`; 
    }
   

 const seconds = Math.floor((mins - minutes)* 60)

  if (seconds === 0) {
    resultSeconds = ''
    } else {
        resultSeconds = `${seconds} секунд`;
    }
       
       console.log(`Ну ты же уже запускал меня ${resultDays} ${resultHours} ${resultMinutes} ${resultSeconds} тому назад`) 
}

const newCurrentTime = getCurrentDate()
    fs.writeFileSync('./time.txt', newCurrentTime)