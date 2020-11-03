/* animação de linhas no background */
const ul_lines =document.querySelector("ul.lines");

    /* Criando mais linhas */
    for(let i=0; i<30 ;i++ ){

     /*criando elemento li*/
    const li = document.createElement("li");
    const random =(min,max)=> Math.random()*(max-min)+min;

    /* Criando o style dinamicos para a animação */

    const size = Math.floor(random(50,15));
    const position =random(1,99);
    const delay =random(5,0.1);
    li.style.height =`${size}px`;
    li.style.bottom=`-${size}px`;
    li.style.left =`${position}%`;
    li.style.animationDelay=`${delay}s`;

    /* Inserindo o elementro dentro da tag ul lines*/
     ul_lines.appendChild(li);
    }