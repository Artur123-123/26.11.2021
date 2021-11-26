function download() {
    const haslo = document.getElementById('haslo').value
    console.log(haslo)
}

// function password() {
//     const hasloPoprawnosc = document.getElementById('haslo').value
//     if (hasloPoprawnosc.length < 6) {
//         document.getElementById('par').innerText = 'Dobre hasło'
//     } else(hasloPoprawnosc.length > 7 && hasloPoprawnosc.length < 3) {
//         document.getElementById('par').innerText = 'Średnie hasło'
//     }
//     console.log(hasloPoprawnosc)
// }

function password() {
    const hasloPoprawnosc = document.getElementById('haslo').value
    if (hasloPoprawnosc.length > 6) {
        document.getElementById('par').innerText = 'Dobre hasło'
    }
    if (hasloPoprawnosc.length > 3 && hasloPoprawnosc.length < 7) {
        document.getElementById('par').innerText = 'Średnie hasło'
    }
    if (hasloPoprawnosc.length < 4) {
        document.getElementById('par').innerText = 'Słabe hasło'
    }
}

// function weakPass(hasloPoprawnosc) {
//     if (hasloPoprawnosc.length < 4) {
//         document.getElementById('par').innerText = 'Słabe hasło'
//     }
// }