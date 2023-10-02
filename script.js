/**/
function getTimeAndSetTheBackground(){
    /*  
        Se for entre 06:00 e 17:59 fundo será claro
        Se for entre 18:01 e 05:59 fundo será escuro
        funcao chamada ao carregar a paginas
    */
    let date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    //console.log('Hora: '+hour+':'+minute+' - bacground: ');
    //objeto = document.getElementById('');
    if (inRange(hora, 6, 17) && inRange(minute,1,59)){
        console.log('background dia');
    } else {
        console.log('background noite');
    }
    
}

function ChangeBackground(){
    /*
        Troca a imagem de fundo da página, ao deslizar o botao slider
    */
   objeto = document.getElementById('btnSlider1').value;
    if (objeto == 1){
        console.log('background dia');
    } else {
        console.log('background noite');
    }
        
}