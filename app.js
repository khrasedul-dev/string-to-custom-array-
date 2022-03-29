const string = 'button1 - https://google.com && button2 - https://google.com && button3 - https://google.com && button4 - https://google.com && button5 - https://google.com  && button6 - https://google.com  '

const p1 = string.split('&&')

let a = []
let a1 = []

const p2 = p1.map((p1)=>{
    return p1.split('-')
}).map(button => {
    return {
        text: button[0].trim(),
        url: button[1].trim()
    }
})

const l1 = p2.length

p2.forEach((item,i)=>{
    
    a1.push(item)
    
    if (a1.length == 2) {
        a.push(a1)
        a1 = []
    }
    if (!(p2.length % 2) == 0) {  
        if (p2.length == i+1) {
            const lastItem = [item]
        a.push(lastItem)
        }
    }
})

console.log(a)



