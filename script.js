document.addEventListener('DOMContentLoaded', function() {
    // Datos de especies en peligro de extinción con SVGs
    const speciesData = [
        {
            id: 1,
            name: "Comandante Carlos Fonseca Amador",
            img : "img/cf.jpg",
            description: "Nace el 23 de Junio del año 1936, fue un profesor, político, escritor .fue asesinado el 8 de Noviembre  en combate en 1976.",
            status: "FUNDADOR DEL FSLN, paso a la inmortalidad el 8 de Noviembre de 1976",
            Frace : "Enseñales a leer"
        },
        {
            id: 2,
            name: "Comandante Tomas Borge Martienez ",
            img : "img/tm.jpg",
            description: "Comandante : Tomás Borge Martínez nació en Matagalpa, el 13 de agosto de 1930. Su padre, Tomás Borge Delgado, fue lugarteniente de las tropas de Augusto César Sandino que lucharon contra la intervención de los Estados Unidos de América en Nicaragua desde 1926 hasta 1932.",
            status: " FUNDADOR DEL FSLON : Paso a la Inmortalidad 30 de Abril del año 2012",
            Frace: "!Implacable en el combate, Generosos en las Victoria!." 
        },
        {
            id: 3,
            name: "Comandante Silvio Mayorga ",
            img : "img/sm.jpg",
            description: "Silvio Mayorga Delgado nació en Nagarote, el 16 de abril de 1934.",
            status: "FUNDADOR DEL FSLN : Pasa a la inmortalidad El 27 de agosto de 1967.",
            Frace : "El mayor orgullo de un Nicaraguense es ser MILITANTE del FSLN"
        },
        {
            id: 4,
            name: "Comandante German Pomares Ordoñez (EL DANTO)",
            img : "img/Gp.jpg",
            description: "Germán Pomares Ordóñez nació en El Viejo, el 17 de agosto de 1937.",
            status: " FUNDADOR DEL FSLN, paso a la inmortalidad El 24 de mayo de 1979, herido de un comabate en el Cerro la Cruz ",
            Frace: "Vamos a salir a darle los últimos golpes a la dictadura, yo les digo compas, que Nicaragua será libre antes de que terminen las lluvias"
                   
        
        },
        {
            id: 5,
            name: "Rigoberto Cruz ( Pablo Ubeda EL CADEJO) ",
            img : "img/Rc.jpg",
            description: "Nace el 5 de Enero de 1941 en la Libertad Chontales, el fue Maestro y revolucionario .",
            status: "FUNDADOR DEL FSLN  paso a  la inmortalidad el 27 de Agosto de 1967 en una emboscada de la Guardia Genocida de Somoza ",
            Frace: "Honor y Gloria a nuestros heroes"
            
        },
        {
            id: 6,
            name: "Comandante Jorge Navarro",
            img :"img/Gr.jpg",
            description: "Nació el 8 de julio de 1964, en San Juan, Puerto Rico.",
            status: "FUNDADOR DEL FSLN paso a la inmortalidad el 27 de Octubre de 1963 es capturado por efectivos de la guardia nacional somocista y posteriormente asesinado junto a seis compañeros más ",
            Fraces: "Fue alfabetizando en las areas urbanas , para luego despertar la cociencia de todos los/as nicaragua de tener una patria libre y soberana"
        },
        {
            id: 7,
            name: "Comandante Francisco Buitrago",
           img : "img/Fb.jpg",
            description: "Nace el 16 de Diciembre de 1936 Municipio de Terrabon, Departamento de Matagalpa, donde Nacio el Comandante Carlos Fonseca Amador.",
            status: "FUNDADOR DEL FSLN,  el 27 de octubre de 1963, jornada guerrillera de Raití y Bocay, cayeron combatiendo contra la dictadura militar somocista, los militantes Modesto Duarte, Jorge Navarro, Mauricio Córdoba, Faustino Ruíz, Iván Sánchez y Francisco Buitrago"
        },
        {
            id: 8,
            name: "Comandante Camilo Ortega Saavedra",
            img :"img/Co.jpg",
            description: "Nace : el 13 de diciembre de 1950 en la ciudad de Managua, un ejemplar combatiente y estandarte de la unidad sandinista, el Comandante Camilo Antonio Ortega Saavedra conocido popularmente como “Mundo”. Proviene de una familia muy humilde, pero con grandes ideales revolucionarios. Sus padres Daniel Ortega y su madre Lidia Saavedra ambos le inculcaron a sus seis hijos a defender la igualdad social y el igualitarismo.",
            status: "FUNDADOR DEL FSLN , paso a la inmortalidad El 26 de Febrero 1978 , cae en combate en el lugar conocido como Las Sabogales, un pequeño poblado de Masaya.",
            Frace: "!con gritos de valor decia !Viva el Frente Sandinista!"
            },
        {
            id: 9,
            name: "Compañera Mildre Abaunza",
           img :"img/Ma.jpg",
            description: "Nace El 9 de Enero de 1951.  guerrillera urbana, era originaria de Bonanza, en el Triángulo Minero. ",
            status: "MILITANTE GUERRILLERA : paso a la inmortalidad El 4 de Febrero de 1976, en la Colonia Centroamerica ciudad de Managua. },
        {
            id: 10,
            name: "Compañera Arlen Siu Bermudez",
           img : "img/As.jpg",
            description: " Nace : El 15 de julio de 1955  en la ciudad de Jinotepe, Carazo, Nicaragua. Guerrillera jinotepina sandinista. Tenía 18 años cuando se unió al FSLN  el 21 de MArzo 1975 .",
            status: "MILITANTE GUERRILLERA . paso a la inmortalidad El 1° de agosto de 1975, la Guardia Nacional localizó cerca del poblado llamado El Sauce un campo de entrenamiento sandinista."
        },
        {
            id: 11,
            name: "Mujeres del Cua",
            img : "img/Mc.jpg",
            description: "Las mujeres del Cuá es un grupo de mujeres campesinas nicaragüenses que durante el período de la lucha insurreccional contra la dictadura de Anastasio Somoza Debayle, en los años 1960 y 1970 , dieron protección y cobijo, colaborando en acciones logísticas, a los guerrilleros del Frente Sandinista de Liberación Nacional, ocasionando que fueran reprimidas duramente sufriendo toda clases de vejaciones como torturas, violación y asesinatos en el cuartel de El Cuá de la Guardia Nacional CUA BOCAY del departamento de Jinotega. Las mujeres procedían de las comunidades El Carmen, Cuskawás, el Bijao y la Tronca; ninguna de ellas era oriunda del municipio de El Cuá.",
            status: "MILITANTES : Mujeres del cua su legado continua : Amando Aguilar (Maria de la Cruz, fue cocinera del General Sandino), Natividad MArtinez (hija del Sindicalista Maximo Martinez ), Maria Venancia, Candida Maria Gonzalez , Candida Martinez , Martina Gonzalez entre otras .. compañeras"
        },
        {
            id: 12,
            name: "Compañera Concepcion Palacios ( Conchita)",
           img : "img/Cp.jpg",
            description: "Nació el 5 de Diciembre en el Sauce, León en el año 1893, Fué la primera mujer doctora en Medicina nicaraguense y centroamericana. Atendió a obreras, apoyó la revolución sandinista y trabajó como voluntaria en la Segunda Guerra Mundial, fallecio el 2 de Mayo del  año de 1981.",
            status: "Su legado continua vigente en los corazones revolucionario, el complejo salud central de Nicaragua lleva su nombre en honor a esta gran mujer"
        }
    ];

    // Variables del juego
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let isProcessing = false;
    let gameStarted = false;
    let timerInterval;
    let seconds = 0;
    let attempts = 0;

    // Elementos DOM
    const gameBoard = document.getElementById('game-board');
    const timerElement = document.getElementById('timer');
    const pairsElement = document.getElementById('pairs');
    const attemptsElement = document.getElementById('attempts');
    const restartBtn = document.getElementById('restart-btn');
    const infoModal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalStatus = document.getElementById('modal-status');
    const closeModalBtn = document.getElementById('close-modal');
    const continueBtn = document.getElementById('continue-btn');
    const victoryModal = document.getElementById('victory-modal');
    const finalTimeElement = document.getElementById('final-time');
    const finalAttemptsElement = document.getElementById('final-attempts');
    const playAgainBtn = document.getElementById('play-again-btn');

    // Iniciar juego
    initGame();

    // Función para iniciar el juego
    function initGame() {
        resetGame();
        createCards();
        renderCards();
        
        // Event listeners
        restartBtn.addEventListener('click', initGame);
        closeModalBtn.addEventListener('click', closeInfoModal);
        continueBtn.addEventListener('click', closeInfoModal);
        playAgainBtn.addEventListener('click', initGame);
    }

    // Función para resetear el juego
    function resetGame() {
        cards = [];
        flippedCards = [];
        matchedPairs = 0;
        isProcessing = false;
        gameStarted = false;
        seconds = 0;
        attempts = 0;
        
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        timerElement.textContent = '00:00';
        pairsElement.textContent = '0/12';
        attemptsElement.textContent = '0';
        
        gameBoard.innerHTML = '';
    }

    // Función para crear las cartas
    function createCards() {
        // Crear pares de cartas
        for (let i = 0; i < speciesData.length; i++) {
            // Crear dos cartas con el mismo id (par)
            for (let j = 0; j < 2; j++) {
                cards.push({
                    id: speciesData[i].id,
                     img: speciesData[i].img, // ← propiedad correcta
                    name: speciesData[i].name,
                     flipped: false,
                    matched: false
                });
            }
        }
        
        // Mezclar las cartas
        shuffleCards();
    }

    // Función para mezclar las cartas
    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    // Función para renderizar las cartas
    function renderCards() {
        gameBoard.innerHTML = '';
        
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = `card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''} aspect-square`;
            cardElement.dataset.index = index;
            
            cardElement.innerHTML = `
                <div class="card-inner h-full">
                    <div class="card-front">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="card-back bg-white">
                        <div class="card-image">
                          <img src="${card.img}" alt="${card.name}" class="w-full h-full object-contain" />
                           
                        </div>
                    </div>
                </div>
            `;
            
            cardElement.addEventListener('click', () => flipCard(index));
            gameBoard.appendChild(cardElement);
        });
    }

    // Función para voltear una carta
    function flipCard(index) {
        // Evitar procesar múltiples cartas a la vez o cartas ya volteadas/emparejadas
        if (isProcessing || cards[index].flipped || cards[index].matched) {
            return;
        }
        
        // Iniciar el temporizador si es la primera carta volteada
        if (!gameStarted) {
            startTimer();
            gameStarted = true;
        }
        
        // Voltear la carta
        cards[index].flipped = true;
        flippedCards.push(index);
        
        // Actualizar la visualización
        renderCards();
        
        // Si hay dos cartas volteadas, verificar si son un par
        if (flippedCards.length === 2) {
            isProcessing = true;
            attempts++;
            attemptsElement.textContent = attempts;
            
            const firstCardIndex = flippedCards[0];
            const secondCardIndex = flippedCards[1];
            
            if (cards[firstCardIndex].id === cards[secondCardIndex].id) {
                // Es un par
                setTimeout(() => {
                    cards[firstCardIndex].matched = true;
                    cards[secondCardIndex].matched = true;
                    flippedCards = [];
                    isProcessing = false;
                    matchedPairs++;
                    pairsElement.textContent = `${matchedPairs}/12`;
                    
                    // Mostrar información sobre la especie
                    const speciesInfo = speciesData.find(species => species.id === cards[firstCardIndex].id);
                    showInfoModal(speciesInfo);
                    
                    // Verificar si el juego ha terminado
                    if (matchedPairs === 12) {
                        endGame();
                    }
                    
                    renderCards();
                }, 500);
            } else {
                // No es un par
                setTimeout(() => {
                    cards[firstCardIndex].flipped = false;
                    cards[secondCardIndex].flipped = false;
                    flippedCards = [];
                    isProcessing = false;
                    renderCards();
                }, 1000);
            }
        }
    }

    // Función para iniciar el temporizador
   function startTimer() {
                                    if (timerInterval) {
                                        clearInterval(timerInterval); // ← limpiá cualquier intervalo previo
                                    }

                                    timerInterval = setInterval(() => {
                                        seconds++;
                                        const minutes = Math.floor(seconds / 60);
                                        const remainingSeconds = seconds % 60;
                                        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                                    }, 1000);
                                    }

                        

    // Función para mostrar el modal de información
    function showInfoModal(species) {
        modalTitle.textContent = species.name;
        modalImage.innerHTML = `<img src="${species.img}" alt="${species.name}" class="modal-image" />`;
        modalDescription.textContent = species.description;
        modalStatus.textContent = species.status;
        infoModal.classList.add('active');
        clearInterval(timerInterval); // ← Detiene el tiempo

        
    }

    // Función para cerrar el modal de información
  function closeInfoModal() {
  infoModal.classList.remove('active');
  startTimer();          // ← ahora sí reinicia
  isProcessing = false;  // ← desbloquea lógica de juego
  renderCards();         // ← refresca vista
}



    // Función para finalizar el juego
    function endGame() {
        clearInterval(timerInterval);
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        
        finalTimeElement.textContent = timeString;
        finalAttemptsElement.textContent = attempts;
        
        setTimeout(() => {
            victoryModal.classList.add('active');
            createConfetti();
        }, 1000);
    }

 


    // Función para crear efecto de confeti
    function createConfetti() {
        const confettiCount = 100;
        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `-10px`;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);
            
            // Animación de caída
            setTimeout(() => {
                confetti.style.transition = `top ${Math.random() * 3 + 2}s linear, left ${Math.random() * 3 + 2}s ease-in-out, opacity 1s ease-out ${Math.random() * 3 + 2}s`;
                confetti.style.opacity = '1';
                confetti.style.top = `${Math.random() * 100 + 100}%`;
                confetti.style.left = `${Math.random() * 100}%`;
                
                // Eliminar confeti después de la animación
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, 10);
        }
    }
});
