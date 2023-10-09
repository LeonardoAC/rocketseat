/**/
function getTimeAndSetTheBackground(){
    /*  
        Se for entre 06:00 e 17:59 fundo será claro
        Se for entre 18:00 e 05:59 fundo será escuro
        funcao chamada ao carregar a paginas
    */
    
    // Pega a hora local
    let date = new Date();
    const hour = date.getHours();
    console.log('Hora: '+hour);
    if ( hour >=6 && hour <=17 ){
        console.log('getTimeAndSetTheBackground: dia');
        ChangeBackground('dia');
    } else {
        console.log('getTimeAndSetTheBackground: noite');
        ChangeBackground('noite');
    }
}

function ChangeBackground(argDiaOuNoite){
    /* Troca a imagem de fundo da página, ao deslizar o botao slider */
    let btnSlider = document.getElementById('btnSlider1');
    let body = document.querySelector('body');
    let picture = document.getElementById('imgAvatar');
    
    if(argDiaOuNoite == 'dia'){
        //console.log('ChangeBackground: argumento dia');
        btnSlider.checked = true;
        body.classList.remove('fundoNoite');
        body.classList.add('fundoDia');
        picture.src = "assets/avatar-light.png";
        
    }else{
        //console.log('ChangeBackground: argumento noite');
        btnSlider.checked = false;
        body.classList.remove('fundoDia');
        body.classList.add('fundoNoite');
        picture.src = "assets/avatar.png";
    }
}

function getSliderPosition(){
   /* Pega a posicao do botao slider (checkbox) */ 
   objeto = document.getElementById('btnSlider1');
    if (objeto.checked == true){
        ChangeBackground('dia');
        //console.log('Mexeu no slider: chamou c/ argumento dia...');
    } else {
        ChangeBackground('noite');
        //console.log('Mexeu no slider: chamou c/ argumento noite...');
    }
        
}