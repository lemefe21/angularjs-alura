angular.module('minhasDiretivas', [])
  .directive('meuPainel', function(){

    var ddo = {};

    //restrição para a diretiva ser usada como
    ddo.restrict = "AE";
    //A - attribute
    //E - element
    //C - comment

    //escopo isolado/privado - principio da reutilização
    //$scope é do controller esse scope é da diretiva
    ddo.scope = {
      //@titulo, ou quando o nome da interface for igual a propriedade da diretiva >> '@'
      titulo : '@'
    }



    //directive difinition object - DDO
    return ddo;

  });

//restrict >> E
//<div meu-painel="">

//</div>

//restrict >> A
//<meu-painel titulo="">  //titulo >> interface de comunicação com a diretiva
                          //maneira como é passado o dado para dentro do escopo
                          //privado da diretiva
//</meu-painel>
