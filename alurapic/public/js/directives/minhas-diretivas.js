angular.module('minhasDiretivas', [])

  //nome da diretiva e função que retorna um ddo
  .directive('meuPainel', function(){

    var ddo = {};

    //restrição para a diretiva ser usada como
    //indica onde a diretiva é válida
    //https://docs.angularjs.org/guide/directive
    ddo.restrict = "AE";
    //A - attribute
    //E - element
    //C - comment

    //escopo isolado/privado - principio da reutilização
    //$scope é do controller esse 'scope' é da diretiva
    ddo.scope = {
      //@titulo, ou quando o nome da interface for igual ao atributo da diretiva >> '@'
      //'@' indica que titulo vai receber o valor passado pelo atributo da interface de comunicação
      //valor copiado como string >> @
      titulo : '@' //imagen001 ou imagen002
    };

    //manter o elemento filho(imagem) do html quando o angular manipula o DOM
    //para criar seus novos fragmentos (eliminando os elementos)
    //no ddo.template ou ddo.templateUrl, mecanismo de transclusão
    //inclusão de conteúdo de um documento/elemento em outro documento/elemento através de referência
    ddo.transclude = true;

    //e informar na diretiva(tag) que deve preservar o elemento <div>
    //filho, a diretiva do Angular >> ng-transclude

    //separação do template
    ddo.templateUrl = 'js/directives/meu-painel.html';

    //directive difinition object - DDO
    return ddo;

  })

  .directive('minhaFoto', function(){

    var ddo = {};
    ddo.restrict = "AE";
    ddo.scope = {
      titulo : '@',
      url : '@'
    };
    ddo.templateUrl = 'js/directives/minha-foto.html';
    return ddo;

  });

//restrict >> A
//<div meu-painel="">

//</div>

//restrict >> E
//<meu-painel titulo="imagen001"> //titulo >> interface de comunicação com a diretiva
                                //maneira como é passado o dado para dentro do escopo
                                //privado da diretiva
//</meu-painel>
//ou
//<meu-painel titulo="imagen002">
//</meu-painel>
