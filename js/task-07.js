const inputRangeRef = document.querySelector('#font-size-control')
 console.log(inputRangeRef)
 const textRef = document.querySelector('span#text')
console.log(textRef)

// refs = {
//     inputRangeRef: document.querySelector('#font-size-control'),
//     textRef: document.querySelector('#text'),
// }
const changeFontSizeText = inputRangeRef.addEventListener('input', onChangeSizeText)

function onChangeSizeText(event) {
    const fontSize = Number(event.currentTarget.value)
    console.log(fontSize)
    textRef.style.fontSize=`${fontSize}px`
}
