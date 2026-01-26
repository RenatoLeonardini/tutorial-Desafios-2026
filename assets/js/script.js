document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('slides-container');
    const totalImages = 18;
    const slides = [];

    // --- DATA GENERATION ---
    const customSteps = {
        1: {
            title: "PREPARACIÓN DEL CHASIS",
            text: `
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 1rem;">• Toma la placa grande y las 4 piezas en forma de T.</li>
                    <li style="margin-bottom: 1rem;">• Busca los <strong>4 agujeros rectangulares</strong> que están agrupados en el centro de la placa.</li>
                    <li style="margin-bottom: 1rem;">• Encaja cada pieza en <strong>forma de T</strong> en esos agujeros.</li>
                    <li style="color: #ff0055;">• <strong>¡Importante!</strong> No introduzcas tornillos todavía. Solo asegúrate de que encajen y queden verticales (parados) mirando hacia arriba.</li>
                </ul>
            `,
            images: ['assets/img/foto1.jpg', 'assets/img/foto2.jpg']
        },
        2: {
            title: "MONTAJE DE MOTORES",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Preparación</h3>
                    <p style="margin-bottom: 1rem;"><strong>Toma los 2 motores amarillos.</strong><br>
                    ¡Ojo! Los cables ya vienen listos y soldados. No necesitas pelar ni conectar nada todavía, solo ten cuidado de no tirarlos muy fuerte para que no se corten.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Marcas Metálicas</h3>
                    <p style="margin-bottom: 1rem;"><strong>Fíjate en el 'puntito' metálico.</strong><br>
                    Mira los motores de cerca: en uno de sus lados tienen dos pequeñas marcas metalicas.<br>
                    <strong>La Regla de Oro:</strong> Al montarlos, asegúrate de que esos puntitos queden <strong>mirándose frente a frente</strong> (hacia el interior del auto).</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Montaje</h3>
                    <p style="margin-bottom: 0.5rem;"><strong>Atornillar al Chasis.</strong><br>
                    Coloca los motores entre los soportes 'T' que pusiste antes.</p>
                    <ol style="margin-bottom: 0; padding-left: 1.2rem;">
                        <li><strong>Orientación:</strong> La parte amarilla (donde sale el eje blanco) debe quedar apuntando hacia el <strong>agujero grande</strong> de la base.</li>
                    </ol>
                    <p style="margin-top: 0.5rem;">A continuación fijaremos motores con los 4 tornillos largos y 4 tuercas.</p>
                </div>
            `,
            images: ['assets/img/foto3.jpg', 'assets/img/foto4.jpg', 'assets/img/foto5.jpg']
        },
        3: {
            title: "FIJACIÓN DE MOTORES",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Verificar Agujeros</h3>
                    <p style="margin-bottom: 1rem;"><strong>Toma uno de los motores amarillos y míralo de lado.</strong><br>
                    Verás <strong>dos pequeños agujeros</strong> que atraviesan el cuerpo de plástico amarillo. Esos son los túneles por donde deben pasar los tornillos largos. Ten a mano los <strong>tornillos largos y las tuercas</strong> que vienen en la bolsa, los usarás ahora.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Alineación</h3>
                    <p style="margin-bottom: 1rem;"><strong>Coloca el motor pegado a la pieza en forma de 'T' que ya pusiste en la base.</strong><br>
                    <strong>El Truco:</strong> Tienes que mover el motor suavemente hasta que los agujeros de la madera coincidan perfectamente con los agujeros del motor. Tienes que ser capaz de <strong>ver hacia el otro lado</strong> a través del agujero.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Atornillado</h3>
                    <p style="margin-bottom: 0.5rem;"><strong>Una vez alineados, atraviesa todo con los tornillos largos desde un lado hacia el otro.</strong><br>
                    Por el lado contrario, enrosca las tuercas con los dedos.</p>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;">• <strong>Nota Importante:</strong> Aprieta firme para que el motor no baile, pero <strong>con cuidado</strong> de no romper la madera. Debe verse exactamente como en la foto.</li>
                    </ul>
                </div>
            `,
            images: ['assets/img/foto6.jpg', 'assets/img/foto7.jpg', 'assets/img/foto8.jpg']
        },
        4: {
            title: "SEGUNDO MOTOR Y CABLES",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: El Lado Opuesto</h3>
                    <p style="margin-bottom: 1rem;">Ahora repite lo mismo en el lado opuesto. Instala el segundo motor siguiendo los pasos anteriores.<br>
                    <strong>La Regla del Espejo:</strong> Mira tu base desde arriba. Los dos motores deben verse exactamente alineados, como si fueran gemelos. Si uno te queda más adelante o más chueco que el otro, el auto no andará recto.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Paso de Cables</h3>
                    <p style="margin-bottom: 1rem;">Busca los agujeros grandes que están en el piso del chasis, justo en frente a la cabeza de los motores (La parte negra)<br>
                    <strong>Acción Delicada:</strong> Toma los cables (rojos y negros) y pásalos suavemente por esos agujeros hacia el otro lado de la tabla.<br>
                    <ul style="list-style: none; padding: 0; margin-top: 0.5rem;">
                        <li>• <strong>¡Cuidado!</strong> Hazlo despacio. La soldadura de estos cables es frágil; si das un tirón fuerte, los arrancarás.</li>
                    </ul></p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Pruebas Finales</h3>
                    <p style="margin-bottom: 0.5rem;">¡Alto! Antes de pasar a la siguiente diapositiva, haz esta prueba rápida:</p>
                    <ol style="margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;"><strong>Prueba de Tensión:</strong> Agarra los motores con la mano e intenta moverlos. ¿Están firmes como una roca? Si bailan, aprieta las tuercas.</li>
                        <li><strong>Prueba de Cables:</strong> Revisa que ningún cable haya quedado 'mordido' o aplastado debajo del motor. Deben estar libres pasando por el agujero.</li>
                    </ol>
                </div>
            `,
            images: ['assets/img/foto9.jpg', 'assets/img/foto10.jpg', 'assets/img/foto11.jpg']
        },
        5: {
            title: "RUEDA LOCA",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Materiales y Ubicación</h3>
                    <p style="margin-bottom: 1rem;">Ahora toma la <strong>rueda blanca pequeña</strong>, los <strong>4 tornillos medianos</strong> y las 4 tuercas.<br>
                    <strong>¿Dónde va?</strong> Esta rueda no va atrás con los motores. Tienes que instalarla en la <strong>punta delantera</strong> del auto, en el borde curvo donde verás un grupo de 4 agujeros pequeños listos para ella.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Instalación</h3>
                    <p style="margin-bottom: 1rem;">Coloca la base metálica de la rueda sobre los 4 agujeros de la madera hasta que calce perfecto y puedas ver a través de ellos.<br>
                    <strong>¡Ojo con el sentido!</strong> Pasa los 4 tornillos <strong>desde arriba hacia abajo</strong>.</p>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;">• La <strong>cabeza plana</strong> del tornillo debe quedar tocando la placa metálica de la rueda.</li>
                        <li>• Las <strong>tuercas</strong> se enroscan por la parte de abajo de la madera. Apriétalas bien con los dedos.</li>
                    </ul>
                </div>
            `,
            images: ['assets/img/foto12.jpg', 'assets/img/foto13.jpg']
        },
        6: {
            title: "INSTALACIÓN DE RUEDAS",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Ruedas Principales</h3>
                    <p style="margin-bottom: 1rem;">Busca las dos ruedas grandes amarillas con neumáticos de goma negra.<br>
                    <strong>Observación:</strong> Estas ruedas no son iguales por ambos lados. Fíjate que un lado es más 'plano' y el otro tiene un centro hundido con un cilindro amarillo saliente. Usaremos ese lado del cilindro para conectar.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: La Llave Maestra</h3>
                    <p style="margin-bottom: 1rem;">Mira muy de cerca el agujero amarillo en el centro de la rueda.<br>
                    <strong>Detalle Crítico:</strong> ¡No es un circulo perfecto! Si te fijas bien, es un rectángulo con lados curvos (una forma aplanada). Tienes que identificar esa forma plana antes de intentar ponerla, porque funciona como una llave.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Conexión al Motor</h3>
                    <p style="margin-bottom: 0.5rem;">Ahora mira el <strong>eje blanco</strong> que sale del motor. También tiene esa forma aplanada (doble cara plana).<br>
                    <strong>Instrucción:</strong></p>
                    <ol style="margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Acerca la rueda al motor.</li>
                        <li style="margin-bottom: 0.5rem;">Gírala suavemente con la mano hasta que la forma del agujero coincida exactamente con la forma del eje blanco.</li>
                        <li><strong>¡Empuja!</strong> Una vez alineados, presiona la rueda hacia adentro hasta que tope. Si no entra, no la fuerces; vuelve a revisar la alineación.</li>
                    </ol>
                </div>
            `,
            images: ['assets/img/foto14.jpg', 'assets/img/foto15.jpg', 'assets/img/foto16.jpg']
        },
        7: {
            title: "MONTAJE DE SENSORES",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Materiales</h3>
                    <p style="margin-bottom: 1rem;">Reúne lo siguiente:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• <strong>1 Soporte en 'L':</strong> Es esa pieza plástica pequeña en ángulo.</li>
                        <li>• <strong>1 Sensor Ultrasónico:</strong> El que parece 'ojos'.</li>
                        <li>• <strong>Cinta doble contacto.</strong></li>
                        <li>• <strong>2 Tornillos medianos y sus tuercas.</strong></li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Instalación del Soporte</h3>
                    <p style="margin-bottom: 1rem;">Da vuelta el auto (los motores quedan abajo). En la parte delantera (la punta de flecha) instalaremos el soporte.<br>
                    <strong>Instalación:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• <strong>Soporte Central:</strong> Usa 2 tornillos para fijarlo firmemente al centro.</li>
                        <li style="margin-top: 0.5rem;">• <strong>Ojo:</strong> La cabeza plana del tornillo va por arriba (tocando el plástico), la tuerca va por abajo.</li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Pegado del Sensor</h3>
                    <p style="margin-bottom: 1rem;">Pega el sensor al soporte usando la cinta doble contacto.<br>
                    <strong>¡ALERTA CRÍTICA!</strong> Antes de pegar definitivo, mira el hueco rectangular detrás del soporte.</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• <strong>El problema:</strong> Los pines del sensor NO deben tapar ese hueco, necesitamos espacio para pasar los cables.</li>
                        <li>• <strong>La solución:</strong> Si queda muy apretado, pon <strong>2 o 3 capas de cinta</strong> una sobre otra para crear separación.</li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 4: Detalle de Pines</h3>
                    <p style="margin-bottom: 0.5rem;">Vista trasera y cableado de referencia. Observa cómo los pines quedan libres y no bloqueados por el soporte, permitiendo la conexión de los cables.</p>
                </div>
            `,
            images: ['assets/img/foto17.jpg', 'assets/img/foto18.jpg', 'assets/img/foto19.png', 'assets/img/foto20.jpg']
        },
        8: {
            title: "CONEXIÓN ELECTRÓNICA",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1 y 2: Clasificación de Cables</h3>
                    <p style="margin-bottom: 1rem;">Separa los cables en tres grupos:</p>
                    <ol style="margin-bottom: 1rem; padding-left: 1.2rem;">
                        <li><strong>Grupo Trig:</strong> 1 cable (ej. amarillo).</li>
                        <li><strong>Grupo Echo:</strong> 1 cable de otro color (ej. verde).</li>
                        <li><strong>Grupo Energía:</strong> Los 2 cables especiales del sensor.</li>
                    </ol>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3 y 4: Conexión de Pines</h3>
                    <p style="margin-bottom: 1rem;">Mira los nombres escritos en el sensor (VCC, Trig, Echo, GND) y conecta así:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• <strong>VCC:</strong> Conecta al cable <strong>ROJO</strong>.</li>
                        <li>• <strong>GND:</strong> Conecta al cable <strong>NEGRO</strong>.</li>
                        <li>• <strong>Trig:</strong> Usa la cabeza del cable amarillo.</li>
                        <li>• <strong>Echo:</strong> Usa la cabeza del cable verde.</li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 5: Orden y Pasacables</h3>
                    <p style="margin-bottom: 1rem;">Ahora pon orden. Toma todos los cables conectados y pásalos con cuidado <strong>por debajo</strong> del sensor.<br>
                    <strong>El Destino:</strong> Mételos por el agujero circular grande del centro para que salgan hacia arriba del chasis. Deben quedar libres y ordenados como en la foto, listos para conectarse al cerebro del robot.</p>
                </div>
            `,
            images: ['assets/img/foto21.jpg', 'assets/img/foto22.jpg', 'assets/img/foto23.jpg', 'assets/img/foto24.jpg']
        },
        9: {
            title: "MONTAJE DE PLACA 3D",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Materiales</h3>
                    <p style="margin-bottom: 1rem;">Busca una de las <strong>placa impresa en 3D</strong> (azul o del color que tengas, aprox 15cm de ancho).<br>
                    <strong>Tus materiales:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• <strong>4 Tubos blancos:</strong> Serán los pilares.</li>
                        <li>• <strong>4 Tornillos Medianos (Planos):</strong> Para la base de madera.</li>
                        <li>• <strong>4 Tornillos Pequeños (Puntiagudos):</strong> Para la placa azul.</li>
                        <li>• <strong>Cinta doble contacto.</strong></li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Base y Cinta</h3>
                    <p style="margin-bottom: 1rem;">Primero, pega dos tiras de <strong>cinta doble contacto</strong> en el chasis de madera, justo entre los motores.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: El Truco de los Pilares (Detalle)</h3>
                    <ol style="margin-bottom: 1rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Inserta los <strong>tornillos medianos</strong> desde <strong>abajo</strong> de la madera hacia arriba (No deben atravesar la madera).</li>
                        <li>Atornilla los <strong>tubos blancos</strong> en esos tornillos. La cinta ayudará a que queden firmes y acolchados.</li>
                    </ol>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 4: Montaje Final</h3>
                    <p style="margin-bottom: 0.5rem;">Coloca la placa azul (con los tubos ya atornillados) encima de la cinta doble contacto.</p>
                </div>
            `,
            images: ['assets/img/foto25.jpg', 'assets/img/foto26.jpg', 'assets/img/foto28.jpg', 'assets/img/foto27.jpg']
        },
        10: {
            title: "INSTALACIÓN DEL DRIVER",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Driver L298N</h3>
                    <p style="margin-bottom: 1rem;">Busca la <strong>placa roja</strong> que tiene un disipador de calor de aluminio negro encima. Este es el <strong>Driver L298N</strong>, el encargado de controlar la velocidad y dirección de tus ruedas.<br>
                    <strong>Materiales para este paso:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• El Driver L298N (la placa roja).</li>
                        <li>• 4 Cables Macho-Hembra (Una cabeza en negra y la otra tiene una punta plateada).</li>
                        <li>• Cinta doble contacto.</li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Pegado del Driver</h3>
                    <p style="margin-bottom: 1rem;">Prepara la superficie azul que instalaste antes.</p>
                    <ol style="margin-bottom: 1rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Corta dos tiras de <strong>cinta doble contacto</strong> y pégalas en la placa azul (a la misma altura que la imagen), entre los postes blancos.</li>
                        <li style="margin-bottom: 0.5rem;">Retira la cubierta protectora de la cinta.</li>
                        <li>Toma el Driver rojo y pégalo firmemente sobre la cinta. <strong>Tip:</strong> Trata de centrarlo para que los cables lleguen bien desde ambos lados.</li>
                    </ol>
                </div>
            `,
            images: ['assets/img/foto29.jpg', 'assets/img/foto30.jpg']
        },
        11: {
            title: "CONEXIÓN DE MOTORES AL DRIVER",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Preparación de Borneras</h3>
                    <p style="margin-bottom: 1rem;">Enfócate en los <strong>bloques azules</strong> a los lados de la placa roja.<br>
                    <strong>Acción:</strong></p>
                    <ol style="margin-bottom: 1rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Toma un destornillador pequeño.</li>
                        <li style="margin-bottom: 0.5rem;">Gira los tornillos de la parte superior hacia la izquierda (anti-horario) para abrir las compuertas.</li>
                        <li>Verifica que los huecos estén abiertos y listos para recibir los cables.</li>
                    </ol>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: El Problema del Espejo</h3>
                    <p style="margin-bottom: 1rem;">Trae los cables de los motores. Aquí hay una trampa física: como los motores están montados espalda con espalda (en espejo), si los conectas igual, una rueda girará hacia adelante y la otra hacia atrás.<br>
                    <strong>La Solución:</strong> Para que el auto avance recto, debemos conectar los cables con los <strong>colores invertidos</strong> en cada lado.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Patrón de Conexión</h3>
                    <p style="margin-bottom: 1rem;">Mira la foto y replica este patrón exacto:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;">• <strong>Lado Izquierdo:</strong> Conecta el cable <strong>Rojo</strong> primero y el <strong>Negro</strong> después (Rojo-Negro).</li>
                        <li style="margin-bottom: 0.5rem;">• <strong>Lado Derecho:</strong> ¡Hazlo al revés! Conecta el <strong>Negro</strong> primero y el <strong>Rojo</strong> después (Negro-Rojo).</li>
                    </ul>
                    <p style="margin-top: 0.5rem;"><strong>Verificación:</strong> Tira suavemente de los cables para asegurar que quedaron mordidos firmemente por el tornillo.</p>
                </div>
            `,
            images: ['assets/img/foto31.jpg', 'assets/img/foto32.jpg', 'assets/img/foto33.jpg']
        },
        12: {
            title: "CONEXIÓN DE LÓGICA",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Pines de Control</h3>
                    <p style="margin-bottom: 1rem;">Ubica la fila de 4 pines metálicos en la placa roja etiquetados en la base como <strong>IN1, IN2, IN3 e IN4</strong>.<br>
                    <strong>La Conexión Inteligente:</strong></p>
                    <ol style="margin-bottom: 1rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Toma 4 cables <strong>Macho-Hembra</strong> (los que tienen una cabeza negra con agujero).</li>
                        <li style="margin-bottom: 0.5rem;">Conéctalos uno al lado del otro en esos 4 pines.</li>
                        <li><strong>¡Regla de Oro!</strong> Usa <strong>colores diferentes</strong> para cada pin (ej: Azul, Café, Naranja...).<br>
                        <span style="font-size: 0.9em; color: #aaa;">• <em>¿Por qué?</em> Necesitas distinguir cuál es cuál cuando los conectemos al cerebro (Arduino) en el siguiente paso.</span></li>
                    </ol>
                </div>
            `,
            images: ['assets/img/foto34.jpg']
        },
        13: {
            title: "PREPARACIÓN DE ENERGÍA",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1 y 2: Materiales de Energía</h3>
                    <p style="margin-bottom: 1rem;">Busca los siguientes elementos:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• <strong>Cable Plug DC:</strong> El que tiene un enchufe redondo negro (para el Arduino).</li>
                        <li>• <strong>Broche de Batería:</strong> El que tiene los clips metálicos para la pila de 9V.</li>
                        <li>• <strong>Caja Negra:</strong> El soporte rectangular impreso en 3D.</li>
                        <li>• <strong>Cinta doble contacto.</strong></li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Montaje de la Caja</h3>
                    <p style="margin-bottom: 1rem;">Usa la cinta doble contacto para pegar la <strong>caja negra rectangular</strong> en la parte trasera del chasis justo en frente del controlador de motor. Toma como referencia los agujeros por donde pasan los cables de los motores, ese será un buen lugar para pegar la caja.<br>
                    <strong>Posición:</strong> Pégala centrada, justo detrás de la placa azul que pusimos antes. Presiona fuerte para que la batería no salga volando cuando el robot se mueva.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 4: Unificación de Cables</h3>
                    <p style="margin-bottom: 1rem;">Vamos a unir los dos cables para crear una sola linea de energía.<br>
                    <strong>Instrucción:</strong></p>
                    <ol style="margin-bottom: 1rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Junta las puntas metálicas peladas: <strong>Rojo con Rojo</strong> y <strong>Negro con Negro</strong>.</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Retuércelos</strong> con los dedos (haz una trenza firme) hasta que queden bien unidos.</li>
                    </ol>
                    <p style="margin-top: 0.5rem;">• <strong>Objetivo:</strong> Necesitamos que queden convertidos en un solo cable doble para poder meterlos en el conector más adelante.</p>
                </div>
            `,
            images: ['assets/img/foto35.jpg', 'assets/img/foto36.jpg', 'assets/img/foto37.jpg', 'assets/img/foto38.jpg']
        },
        14: {
            title: "CONEXIÓN DE ENERGÍA AL DRIVER",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Conexión de Energía</h3>
                    <p style="margin-bottom: 1rem;">Ubica el bloque azul de 3 entradas en la parte frontal de la placa roja.<br>
                    <strong>Protocolo de Conexión (¡No te equivoques!):</strong></p>
                    <ol style="margin-bottom: 1rem; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Afloja los tornillos de la izquierda y del centro.</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Cable ROJO (Positivo):</strong> Insértalo en la entrada de la <strong>IZQUIERDA</strong> (donde suele decir 12V/VMS).</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Cable NEGRO (Tierra):</strong> Insértalo en la entrada del <strong>CENTRO</strong> (donde dice GND).</li>
                        <li><strong>Aprieta:</strong> Asegura los tornillos firmemente.</li>
                    </ol>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Prueba de Fuego</h3>
                    <p style="margin-bottom: 1rem;">Es el momento de la verdad. Conecta la batería de 9V al broche que acabas de instalar.<br>
                    <strong>¿Qué debe pasar?</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;">• Si lo hiciste bien, se encenderá una <strong>pequeña luz LED roja</strong> en la placa del Driver.</li>
                    </ul>
                    <p style="margin-top: 0.5rem; color: #ff0055;"><strong>¡ALERTA!</strong> Si NO se enciende la luz, <strong>desconecta la batería INMEDIATAMENTE</strong>. Es muy probable que hayas puesto los cables rojo y negro al revés o simplemente quedaron sueltos. Revisa antes de volver a intentar.</p>
                </div>
            `,
            images: ['assets/img/foto39.jpg', 'assets/img/foto40.jpg']
        },
        15: {
            title: "MONTAJE DEL ARDUINO",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1 y 2: Piezas Finales</h3>
                    <p style="margin-bottom: 1rem;">Busca las piezas finales:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• <strong>Arduino (Placa Roja):</strong> El cerebro del robot.</li>
                        <li>• <strong>Placa Negra:</strong> La base de montaje impresa en 3D.</li>
                        <li>• <strong>Tornillos:</strong> Sepáralos bien. Necesitas <strong>4 puntiagudos</strong> (para el tubo plástico) y <strong>4 planos pequeños</strong> con sus tuercas (para el Arduino).</li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Base Negra</h3>
                    <p style="margin-bottom: 1rem;">Coloca la placa negra sobre los <strong>tubos blancos traseros</strong> (los que quedaron libres).<br>
                    <strong>Fijación:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• Usa los <strong>4 tornillos puntiagudos</strong>.</li>
                        <li>• Atornilla desde arriba hacia dentro del tubo blanco. Aprieta hasta que la placa quede firme y no baile.</li>
                    </ul>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 4: El Cerebro en su Sitio</h3>
                    <p style="margin-bottom: 1rem;">Pon el Arduino sobre la placa negra alineando los 4 agujeros de las esquinas.<br>
                    <strong>La Prueba de Paciencia:</strong></p>
                    <ol style="margin-bottom: 0; padding-left: 1.2rem;">
                        <li style="margin-bottom: 0.5rem;">Inserta los <strong>tornillos planos</strong> desde arriba.</li>
                        <li style="margin-bottom: 0.5rem;">Coloca las <strong>tuercas por debajo</strong> de la placa negra.</li>
                        <li><strong>Tip:</strong> Es un espacio estrecho. Si tienes dedos grandes, usa una pinza o pide ayuda a un compañero para sujetar la tuerca mientras atornillas.</li>
                    </ol>
                </div>
            `,
            images: ['assets/img/foto41.jpg', 'assets/img/foto42.jpg', 'assets/img/foto43.jpg', 'assets/img/foto44.jpg']
        },
        16: {
            title: "CONEXIÓN DE CABLES AL ARDUINO",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Zona Analog In (Sensores y Energía)</h3>
                    <p style="margin-bottom: 1rem;">Ubica la zona <strong>ANALOG IN</strong> en el Arduino. Pon el robot mirándote de frente (sensor mirándote a ti) y conecta los cables siguiendo este mapa:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• <strong>Sensor Central:</strong> Echo en <strong>A3</strong>, Trig en <strong>A2</strong>.</li>
                    </ul>
                    <p style="margin-top: 0.5rem;"><strong>Energía Común:</strong> Finalmente, conecta el cable negro al pin <strong>GND</strong> y el cable rojo al pin <strong>5V</strong> del Arduino (se encuentran luego de los pines análogos).</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Zona Digital PWM (Motores)</h3>
                    <p style="margin-bottom: 1rem;">Ahora ve al lado opuesto, a la zona <strong>DIGITAL (PWM)</strong>. Trae los 4 cables de colores que vienen del Driver Rojo (IN1 al IN4).<br>
                    <strong>La Secuencia Sagrada:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li>• El cable del <strong>IN1</strong> va al <strong>Pin 10</strong>.</li>
                        <li>• El cable del <strong>IN2</strong> va al <strong>Pin 9</strong>.</li>
                        <li>• El cable del <strong>IN3</strong> va al <strong>Pin 6</strong>.</li>
                        <li>• El cable del <strong>IN4</strong> va al <strong>Pin 5</strong>.</li>
                    </ul>
                    <p style="margin-top: 0.5rem; color: #ff0055;"><strong>¡Advertencia!</strong> Respeta estos números exactos. Si los cambias, cuando cargues el código, las ruedas no responderán.</p>
                </div>
            `,
            images: ['assets/img/foto45.jpg', 'assets/img/foto46.png']
        },
        17: {
            title: "INSTALACIÓN DEL MICRÓFONO",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 1: Preparación del Montaje</h3>
                    <p style="margin-bottom: 1rem;">Vamos a instalar el <strong>Sensor de Sonido (Micrófono)</strong>. A diferencia del resto de componentes, este 'oído' debe ir escondido.<br>
                    <strong>Instrucción:</strong> Vamos a trabajar en el <strong>extremo sur</strong> del auto (la parte trasera), en el lado opuesto a donde pusiste los sensores ultrasónicos (ojos).</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 2: Fijación</h3>
                    <p style="margin-bottom: 1rem;">Corta un trozo de <strong>cinta doble contacto</strong> y pégalo en la base del sensor.<br>
                    Adhiere el micrófono firmemente a la madera en la zona indicada. Asegúrate de que quede bien pegado para que no se suelte con las vibraciones del motor.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">IMAGEN 3: Conexión al Cerebro</h3>
                    <p style="margin-bottom: 1rem;">Vuelve a poner el auto al derecho y pasa los cables hacia arriba. Conecta los pines al Arduino siguiendo esta tabla estricta:</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem; border: 1px solid #444;">
                        <tr style="background: rgba(0, 255, 65, 0.1);">
                            <th style="padding: 8px; text-align: left; border-bottom: 1px solid #444;">Micrófono</th>
                            <th style="padding: 8px; text-align: left; border-bottom: 1px solid #444;">Arduino</th>
                            <th style="padding: 8px; text-align: left; border-bottom: 1px solid #444;">¿Por qué?</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border-bottom: 1px solid #333;"><strong>VCC (+)</strong></td>
                            <td style="padding: 8px; border-bottom: 1px solid #333; color: var(--secondary); font-weight: bold;">Pin 8</td>
                            <td style="padding: 8px; border-bottom: 1px solid #333; font-size: 0.9em; color: #aaa;">Energía ("Phantom Power")</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border-bottom: 1px solid #333;"><strong>GND (G)</strong></td>
                            <td style="padding: 8px; border-bottom: 1px solid #333; color: var(--secondary); font-weight: bold;">GND</td>
                            <td style="padding: 8px; border-bottom: 1px solid #333; font-size: 0.9em; color: #aaa;">Tierra (Negativo)</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>OUT (DO)</strong></td>
                            <td style="padding: 8px; color: var(--secondary); font-weight: bold;">Pin 12</td>
                            <td style="padding: 8px; font-size: 0.9em; color: #aaa;">Señal "¡Escuché algo!"</td>
                        </tr>
                    </table>
                </div>
            `,
            images: ['assets/img/foto48.jpg', 'assets/img/foto49.jpg', 'assets/img/foto47.jpg']
        },
        18: {
            title: "FINALIZACIÓN Y TEST",
            text: `
                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">Nota para el Programador:</h3>
                    <p style="margin-bottom: 1rem;">¡No olvides esto!<br>
                    Cuando escribas tu código, deberás decirle al Arduino exactamente en qué pines conectaste cada cosa.</p>
                </div>

                <div class="step-block">
                    <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">Test de Humo</h3>
                    <p style="margin-bottom: 1rem;">Conecta la batería. Si encienden el <strong>LED Rojo</strong> del controlador de motores y el <strong>LED Verde</strong> del Arduino simultáneamente, ¡todo está correcto!</p>
                </div>

                <div class="step-block">
                    <p style="margin-top: 1rem; color: var(--secondary); font-size: 1.1em; font-weight: bold;">Tu hardware está listo. Es hora de pasar al Software.</p>
                </div>
            `,
            images: ['assets/img/logo_uv.png']
        }
    };

    for (let i = 1; i <= totalImages; i++) {
        let ext = 'jpg';
        if (i === 46) ext = 'png';

        if (customSteps[i]) {
            slides.push({
                id: i,
                img: customSteps[i].images[0], // Main fallback
                images: customSteps[i].images, // Multi-image support
                title: customSteps[i].title,
                text: customSteps[i].text
            });
        } else {
            slides.push({
                id: i,
                img: `assets/img/foto${i}.${ext}`,
                images: [`assets/img/foto${i}.${ext}`],
                title: `Paso ${i}`,
                text: `Instrucción pendiente para el paso ${i}. Reemplaza este texto con la guía del PDF.`
            });
        }
    }

    // --- RENDER SLIDES ---
    container.innerHTML = slides.map(slide => {
        let imageContent = '';
        let navButtons = '';

        if (slide.images && slide.images.length > 1) {
            // Render multiple images inside a scrolling wrapper
            const imagesHTML = slide.images.map(src =>
                `<img src="${src}" alt="Paso ${slide.id}" class="zoomable" data-zoom-src="${src}">`
            ).join('');

            imageContent = `<div class="image-container-wrapper" id="img-wrapper-${slide.id}">${imagesHTML}</div>`;

            // Add navigation buttons
            navButtons = `
                <button class="img-nav-btn img-nav-prev" onclick="scrollImage('${slide.id}', -1)">❮</button>
                <button class="img-nav-btn img-nav-next" onclick="scrollImage('${slide.id}', 1)">❯</button>
            `;
        } else {
            // Single image
            imageContent = `<img src="${slide.img}" alt="Paso ${slide.id}" class="zoomable" data-zoom-src="${slide.img}">`;
        }

        return `
        <div class="swiper-slide" data-step-id="${slide.id}">
            <div class="slide-content-wrapper">
                <div class="info-section" data-swiper-parallax="-300">
                    <div class="step-number" data-swiper-parallax="-500">${slide.id.toString().padStart(2, '0')}</div>
                    <h2 class="step-title">${slide.title}</h2>
                    <div class="step-desc">${slide.text}</div>
                </div>
                <!-- Image Section with potential nav buttons -->
                <div class="image-section" data-swiper-parallax-scale="0.8">
                    ${imageContent}
                    ${navButtons}
                </div>
            </div>
        </div>
    `}).join('');

    // --- INITIALIZE SWIPER ---
    const swiper = new Swiper(".mySwiper", {
        speed: 800,
        parallax: true, // Enable Parallax
        spaceBetween: 0,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar", // Minimal line
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // --- MODAL LOGIC ---
    const modal = document.getElementById('challenge-warning-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    let hasShownModal = false; // To show only once per session if desired

    swiper.on('slideChange', function () {
        // Page 7 corresponds to index 6 (0-based)
        // Check if we are on the specific slide (Project ID 7)
        // Note: The loop creates slides with IDs 1..46 in order.
        // So ID 7 is at index 6.
        if (swiper.activeIndex === 6 && !hasShownModal) {
            modal.classList.add('active');
            hasShownModal = true;
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // --- INITIALIZE ZOOM ---
    mediumZoom('.zoomable', {
        margin: 0,
        background: '#0a0b10f0',
        scrollOffset: 0,
    });
});

// Global function for image scrolling
window.scrollImage = function (slideId, direction) {
    const wrapper = document.getElementById(`img-wrapper-${slideId}`);
    if (wrapper) {
        // Scroll amount: width of the container
        const scrollAmount = wrapper.clientWidth * direction;
        wrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });

        // Stop propagation to prevent Swiper from swiping (extra safety)
        event.stopPropagation();
    }
};
