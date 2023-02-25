var nome = (prompt("Qual Seu Nome?"))

alert("Bem vindo a Loja Leftei, " + nome)


let t = document.getElementById("section-titulo")

t.addEventListener("mouseover", mouseOver)
t.addEventListener("mouseout", mouseout)

function mouseOver(){
    this.innerHTML = "Também fazemos peças à gosto do cliente"
    this.style.backgroundColor = "red"
}
function mouseout(){
    this.innerHTML = "Algumas variedades de peças que você encontra aqui na Leftei"
    this.style.backgroundColor = "black"
}