angular.module('starter.services', [])

.service('usuarioService', function($http)
	{
		var servidor;

		this.inserirUsuario = function(cadst)
		{
		
			$http(
			{	
				method: 'POST',
				url: servidor,
				data: cadst
			})
			.then(function successCallback(response)
			{
				    return true;
			}, 
			function errorCallback(response)
			{
				    return false;.
			});
		}

		this.atualizarUsuario = function(cadst)
		{
		
			$http(
			{	
				method: 'PUT',
				url: servidor,
				data: cadst
			})
			.then(function successCallback(response)
			{
				    return true;
			}, 
			function errorCallback(response)
			{
				    return false;.
			});
		}
		
		this.deletarUsuario = function(cadst)
		{
		
			$http(
			{	
				method: 'DELETE',
				url: servidor,
				//data: cadst
			})
			.then(function successCallback(response)
			{
				    return true;
			}, 
			function errorCallback(response)
			{
				    return false;.
			});
		}

		this.todosUsuarios = function()
		{
		
			$http(
			{	
				method: 'GET',
				url: servidor,
				//data: cadst
			})
			.then(function successCallback(response)
			{
				    return {response};
			}, 
			function errorCallback(response)
			{
				    return false;.
			});
		}


	});
