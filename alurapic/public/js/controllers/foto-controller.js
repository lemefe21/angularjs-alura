// colocar o [] >> indica criação de um novo modulo
angular.module('alurapic').controller('FotoController', function($scope){

  $scope.foto = {};

  //função do submit do form
  $scope.submeter = function(){
    console.log($scope.foto);
    //Object {titulo: "Leão", url: "http://www.fundosanimais.com/Minis/tubaroes.jpg", descricao: "teste"}
  };

});
