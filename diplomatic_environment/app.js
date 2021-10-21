const lang = process.env.LANG || 'RU'

switch (lang) {
    case 'UK':
        console.log('Пацак повинен робити ку два рази')
        break;
    case 'EN':
        console.log('The kid must do ku twice')
        break;
    case 'RU':
        console.log('Пацак должен делать ку два раза')
        break;
    default:
        console.log('ERROR')
}

