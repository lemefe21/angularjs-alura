//não estamos criando um controller com um modulo novo
//estamos criando oo controller para o modulo alurapic já existente
angular.module('alurapic').controller('FotosController', function($scope) {


  //variavel privada, só existe dentro desse escopo
  //a view precisa acessar esse objeto
  /*var foto = {
    titulo: "Leões",
    url: "http://www.fundosanimais.com/Minis/leoes.jpg"
  };*/

  //controller pode receber $scope via injeção de dependencia pelo Angular
  //$scope >> POJO
  //controller disponibiliza dados para a View através do $scope
  $scope.foto = {
    titulo: "Leões",
    url: "http://www.fundosanimais.com/Minis/leoes.jpg"
  };

});
