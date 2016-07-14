// colocar o [] >> indica criação de um novo modulo
angular.module('alurapic').controller('FotoController', function($scope, $http, $location, fotoService){

  $scope.foto = {};
  fotoService.dataObj = {};

  //função do submit do form
  $scope.submeter = function(){
    //console.log($scope.foto);
    //dados informados no input
    //Object {titulo: "Leão", url: "http://www.fundosanimais.com/Minis/tubaroes.jpg", descricao: "teste"}

    if($scope.formulario.$valid){

      //definido no servidor
      $http.post('v1/fotos', $scope.foto)
        .success(function(){
          $scope.foto = {};
          //$scope.mensagem = 'Foto cadastrada com sucesso!';
          fotoService.dataObj = 'Foto cadastrada com sucesso!';
          $location.path('/fotos');
        })
        .error(function(erro){
          $scope.mensagem = 'Não foi possível incluir a foto...';
        });

    };

  };

});
