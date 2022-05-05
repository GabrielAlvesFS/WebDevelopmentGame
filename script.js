//função que  a partir disso dependendo do botão clicado executa um código
function verifyAnswer(messageOnPrompt, numberOfOptions, rightAnswer, nextUrl, thisUrl) {
    //setar todas as outras questões que não forem verdadeiras pra um array que armazena o número das questões erradas
    let wrongQuestion= ['']
    //adicionando opções erradas no array
    for ( let i = 1; i <= numberOfOptions; i++) {
        //adicionando todas opções no array de respostas erradas
        wrongQuestion.push(i)
        //tirando a opção verdadeira do array de respostas erradas, ficando realmente as erradas
        //Se a resposta certa for igual a uma 'errada' no array, ela é a correta e é retirada do array
        if (rightAnswer == wrongQuestion[i]) {
            wrongQuestion[i] = undefined
        }

    }
    
   let playerChoice = prompt(`${messageOnPrompt}`)

    if ( playerChoice == rightAnswer){
        location.href=(nextUrl)
        console.log('parou no primeiro if')

    } else if( playerChoice != rightAnswer){
        for (let i = 1; i <= numberOfOptions; i++){

            if (wrongQuestion[i] == undefined){
        
            }else if( playerChoice == wrongQuestion[i]) {
                location.href=(thisUrl)

            }else if (playerChoice != wrongQuestion[i]) {
                alert('Opção Inválida, digite apenas o número da questão que você acha que está correta!') 
                break
            }
        }
    }       
}


// função pra tratar a url e remover o que vier antes da / que especifica o caminho nos arquivos
function urlTreatment(url) {
    let newUrl = ''
    let secondUrl = ''
    //pegar a url dps da / -> no caso apos https://
    if (url.includes('/')) {
        let barPosition = url.indexOf('/')
        barPosition = barPosition + 2
        for (let i = barPosition; i < url.length; i++) {
            newUrl = newUrl + url[i]
        }

        //pegar a url depois da / do dominio, por exemplo depois de dominio.com/(somente isso que eu necessito, para fazer comparações dos caminhos)
        barPosition = newUrl.indexOf('/')

        for (let i = barPosition; i < newUrl.length; i++) {
            secondUrl = secondUrl + newUrl[i]
        }
        return secondUrl
    }
}



//Função que pega o botão clicado, dependendo do botão que foi clicado vai executar uma coisa diferente, age em conjunto com a função buttonClicked
function whatButton (currentButton) {
    let actualUrl = window.location.href

    if (currentButton == 0){
        //tratando a url
        urlTreatment(actualUrl)

        if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/characters.html' ) {
            verifyAnswer('Você tem certeza que deseja seguir está trilha?\n  Digite 1 para Sim!\n  Digite 2 para não!', '2' , '1', './html-character/level01.html', './characters.html')

        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/html-character/level01.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02\n  Digite 3 para Opção 03\n  Digite 4 para Opção 04', '4' , '3', './level02.html', '../win-lose/lose.html')

        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/html-character/level02.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02\n  Digite 3 para Opção 03\n  Digite 4 para Opção 04', '4' , '4', './level03.html', '../win-lose/lose.html')

        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/html-character/level03.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02', '2' , '2', '../win-lose/win.html', '../win-lose/lose.html')
          

            
        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/css-character/level01.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02\n  Digite 3 para Opção 03\n  Digite 4 para Opção 04', '4' , '3', './level02.html', '../win-lose/lose.html')

        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/css-character/level02.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02\n  Digite 3 para Opção 03\n  Digite 4 para Opção 04', '4' , '1', './level03.html', '../win-lose/lose.html')

        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/css-character/level03.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02\n  Digite 3 para Opção 03\n  Digite 4 para Opção 04', '4' , '1', '../win-lose/win.html', '../win-lose/lose.html')


            
        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/js-character/level01.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02\n  Digite 3 para Opção 03\n  Digite 4 para Opção 04', '4' , '3', './level02.html', '../win-lose/lose.html')

        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/js-character/level02.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02\n  Digite 3 para Opção 03\n  Digite 4 para Opção 04', '4' , '2', './level03.html', '../win-lose/lose.html')

        } else if ( urlTreatment(actualUrl) == '/WebDevelopmentGame/html/characters/js-character/level03.html' ){
            verifyAnswer('Qual será a sua resposta?\n  Digite 1 para Opção 01\n  Digite 2 para Opção 02', '2' , '2', '../win-lose/win.html', '../win-lose/lose.html')
          
            
        }

        
    } else if (currentButton == 1) {
        verifyAnswer('Você tem certeza que deseja seguir está trilha?\n  Digite 1 para Sim!\n  Digite 2 para não!', '2' , '1', './css-character/level01.html', './characters.html')

    } else if (currentButton == 2){
        verifyAnswer('Você tem certeza que deseja seguir está trilha?\n  Digite 1 para Sim!\n  Digite 2 para não!', '2' , '1', './js-character/level01.html', './characters.html')

    }
}


//função para identificar o botão clicado
function buttonClicked () {
    let buttons = document.getElementsByTagName("button")  // pega todos buttons da pagina
    let buttonsCount = buttons.length // total de buttons na pagina

    for ( let i = 0; i < buttonsCount; i++) {
        
        //função que capta qual botão foi clicado
        buttons[i].onclick = function(){

            currentButton = i
            //Função que pega o botão clicado, dependendo do botão que foi clicado vai executar uma coisa diferente
            whatButton(currentButton)

        }
    }
}  

buttonClicked()