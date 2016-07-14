//core do angular - modulo principal da aplicacao
//array de modulos que esse modulo principal pode depender
//quando não depende de outro modulo >> cria modulo com array vazio >> [] não deve ser omitido!
//registrado/inicializando na tag <html> do index.html

//alurapic passa a depender do modulo >> minhasDiretivas

angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])

  .service('fotoService', function(){

    var data = {}; //private variable

    this.dataObject = data; //public API

  })

  //configura rotas que rodam no client >> $routeProvider
  .config(function($routeProvider, $locationProvider){

    //modo html5 de rotas do Angular
    //browser deve aceitar
    //backend deve estar preparado assim como o server
    $locationProvider.html5Mode(true);
    //faz um fallback caso browser não aceite, voltando a trabalhar com /#/

    //http://localhost:3000/#/fotos
    //2_parametro objeto javascript
    $routeProvider.when('/fotos', {

      // na url >> /#/ >> interceptada pelo angular

      templateUrl: 'partials/principal.html',
      //controlador associado com a parcial
      controller: 'FotosController'
      //já basta para carregar a página /#/fotos

    });

    $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });

    //caso não foi localizada a rota informada na url
    $routeProvider.otherwise({ redirectTo: '/fotos' });

  });
