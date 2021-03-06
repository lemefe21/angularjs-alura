//não estamos criando um controller com um modulo novo
//estamos criando oo controller para o modulo alurapic já existente
angular.module('alurapic').controller('FotosController', function($scope, $http, fotoService) {

  //variavel privada, só existe dentro desse escopo
  //a view precisa acessar esse objeto
  /*var foto = {
    titulo: "Leões",
    url: "http://www.fundosanimais.com/Minis/leoes.jpg"
  };*/

  //controller pode receber $scope via injeção de dependencia pelo Angular
  //$scope >> POJO
  //controller disponibiliza dados para a View através do $scope

  //$http >> responsavel do angular por requisições Ajax

  /*$scope.fotos = [
    {
      titulo: "Leão 1",
      url: "http://www.fundosanimais.com/Minis/leoes.jpg"
    },
    {
      titulo: "Leão 2",
      url: "http://www.fundosanimais.com/Minis/leoes.jpg"
    },
    {
      titulo: "Leão 3",
      url: "http://www.fundosanimais.com/Minis/leoes.jpg"
    }
  ];*/

  //http://localhost:3000/v1/fotos
  $scope.fotos = [];
  $scope.mensagem = fotoService.dataObj;

  //integração com backend

  //requisição assincrona, se for executada >>
  //utilizando promise then temos acesso aos dados da requisição
  /*var promise = $http.get('v1/fotos');
  promise.then(function(retorno){
    $scope.fotos = retorno.data;
  }).catch(function(error){
    console.log("Erro ao carregar as fotos... " + error);
  });*/

  //AE {{ }}, somente lê do scope e exibe na tela >> unidirecional

  //no filtro é necessario uma comunicação bidirecional >> ng-model
  //conceito de two-way data binding
  $scope.filtro = '';

  //trabalha com promise por debaixo dos panos
  $http.get('v1/fotos').success(function(fotos){
    console.log(fotos);
    $scope.fotos = fotos;
  }).error(function(erro){
    console.log(error);
  });

});
