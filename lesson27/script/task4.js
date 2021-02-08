const audience = [
    {name: 'Biology', size: 12, faculty: 'IMIT'},
    {name: 'Math', size: 20, faculty: 'MAUT'},
    {name: 'Philosophy', size: 14, faculty: 'PHLD'},
    {name: 'Chemistry', size: 11, faculty: 'CHOD'},
]

const group = {name: 'M-18-01', size: 8, faculty:'MAUT'}

проверка
console.log(group.size)
console.log(audience.size)

//вывод всех аудиторий
function showAudience() {
    let i = 0;
    for(i; i < audience.length; i++) {
        console.log(audience[i])
    }
}
showAudience()

//вывод аудиторий указанного факультета
function currentAudience(a) {
    let i = 0;
    for(i; i < audience.length; i++) {
        if (a === 'IMIT') {
            console.log(a)
        } else {
            console.log('wrong')
        }
    }
}
currentAudience('IMIT')

//вывод подходящей аудитории

function suitAudience() {
    let i = 0;
    for(i; i < audience.length; i++) {
        if (audience[i].size >= group.size && audience[i].faculty === group.faculty) {
            console.log('This audience is fit for the group')
            // alert(audience[i].name)
        } else {
            console.log('didnt find the audience')
        }
    }
}

suitAudience()

// сортировка по количеству мест
  
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
audience.sort(byField('size'));
audience.forEach(item => console.log(item.size));

//сортировка по наименованию

function audienceName(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
audience.sort(audienceName('name'));
audience.forEach(item => console.log(item.name));