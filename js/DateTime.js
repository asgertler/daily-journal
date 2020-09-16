const updateDateTime = () => {
    let now = new Date()

    let date = now.getDay() + '.' + now.getMonth() + '.' + now.getFullYear().toString().substr(-2)
    document.getElementById('date').innerHTML = date

    let time = now.getHours() + ':' + now.getMinutes()
    document.getElementById('time').innerHTML = time

    setTimeout(updateDateTime, 1000)
}

export const DateTime = () => {
    updateDateTime()
}