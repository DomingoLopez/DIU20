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
                goal2: "El alquiler del piso donde vive le supone un gasto considerable. Decide preguntar en la inmobiliaria donde trabaja si hay algún piso disponible",
                touch2: "en persona",
                feel2: "4",
                con2: "Los únicos pisos que dispone la inmobiliaria son destinados a venta, no alguiler",
                ima2: "cartoon-speaking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Busca en internet webs de pisos compartidos. No hace una búsqueda activa, si no que entra en la primera web que encuentra",
                touch3: "ordenador(habitoom)",
                feel3: "3",
                con3: "Teme no poder encontrar un piso con las características que él necesita",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra pisos en las afueras de Granada (no le gusta la congestión de la ciudad), pero disponen de habitaciones muy pequeñas según las fotos.",
                touch4: "ordenador(habitoom)",
                feel4: "2",
                con4: "Busca opciones no tan alejadas del centro, sabiendo que seguramente sean más caros. Los filtros de la web no son nada intuitivos ",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra 4 opciones que encajan en sus preferencias, rodeadas de zonas verdes, pero muy alejadas de su trabajo",
                touch5: "ordenador(habitoom)",
                feel5: "3",
                con5: "Piensa que sin sacrificio no hay recompensa, y decide contactar en el anuncio de la web para concertar una cita para ver el piso",
                ima5: "cartoon-PCSurprised.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Contrariamente a sus pensamientos, las personas que habitaban el piso resultaron ser muy agradables y limpias",
                touch6: "en persona",
                feel6: "4",
                con6: "Consigue establecerse en ese piso. Le espera una temporada de ahorro intensivo para poder cumplir su sueño de montar la tienda de Motos",
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
                touch2: "portatil (Habitoom)",
                feel2: "5",
                con2: "debe avisar a sus amigos para ver si a todos les gusta la opcion y les viene bien",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Sus amigos deben confirmar que van a venir, les pregunta",
                touch3: "móvil (WhatsApp)",
                feel3: "4",
                con3: "Hay unos pocos que no pueden ir por trabajo o por tener otros planes, pero la mayoria si (pasan unos dias)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Volver a encontrar la habitacion en la pagina web",
                touch4: "ordenador (Habitoom)",
                feel4: "3",
                con4: "Se da cuenta que mientras actualizaba la pagina, la habitacion ha recibido dos nuevos favoritos de otros usuarios",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reservar la habitacion",
                touch5: "ordenador (Habitoom)",
                feel5: "2",
                con5: "No consigue encontrar el boton de reserva",
                ima5: "cartoon-PChard.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "No ha conseguido reservar, le han quitado la habitacion",
                touch6: "ordenador (escritorio)",
                feel6: "1",
                con6: "el contacto con el propietario estaba del mismo color que el resto de texto y no estaba resaltado con ningun boton ni nada llamativo",
                ima6: "cartoon-PCangry.png",
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



