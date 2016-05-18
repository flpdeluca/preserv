angular.module('starter.services', [])

.service('usuarioService', function($http)
	{
		var _idUsuario;
		var _nome;
		var _sobrenome;
		var _sexo;
		var _nascimento;
		var _email;
		var _senha;
		//var _publicacao = {};


		this.getidUsuario = function () 
		{
			return __idUsuario;
		}

		this.getNome = function () 
		{
			return _nome;
		}

		this.setNome = function (nome) 
		{
			_nome = nome;
		}
		
		this.getSobrenome = function () 
		{
			return _sobrenome;
		}

		this.setSobrenome = function (sobrenome) 
		{
			_sobrenome = sobrenome;
		}

		this.getNascimento = function () 
		{
			return _Nascimento;
		}

		this.setNascimento = function (nascimento) 
		{
			_nascimento = nascimento;
		}


		this.getTodos = function () 
		{
			return $http(
					{
						method: "GET",
						url: "http://localhost/teste/efg.php",
					})
		}

		this.getUsuario = function (id) 
		{
			

			return $http(
					{
						method: "POST",
						url: "http://localhost/teste/servPreserv.php/usuario/",
						data: {objeto: id}
					})
		}




	});




