//core do angular - modulo principal da aplicacao
//array de modulos que esse modulo principal pode depender
//quando não depende de outro modulo >> cria modulo com array vazio >> [] não deve ser omitido!
//registrado/inicializando na tag <html> do index.html

//alurapic passa a depender do modulo >> minhasDiretivas

angular.module('alurapic', ['minhasDiretivas']);
