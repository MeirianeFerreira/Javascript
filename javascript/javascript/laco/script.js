//while (enquanto)
let x = 1;

while(x<=10){
    console.log(x);
    x = x + 1;
}

let y = 15;
while(y >= 5){
    console.log(x);
    y--; //y=y-1
}

//Do While (fazer enquanto)
let m = 15;

do {
    console.log(`${m}`);
    m = m + 2; //aqui m passa a ser 17 e continua o laço até chegar a condição de while
    
} while( m <= 21);

//for ( )
for ( i = 0; i <= 5; i++){//i++ é a mesma coisa de i+1
    console.log(i)
}