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
        //var cadastro = $scope.cadastro ={};
        var usu =
        {
            id: 1,
            nome: "Baboon"
        };

        $scope.cadastroOk = function()
    	{
    		usuarioService.getUsuario(usu)
            .then
            (function (data) 
            {
                console.log(data);
            }, function (error) 
                {
                    console.log(error);
                }
            )

     	}

       
    })