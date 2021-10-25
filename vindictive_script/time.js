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
    return;
}

const lastTime = fs.readFileSync('./time.txt', 'utf-8')

const currentTime = getCurrentDate()

const milliseconds = currentTime - lastTime

const dayInMilliseconds = 86400000;
const days = Math.floor(milliseconds / dayInMilliseconds)

function createResultMessage(time, word) {
    if (time === 0) {
        return '';
    } else {
        return `${time} ${word}`;
    }
}

const hourInMilliseconds = 3600000;
const hours = Math.floor(milliseconds / hourInMilliseconds)


const minutesInHours = 60;
const mins = ((milliseconds / hourInMilliseconds) - hours) * minutesInHours;
const minutes = Math.floor(mins)

const secondsInHours = 60;
const seconds = Math.floor((mins - minutes) * secondsInHours)


console.log(`Ну ты же уже запускал меня ${createResultMessage(days, 'дня,')} ${createResultMessage(hours, 'часа,')} ${createResultMessage(minutes, 'минут,')} ${createResultMessage(seconds, 'секунд')} тому назад`)


const newCurrentTime = getCurrentDate()
fs.writeFileSync('./time.txt', newCurrentTime)