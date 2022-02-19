//let nota = (89);

function notaFinal (nota){
    
    // posso criar uma variável para cada nota A,B,C,D,E e colocar a condicão dentrdo da variável
    if (nota >= 90 && nota <= 100){
        console.log('Sua nota é: A')
    } else if (nota  >= 80 && nota <= 89 ){
        console.log('Sua nota é: B')
    }else if (nota  >= 70 && nota <= 79 ){
        console.log('Sua nota é: C')
    }else if (nota  >= 60 && nota <= 69 ){
        console.log('Sua nota é: D')
    }else if (nota  < 60 && nota >= 0 ){
        console.log('Sua nota é: F')
    }else{
        console.log('NOTA INVÁLIDA')
    }
}
notaFinal(10)
notaFinal(65)
notaFinal(72)
notaFinal(101)
notaFinal(-1)
notaFinal(85)
notaFinal(93)
