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
    		usuarioService.getUsuario(1)
            .then
            (function (data) 
            {
                console.log(data);
            }, function (error) 
                {
                    console.log(error);
                }
            )

            //usuarioService.setNome("Lhubinho");



            //console.log(usuarioService.getUsuario("1"));

     	}

       
    })