angular.module('minhasDiretivas', [])
  .directive('meuPainel', function(){

    var ddo = {};

    //restrição para a diretiva ser usada como
    ddo.restrict = "AE";
    //A - attribute
    //E - element
    //C - comment

    //escopo isolado/privado - principio da reutilização
    //$scope é do controller esse 'scope' é da diretiva
    ddo.scope = {
      //@titulo, ou quando o nome da interface for igual ao atributo da diretiva >> '@'
      //'@' indica que titulo vai receber o valor passado pelo atributo da interface de comunicação
      //como string
      titulo : '@' //imagen001 ou imagen002
    };

    //manter o elemento filho(imagem) do html onde o angular manipula o DOM
    //no ddo.template
    ddo.transclude = true;

    //e na marcação do template informa na tag que recebe o elemento filho
    //ng-transclude, dentro de meu-painel.html utilizando templateUrl

    //separação do template
    ddo.templateUrl = 'js/directives/meu-painel.html';

    //directive difinition object - DDO
    return ddo;

  });

//restrict >> E
//<div meu-painel="">

//</div>

//restrict >> A
//<meu-painel titulo="imagen001"> //titulo >> interface de comunicação com a diretiva
                                //maneira como é passado o dado para dentro do escopo
                                //privado da diretiva
//</meu-painel>
//ou
//<meu-painel titulo="imagen002">
//</meu-painel>
