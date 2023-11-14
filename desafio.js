
let nicknameXp = ["PhoenixEhUmBomAgente2023" , -333200]
let nivel = "sem nivel"

const primeiraMensagem = "O Herói "
const segundaMensagem = " está no nível "

if (nicknameXp[1] <= 0){
    nivel = "Papel '-' "
}else if (nicknameXp[1] > 0 && nicknameXp[1] <= 1000) {
    nivel = "Ferro"
}else if (nicknameXp[1] >1000 && nicknameXp[1] <= 2000) {
    nivel = "Bronze"
}else if (nicknameXp[1] >2000 && nicknameXp[1] <= 4000) {
    nivel = "Prata"
}else if (nicknameXp[1] >4000 && nicknameXp[1] <= 5000) {
    nivel = "Ouro"
}else if (nicknameXp[1] >5000 && nicknameXp[1] <= 6000) {
    nivel = "Platina"
}else if (nicknameXp[1] >6000 && nicknameXp[1] <= 7000) {
    nivel = "Dima"
}else if (nicknameXp[1] >7000 && nicknameXp[1] <= 8000) {
    nivel = "Ascendente"
}else if (nicknameXp[1] >8000 && nicknameXp[1] <= 10000) {
    nivel = "Imortal"
}else {
    nivel = "Radiante"
}

console.log(primeiraMensagem + nicknameXp[0] + segundaMensagem + nivel + "!!!")