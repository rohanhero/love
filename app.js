const yourName = document.querySelector('#yourName')
const theirName = document.querySelector('#theirName')
document.querySelector('#calc').addEventListener('click', calculate)
const output = document.querySelector('#output')
const singleGuys = ['salman', 'hari', 'ram']


function calculate() {
    const yourNamevalue = yourName.value
    const theirNamevalue = theirName.value
    if (yourNamevalue == '' || theirNamevalue == '') {
        clearInput()
        return alert('Plese enter both names')
    }
    // if (yourNamevalue.toLowerCase() == 'rohan' || theirNamevalue.toLowerCase() == 'ishika') {
    //     clearInput()
    //     return output.innerText = "Wow! They are made for eachother"
    // }
    else if (singleGuys.includes(yourNamevalue.toLowerCase()) || singleGuys.includes(theirNamevalue.toLowerCase())) {
        clearInput()
        return output.innerText = "Single"
    }
    const lovepercent = parseInt(Math.random() * 100)
    console.log(lovepercent)
    //    console.log(yourNamevalue, theirNamevalue)
    output.innerText = yourNamevalue + ' and ' + theirNamevalue + ' are in ' + lovepercent + ' % love '
    clearInput()

}
function clearInput() {
    yourName.value = ''
    theirName.value = ''
}