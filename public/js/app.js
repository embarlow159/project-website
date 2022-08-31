const weatherLocation = document.querySelector('form')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

weatherLocation.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = searchValue.value

    messageOne.textContent = 'Weather loading'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error){
            return messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})