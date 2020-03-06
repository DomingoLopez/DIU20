/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Jose Antonio Carrasco",
                Photo: "EdWardKim.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere ahorrar para montar su tienda de Motos.",
                touch1: "Cuenta Bancaria",
                feel1: "2",
                con1: "Ve sus recibos y pagos para ver cómo puede ahorrar algo al mes",
                ima1: "cartoon-PCcrying.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "El alquiler del piso donde vive le supone un gasto considerable. Decide buscar en Internet para encontrar un piso a menor precio",
                touch2: "ordenador",
                feel2: "3",
                con2: "Encuentra varias webs de alquiler de pisos. Prueba en la primera que le aparece",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Usa el buscador de la web para encontrar un piso en las afueras, no le gusta la congestión del centro",
                touch3: "ordenador",
                feel3: "3",
                con3: "Está preocupado por el tiempo que tardaría en desplazarse a su trabajo",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra pisos en las afueras de Granada, pero dispone de habitaciones muy pequeñas según las fotos, y éstas no son de buena calidad",
                touch4: "ordenador",
                feel4: "2",
                con4: "Busca opciones no tan alejadas del centro",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra 4 opciones que encajan en sus preferencias, rodeadas de zonas verdes, pero muy alejadas de su trabajo",
                touch5: "ordenador",
                feel5: "3",
                con5: "Piensa que quizás le convenga resignarse a vivir en un piso compartido, lo cual le supondría un ahorro total",
                ima5: "cartoon-PCSurprised.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue encontrar un piso a las afueras y cerca de su trabajo, pero compartido. Se siente aliviado y cree que ha sido una buena decisión, a pesar de tener que empezar a convivir con más gente.",
                touch6: "en persona",
                feel6: "4",
                con6: "Se pone en contacto con uno de los nuevos compañeros de piso, y quedan ese día para que le muestre el piso y su habitación",
                ima6: "cartoon-speaking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Luis Fernandez",
                Photo: "p1.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere irse de viaje con sus amigos",
                touch1: "en persona",
                feel1: "4",
                con1: "encontrar el lugar al que van a viajar, dando prioridad a aquellos que son mas baratos",
                ima1: "cartoon-teamthinking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Encuentra una buena oferta en Fuengirola para unas cinco semanas para veranear alli",
                touch2: "portatil",
                feel2: "5",
                con2: "debe avisar a sus amigos para ver si a todos les gusta la opcion y les viene bien",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Sus amigos deben confirmar que van a venir, les pregunta",
                touch3: "móvil",
                feel3: "4",
                con3: "Hay unos pocos que no pueden ir por trabajo o por tener otros planes, pero la mayoria si (pasan unos dias)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Volver a encontrar la habitacion en la pagina web",
                touch4: "ordenador",
                feel4: "3",
                con4: "Se da cuenta que mientras actualizaba la pagina, la habitacion ha recibido dos nuevos favoritos de otros usuarios",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reservar la habitacion",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "No consigue encontrar el boton de reserva",
                ima5: "cartoon-PChard.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "No ha conseguido reservar, le han quitado la habitacion",
                touch6: "ordenador",
                feel6: "1",
                con6: "el contacto con el propietario estaba del mismo color que el resto de texto y no estaba resaltado con ningun boton ni nada llamativo",
                ima6: "cartoon-PCangry.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



