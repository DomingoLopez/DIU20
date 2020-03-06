/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Jose Antonio Carrasco",
				Photo: "EdWardKim.jpg",
				Quote: "La vida es maravillosa si sabes aprovecharla",
				Age: 45,
				Occupation: "Comercial Inmobiliario",
				Family: "Soltero",
				Location: "Granada (Guadix)",
				Character: "Su pasión es el Motociclismo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Ahorrar lo suficiente para crear su propia tienda de Motociclismo", "Encontrar una pareja estable"],
				Frustrations: ["Odia la congestión de la ciudad.", "Le gustaría disponer de más tiempo libre para poder pasear con su Moto"],
				Bio: "Nació en Madrid pero se vino a Granada por el buen clima y sus gentes. Empezó a trabajar en una inmobiliaria como comercial y ya lleva 10 años dedicado a ello. Su círculo de amigos es discreto, a pesar de ser una persona muy extrovertida debido a su trabajo. Intenta abstraerse de las preocupaciones gracias a la lectura de Ciencia Ficción y su pasión por las Motos",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Lleva tiempo pensando en dejar el trabajo para montar su propia tienda de Motocicletas, pero aún le queda por ahorrar un poco. Además, el pensar en ser dueño de su propia empresa le produce estrés, pero es algo que sabe que su mente y cuerpo necesitan para tener éxito en lo que desempeñe.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Luis Fernandez",
				Photo: "p1.jpg",
				Quote: "Believe in yourself",
				Age: 23,
				Occupation: "Estudiante de Geologia y dependiente de una tienda de ropa",
				Family: "Con pareja desde hace 3 años",
				Location: "Madrid",
				Character: "Le gusta aprovechar el tiempo y priorizar sus tareas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 8 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 7 }
				], 
				Goals: ["Trabajar de lo que le gusta", "Pasar mas tiempo con su pareja", "Independizarse"],
				Frustrations: ["Los clientes de la tienda no suelen ser lo amables que él quisiera", "Tendra que hacer unas oposiciones para poder ser profesor y no está seguro de ser capaz de conseguirlo"],
				Bio: "Trabaja para poder costearse sus gastos. Vive con sus padres. Lleva un año contratado en la tienda. Conoció a su grupo de amigos en la universidad",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Busca un par de lugares para poder hacer un viaje con sus amigos y otro con su pareja",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])