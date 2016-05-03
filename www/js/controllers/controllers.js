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
    function ($scope, $location, cadastroService) 
    {
        var cadastro = $scope.cadastro ={};

        $scope.cadastroOk = function()
    	{
    		
            //$scope.vazio ="assertive";

            for (var i = cadastro.length - 1 ; i >= 0; i--) 
            {
                if (cadastro[i]== null) 
                {
                    
                    //return null;

                    cadastro[i]. = 'assertive';

                }
                 
            }
    	}

        /*if (cadastroService.verificarNulos(cadastro)== null) 
            {
                console.log("Tinha campo nulo!");

            }*/

            //var a = cadastroService.verificarNulos(cadastro);

            //console.log(a);



 
       
    });