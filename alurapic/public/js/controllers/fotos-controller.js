//não estamos criando um modulo novo
angular.module('alurapic').controller('FotosController', function($scope) {


  //variavel privada, só existe dentro desse escopo
  //a view precisa acessar essa foto
  /*var foto = {
    titulo: "Leões",
    url: "http://www.fundosanimais.com/Minis/leoes.jpg"
  };*/

  //$scope dependecia do controller, injetada pela Angular
  //$scope - POJO
  //disponibiliza dados para a minha View
  $scope.foto = {
    titulo: "Leões",
    url: "http://www.fundosanimais.com/Minis/leoes.jpg"
  };

});
