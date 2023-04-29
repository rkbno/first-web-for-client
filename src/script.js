

function section(){

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
}

section();

function carrossel(){

    const botoes = document.querySelectorAll('.botao');
    const imgs = document.querySelectorAll('.img');
    
    
    botoes.forEach((botao, i) => {
        botao.addEventListener('click', function(){
            desativarBotao();
    
            marcarBotaoAtivo(botao);
   
            esconderImagemAtiva();

            mostrarImagem(i);
        });
    });

    function desativarBotao(){
        const botaoRemov = document.querySelector('.on');
        botaoRemov.classList.remove('on');
    };
    
    function marcarBotaoAtivo(botao){
        botao.classList.add('on');
    };
    
    function esconderImagemAtiva(){
        const esconderImg = document.querySelector('.ativo');
        esconderImg.classList.remove('ativo');
    };
    
    function mostrarImagem(i){
        imgs[i].classList.add('ativo');
    };
};

carrossel();
    
    
    
    
    