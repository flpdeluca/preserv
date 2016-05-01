var app = angular.module('starter.controllers',[])
 
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
    function ($scope, $location) 
    {
        
        
 
       
    });