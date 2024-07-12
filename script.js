function changeColor(){
    if (document.getElementById('red').className === 'light light-red') {
        document.getElementById('red').className = 'light light-off'
        document.getElementById('green').className = 'light light-green'
    } else if (document.getElementById('green').className === 'light light-green') {
        document.getElementById('yellow').className = 'light light-yellow'
        document.getElementById('green').className = 'light light-off'
    } else {
        document.getElementById('red').className = 'light light-red'
        document.getElementById('yellow').className = 'light light-off'
    }
}