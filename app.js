const button = document.getElementById('button');

button.addEventListener('click', () => check());

var check = function () {
    if (document.getElementById('password').value ==
        document.getElementById('confirmPassword').value) {
        document.getElementById('password').classList.remove('error');
        document.getElementById('confirmPassword').classList.remove('error');
        console.log(document.getElementById('password').value)
    } else {
        document.getElementById('password').style.color = 'red';
        document.getElementById('confirmPassword').style.color = 'red'
        console.log('wahh')
    }
}
