var app = angular.module('starter.controllers',['starter.services'])
 
app.controller('loginController',
    function ($scope, $location) 
    {
        $scope.x="PORRA";
        $scope.cadastro= function()
        {
        	$location.path('/cadastro');
        }
       
    });


app.controller('cadastroController',
    function ($scope, $location, usuarioService) 
    {
        var cadastro = $scope.cadastro ={};

        $scope.cadastroOk = function()
    	{
    		

            //cadastroService.inserirUsuario(cadastro);

            console.log(cadastroService.inserirUsuario(cadastro));
     	}

       
    })