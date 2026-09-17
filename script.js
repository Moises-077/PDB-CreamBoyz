/* =====================================================================
   CREAM BOYZ · CANDIDATURA PDB
   =====================================================================

   TODO EL TEXTO DE LA WEB ESTÁ EN EL BLOQUE "CONTENIDO" DE AQUÍ ABAJO.
   Está sacado de la presentación (Cream Boyz1.pdf) tal y como aparece
   en ella. Para corregir o ampliar algo, se edita aquí: no hace falta
   tocar el HTML ni el CSS.

   · Para añadir un integrante, un objetivo o un capítulo de historia,
     se copia uno de los bloques { ... } y se pega debajo con una coma.
   · Si se vacía una lista (por ejemplo  ideas: []  ), esa sección
     desaparece sola de la web y del índice de navegación.
   · Las imágenes están en assets/ y salen todas del propio PDF.
   ===================================================================== */

const CONTENIDO = {

  meta: {
    referencia: "Candidatura a PDB · Los Santos",
    frase: "No buscan ser una banda más. Buscan convertirse en un nombre que todos recuerden.",
    cierre: "El objetivo es sencillo, pero ambicioso: recuperar el nombre de los Cream Boyz, construir una organización sólida y convertir su presencia en Los Santos en un legado que perdure."
  },

  /* ---------------- TERRITORIO ---------------- */
  territorio: {
    nav: "Territorio",
    titulo: "Territorio",
    subtitulo: "Nuestro barrio",
    barrio: "Life Invader",
    parrafos: [
      "Con el compromiso de mantener nuestro territorio firme y respetado, vivimos en Life Invader, el barrio que nos representa.",
      "Life Invader es nuestro hogar y nuestra base de operaciones. Desde aquí organizamos todo, vigilamos la zona y protegemos lo que nos pertenece. No es solo un lugar en el mapa, es el punto donde se toman decisiones y se mantiene el control.",
      "En estas calles se entra con respeto, se actúa con permiso y se entiende que cada norma existe por una razón."
    ],
    fotos: [
      "assets/territorio/01.webp",
      "assets/territorio/02.webp",
      "assets/territorio/03.webp"
    ],
    mapa: "assets/territorio/mapa.webp",
    mapaNota: "Life Invader"
  },

  /* ---------------- HISTORIA ---------------- */
  historia: {
    nav: "Historia",
    titulo: "Historia",
    subtitulo: "De dónde venimos",
    capitulos: [
      { titulo: "El origen",
        texto: "Los Cream Boyz nacieron en las calles de Los Santos como un pequeño grupo unido por una misma mentalidad: sobrevivir, progresar y construir algo que les perteneciera. Con el paso del tiempo, aquella agrupación fue creciendo hasta convertirse en una organización con sus propios códigos, contactos y una identidad basada en la lealtad y el respeto." },
      { titulo: "Aprender las calles",
        texto: "Durante sus primeros años, los Cream Boyz se mantuvieron en un segundo plano, creciendo poco a poco y aprendiendo cómo funcionaban las calles. Cada negocio, cada contacto y cada conflicto ayudó a formar una estructura cada vez más organizada, capaz de moverse con discreción y aprovechar las oportunidades que aparecían." },
      { titulo: "El silencio",
        texto: "Sin embargo, el crecimiento también trajo problemas. Las disputas con otras organizaciones, las traiciones y la presión de las autoridades provocaron que el grupo perdiera parte de su fuerza. Muchos miembros terminaron tomando caminos diferentes y, durante un tiempo, el nombre de los Cream Boyz quedó prácticamente en silencio." },
      { titulo: "Recuperar el nombre",
        texto: "Años después, llegó el momento de recuperar ese nombre. La nueva etapa está liderada por Daren Ross, quien asume la responsabilidad de devolver a la organización la fuerza que tuvo en el pasado. A su lado se encuentra Kilo Ross, su hermano y una de las personas de mayor confianza dentro de la estructura. Ambos comparten una visión clara sobre el futuro de la organización y están decididos a construir algo que pueda mantenerse durante años." },
      { titulo: "La pieza que faltaba",
        texto: "Para llevar ese proyecto a cabo cuentan con Marlon Vance, que ocupa el puesto de Subjefe. Su experiencia dentro del mundo criminal, su mente calculadora y sus conocimientos sobre logística, economía y organización lo convierten en una de las piezas fundamentales de esta nueva etapa. Mientras Daren marca el rumbo, Marlon se encarga de ayudar a convertir esa visión en una estructura sólida y funcional." },
      { titulo: "Una nueva generación",
        texto: "Junto a ellos comienza a formarse una nueva generación de miembros. Personas con historias, personalidades y experiencias diferentes, pero que comparten una misma intención: encontrar su lugar dentro de una organización que les permita crecer y construir una reputación propia." },
      { titulo: "Moverse con cabeza",
        texto: "Los Cream Boyz no buscan depender únicamente de la fuerza. Su intención es desarrollar una organización capaz de generar recursos, establecer relaciones, crear contactos y moverse de manera inteligente dentro de la ciudad. La disciplina y la discreción serán fundamentales para evitar repetir los errores que llevaron a la organización a perder fuerza en el pasado." },
      { titulo: "La lealtad como pilar",
        texto: "Dentro de la banda, la lealtad será uno de los pilares principales. La confianza deberá ganarse mediante hechos y cada miembro tendrá que entender que sus acciones pueden afectar al conjunto. El respeto hacia la jerarquía, la unidad y la capacidad de trabajar como un equipo serán indispensables para formar parte de la organización." },
      { titulo: "La nueva etapa",
        texto: "Ahora, bajo el liderazgo de Daren Ross, los Cream Boyz comienzan una nueva etapa. Una generación diferente toma las calles con una visión más organizada, ambiciosa y preparada para crecer desde abajo. El objetivo es sencillo, pero ambicioso: recuperar el nombre de los Cream Boyz, construir una organización sólida y convertir su presencia en Los Santos en un legado que perdure. No buscan ser una banda más. Buscan convertirse en un nombre que todos recuerden." }
    ]
  },

  /* ---------------- IDENTIFICATIVO ---------------- */
  identificativo: {
    nav: "Identificativo",
    titulo: "Identificativo",
    subtitulo: "Cómo se nos reconoce",
    parrafos: [
      "Nuestro identificativo se basa en una combinación de color crema y marrón claro, dos tonalidades que representan la esencia y la presencia de nuestra banda. Son colores que hemos llevado más allá de una simple elección estética, convirtiéndolos en una parte reconocible de nuestra identidad, presente tanto en nuestros vehículos como en nuestra vestimenta.",
      "Nuestro identificativo no es únicamente un conjunto de colores; es una forma de representar quiénes somos, nuestra unión y nuestra manera de entender la banda. Cada vehículo, cada conjunto y cada detalle que comparte esta combinación contribuye a construir una identidad propia y reconocible dentro de la ciudad."
    ],
    tonos: [
      { nombre: "Crema", hex: "#F4E6CF" },
      { nombre: "Marrón claro", hex: "#A87F55" }
    ],
    figuras: ["assets/identidad/01.webp", "assets/identidad/02.webp"],
    vehiculosTitulo: "¿Cómo nos movemos?",
    vehiculos: [
      "assets/vehiculos/01.webp",
      "assets/vehiculos/02.webp",
      "assets/vehiculos/03.webp",
      "assets/vehiculos/04.webp"
    ]
  },

  /* ---------------- ESTRUCTURA INTERNA ---------------- */
  estructura: {
    nav: "Estructura",
    titulo: "Estructura interna",
    subtitulo: "Cómo nos organizamos",
    niveles: [
      { rango: "Jefe",            miembros: ["Daren Ross"] },
      { rango: "Subjefe",         miembros: ["Marlon Vance"] },
      { rango: "Miembro Oficial", miembros: ["Kilo Ross", "Kyla Jordan", "Javon Carter", "Jamal White", "Malcom. D", "Tyrese Grant"] },
      { rango: "Hommies",         miembros: ["Kairo Johnson", "Donovan Lewis"] }
    ],
    funciones: [
      { rango: "Jefe",
        texto: "Se encargará de los pagos, de llevar el barrio y organizar a los demás. Siempre contará con sus personas de máxima confianza para desempeñar sus funciones e inculcará los valores a los nuevos. Es la persona que estará al mando y siempre tendrá la última palabra." },
      { rango: "Subjefe",
        texto: "Esta persona será la que tenga máxima confianza y será representante en las charlas y reuniones que tengan que ver con el barrio u otros barrios. Los subjefes serán personas que se hayan ganado el respeto de todos los miembros. Es el encargado de gestionar el barrio siempre y cuando el jefe no esté operativo." },
      { rango: "Miembro Oficial",
        texto: "Se encargarán de cometer atracos, así como de traficar con droga o ajustes de cuentas. Son personas que se han ganado el respeto y la confianza de los altos rangos." },
      { rango: "Hommies",
        texto: "Son personas que forman parte del barrio, pero que no participan en las actividades del mismo. Luchan por ganarse el respeto de los miembros y poder ser gangsters algún día. Todos en el barrio son hermanos y por tanto se les aplicará la misma protección que a cualquiera." }
    ]
  },

  /* ---------------- INTEGRANTES ---------------- */
  integrantes: {
    nav: "Integrantes",
    titulo: "Integrantes",
    subtitulo: "Quiénes formamos la organización",
    miembros: [
      {
        nombre: "Daren Ross", rango: "Jefe", img: "assets/miembros/daren.webp",
        bio: [
          "Daren Ross nació un 28 de julio de 2000 en un barrio de Los Santos. Su familia estaba compuesta por su madre y su padre; su madre murió al poco de nacer Daren y, por culpa de eso, su padre tuvo que dedicarse a traficar con drogas para conseguir dinero. El que lo crio básicamente fue su padre, Neo, el que siempre estaba con él.",
          "Daren, cuando fue creciendo, vio lo que su padre hacía y tomó como ejemplo ese estilo de vida. Su padre le enseñó todo lo que sabía: cómo moverse, cómo hacer buenos negocios y con quién juntarse. Su padre estaba metido en una organización llamada Cream Boyz; pasó el tiempo y ya comenzaban a traficar con armas y drogas al mismo tiempo.",
          "En una recogida de un cargamento, Daren y su padre acudieron al punto de recogida; lo que no sabían es que la policía los estaba esperando. Allí se formó un tiroteo bastante grande en el cual su padre acabó abatido. Daren pudo escapar ileso de allí, pero fue rápido a contárselo a su hermano y decidieron abandonar la isla y probar a comenzar la vida en otro sitio.",
          "Pasaron los años y Daren decidió volver al sitio donde se había criado y había tenido un respeto: la ciudad de Los Santos. Volvió al barrio que lo vio crecer y que tantas alegrías y disgustos le había dado; allí tenía un grupo de amigos del mismo barrio esperándole con los brazos abiertos. Daren tomaría el legado de su padre que antaño tuvo."
        ]
      },
      {
        nombre: "Marlon Vance", rango: "Subjefe", img: "assets/miembros/marlon.webp",
        bio: [
          "Marlon nació y creció en los bloques del sur del Bronx, Nueva York. En un entorno marcado por la escasez, la presión de las calles y la ausencia de una figura paterna, aprendió desde muy joven a valerse por sí mismo. Mientras su madre trabajaba dobles turnos para sacar adelante el hogar, Marlon creció entendiendo que nadie iba a regalarle nada.",
          "Durante su adolescencia comenzó a introducirse en el mundo del crimen urbano, empezando desde abajo como vigilante en las esquinas de su barrio. Su sangre fría bajo presión, su discreción y su capacidad para organizar movimientos y mantener el control de la mercancía le permitieron ganarse el respeto de quienes lo rodeaban y ascender rápidamente dentro del entorno criminal.",
          "Con el paso de los años, Marlon pasó a formar parte de la estructura de los Cream Boyz. Su lealtad, su mente calculadora y su firmeza a la hora de hacer cumplir las reglas hicieron que se ganara la confianza de sus superiores hasta convertirse en Subjefe de la organización. Desde esa posición, asumió el control de la logística operativa, la gestión del dinero y la disciplina interna.",
          "Ahora, Marlon llega a Los Santos con una misión clara: liderar la expansión de los Cream Boyz. Su objetivo es establecer nuevas alianzas, abrirse camino dentro de los mercados ilícitos y consolidar la presencia de la organización en una ciudad donde todavía nadie conoce hasta dónde está dispuesto a llegar."
        ]
      },
      {
        nombre: "Kilo Ross", rango: "Miembro Oficial", img: "assets/miembros/kilo.webp",
        bio: [
          "Kilo Ross nació el 28 de julio de 2000 en uno de los barrios más conflictivos de Los Santos, junto a su hermano Daren Ross. Su madre murió poco después del nacimiento de Daren, dejando a su padre Neo a cargo de los dos hermanos y de la familia. Para poder mantenerlos, Neo comenzó a traficar con drogas y terminó entrando en una organización conocida como Cream Boyz.",
          "Kilo y Daren crecieron rodeados de ese ambiente y desde pequeños aprendieron de su padre cómo moverse y sobrevivir en las calles. Con los años, ambos empezaron a involucrarse cada vez más en los negocios de Neo, incluyendo el tráfico de armas y drogas. Durante la recogida de un cargamento, la policía los sorprendió y se produjo un gran tiroteo en el que Neo acabó abatido.",
          "Tras aquello, Kilo y Daren abandonaron Los Santos para alejarse de los problemas y comenzar una nueva vida lejos de su pasado. Después de varios años, Kilo decidió regresar junto a su hermano al barrio donde había crecido y donde todavía conservaba viejas amistades. Ahora Kilo está decidido a recuperar el respeto de su familia y continuar el legado que su padre dejó atrás en las calles de Los Santos."
        ]
      },
      {
        nombre: "Kyla Jordan", rango: "Miembro Oficial", img: "assets/miembros/kyla.webp",
        bio: [
          "Kyla Jordan creció en un barrio humilde, donde desde pequeña estuvo rodeada de dificultades económicas y un ambiente en el que aprender a defenderse era parte del día a día. La ausencia de su padre hizo que tuviera que madurar antes de tiempo y aprender a valerse por sí misma.",
          "Durante su adolescencia comenzó a relacionarse con personas poco recomendables y a conocer de cerca la vida de la calle. Al principio solo buscaba conseguir dinero para ayudar a su familia y tener una vida mejor, pero con el tiempo descubrió que tenía carácter, sangre fría y facilidad para desenvolverse en situaciones complicadas.",
          "Los años fueron pasando y Kyla empezó a ganarse cierto respeto dentro de su entorno. Nunca fue de confiar fácilmente en los demás, pero cuando alguien conseguía ganarse su confianza, su lealtad era absoluta. Su ambición también fue creciendo, al igual que sus ganas de dejar atrás la vida que conocía.",
          "Con pocas oportunidades y demasiadas cuentas pendientes, Kyla decidió que había llegado el momento de cambiar de rumbo. Preparó sus cosas y tomó una decisión que cambiaría su vida: irse lejos y empezar de cero, sin saber todavía todo lo que le esperaba."
        ]
      },
      {
        nombre: "Javon Carter", rango: "Miembro Oficial", img: "assets/miembros/javon.webp",
        bio: [
          "Javon “Von” Carter nació y creció en uno de los barrios más conflictivos de Los Santos. Desde pequeño tuvo que aprender a buscarse la vida y a moverse por su cuenta, ya que nunca tuvo demasiadas facilidades. Su entorno hizo que conociera desde muy joven el lado más duro de la ciudad y que acabara relacionándose con gente metida en la calle.",
          "Con el paso de los años, Von empezó a ganarse el respeto de los que tenía a su alrededor gracias a su carácter tranquilo, su lealtad y su forma de afrontar los problemas. No suele hablar de más y prefiere demostrar las cosas con hechos. Para él, la confianza y el respeto hacia los suyos están por encima de todo.",
          "A sus 24 años, Von quiere dejar atrás los malos momentos de su pasado y hacerse un nombre en Los Santos. Su objetivo es crecer junto a los Cream Boyz, conseguir una posición dentro de la banda y demostrar que está dispuesto a hacer lo necesario por los suyos."
        ]
      },
      {
        nombre: "Jamal White", rango: "Miembro Oficial", img: "assets/miembros/jamal.webp",
        bio: [
          "Jamal creció en una familia que nunca tuvo demasiado dinero. Desde pequeño aprendió que, si quería conseguir algo, tendría que trabajar el doble que los demás. Su padre pasaba la mayor parte del tiempo trabajando y su madre hacía todo lo posible por mantener a la familia unida, aunque las dificultades económicas eran constantes.",
          "Al llegar a la adolescencia, comenzó a buscar formas de ganar dinero por su cuenta. Empezó con pequeños trabajos y recados, pero pronto descubrió que en la calle podía conseguir mucho más de lo que ganaba trabajando honradamente. Poco a poco comenzó a involucrarse en negocios cada vez más turbios, aprendiendo a moverse con discreción y a no hablar más de la cuenta.",
          "Con los años desarrolló una personalidad fría y calculadora. No le interesa aparentar ser el más peligroso de un grupo; prefiere observar, pensar y actuar cuando sabe que tiene las cosas a su favor. Para él, el dinero siempre ha sido una herramienta para conseguir libertad y demostrar que puede llegar mucho más lejos de donde empezó.",
          "Después de varios problemas con personas de su antiguo entorno, decidió cortar con todo aquello y buscar una nueva oportunidad. Consciente de que el cambio suponía empezar prácticamente desde cero, tomó la decisión de marcharse lejos y construir su propio futuro."
        ]
      },
      {
        nombre: "Tyrese Grant", rango: "Miembro Oficial", img: "assets/miembros/tyrese.webp",
        bio: [
          "Tyrese pasó gran parte de su infancia cambiando constantemente de casa debido a los problemas económicos de su familia. Nunca tuvo demasiadas comodidades y desde muy joven aprendió que las cosas podían desaparecer de un día para otro. Aquella inestabilidad terminó convirtiéndolo en una persona desconfiada, pero también muy independiente.",
          "En su adolescencia encontró en sus amigos una especie de segunda familia. Junto a ellos comenzó a pasar cada vez más tiempo en la calle y terminó metiéndose en problemas que al principio parecían pequeños. Con el tiempo, aquellas situaciones fueron aumentando y tuvo que aprender a mantener la calma incluso cuando todo estaba en su contra.",
          "Nunca fue el más fuerte ni el que más hablaba, pero sí alguien que sabía mantenerse firme cuando las cosas se complicaban. La lealtad se convirtió en uno de sus principios más importantes, especialmente después de descubrir que algunas personas en las que confiaba eran capaces de darle la espalda por dinero.",
          "Tras varios años viviendo de esa manera, comprendió que necesitaba alejarse de su antiguo entorno antes de terminar perdiéndolo todo. Sin grandes planes ni demasiadas garantías, decidió abandonar su vida anterior y buscar un lugar donde pudiera empezar nuevamente, esta vez bajo sus propias condiciones."
        ]
      },
      {
        nombre: "Malcom DeShawn", rango: "Miembro Oficial", img: "assets/miembros/malcom.webp",
        bio: [
          "Malcom pasó gran parte de su infancia cambiando constantemente de casa debido a los problemas económicos de su familia. Nunca tuvo demasiadas comodidades y desde muy joven aprendió que las cosas podían desaparecer de un día para otro. Aquella inestabilidad terminó convirtiéndolo en una persona desconfiada, pero también muy independiente.",
          "En su adolescencia encontró en sus amigos una especie de segunda familia. Junto a ellos comenzó a pasar cada vez más tiempo en la calle y terminó metiéndose en problemas que al principio parecían pequeños. Con el tiempo, aquellas situaciones fueron aumentando y tuvo que aprender a mantener la calma incluso cuando todo estaba en su contra.",
          "Nunca fue el más fuerte ni el que más hablaba, pero sí alguien que sabía mantenerse firme cuando las cosas se complicaban. La lealtad se convirtió en uno de sus principios más importantes, especialmente después de descubrir que algunas personas en las que confiaba eran capaces de darle la espalda por dinero.",
          "Tras varios años viviendo de esa manera, comprendió que necesitaba alejarse de su antiguo entorno antes de terminar perdiéndolo todo. Sin grandes planes ni demasiadas garantías, decidió abandonar su vida anterior y buscar un lugar donde pudiera empezar nuevamente, esta vez bajo sus propias condiciones."
        ]
      },
      {
        nombre: "Kairo Johnson", rango: "Hommie", img: "assets/miembros/kairo.webp",
        bio: [
          "Kairo Johnson nació y creció en las calles de Los Santos, en un barrio donde aprendió desde pequeño a valerse por sí mismo. Siempre fue un chico tranquilo, pero con carácter, y pasó gran parte de su juventud junto a un grupo de amigos con los que compartía las mismas ganas de progresar y salir adelante. Desde muy joven aprendió que en las calles había que saber en quién confiar y cuándo mantenerse al margen de los problemas.",
          "Con el tiempo, Kairo empezó a conocer el mundo de Cream Boyz, atraído por la unión que existía entre sus miembros y la vida que llevaban en las calles. Poco a poco fue ganándose la confianza de la gente del barrio hasta convertirse en uno más dentro del grupo. Su forma de ser y su lealtad hicieron que empezaran a contar con él para diferentes asuntos.",
          "Después de pasar una temporada fuera de Los Santos intentando buscarse la vida y conocer otros lugares, Kairo decidió regresar a sus raíces. Volvió con otra mentalidad, más experiencia y nuevos objetivos, dispuesto a dejar atrás el pasado y empezar una nueva etapa. Ahora quiere ganarse su propio nombre y demostrar de lo que es capaz dentro de Cream Boyz, sin depender de nadie y construyendo su propio camino."
        ]
      },
      {
        nombre: "Donovan Lewis", rango: "Hommie", img: "assets/miembros/donovan.webp",
        bio: [
          "Donovan Lewis nació en 2002 en Los Santos y pasó toda su infancia en un pequeño barrio de la ciudad. Desde joven destacó por ser una persona bastante independiente y siempre buscaba la manera de conseguir dinero por su cuenta. Mientras otros chicos de su edad se metían en problemas, Donovan encontró su sitio entre los coches, aprendiendo mecánica y haciendo pequeños negocios por las calles del barrio.",
          "Con el paso de los años, empezó a conocer a diferentes personas y a moverse por distintos lugares de Los Santos. Fue entonces cuando coincidió con varios miembros de Cream Boyz, con quienes comenzó a pasar cada vez más tiempo. Su facilidad para tratar con la gente, su lealtad y su manera de moverse por el barrio hicieron que poco a poco se ganara la confianza del grupo.",
          "Después de varios años fuera de la ciudad intentando buscarse la vida y conseguir nuevas oportunidades, Donovan decidió regresar a Los Santos. Volvió con más experiencia, nuevas metas y una mentalidad completamente diferente. Esta vez no quería limitarse a seguir los pasos de otros, sino construir su propio camino y demostrar lo que podía aportar.",
          "Ahora Donovan está dispuesto a empezar una nueva etapa junto a Cream Boyz, ganándose poco a poco su lugar y construyendo su propio nombre dentro del grupo."
        ]
      }
    ]
  },

  /* ---------------- RELACIÓN CON LA POLICÍA ---------------- */
  policia: {
    nav: "Policía",
    titulo: "Relación con la policía",
    subtitulo: "Cómo entendemos el conflicto",
    imagen: "assets/policia/redada.jpg",
    parrafos: [
      "La relación con las fuerzas de seguridad será cordial, lo dice bien claro en el código: respeto para que la policía no se pase el día entrometiéndose en los asuntos del barrio.",
      "Esto implica que no habrá un enfrentamiento sin motivo o solo por diversión, sino que debemos mantenerles alejados del bloque para evitar problemas; nosotros solucionamos nuestros propios negocios.",
      "No quita que si se decide un rol agresivo por parte de la policía, o surgiese por cualquier motivo, no se actuará. Evidentemente, el odio hacia los agentes del sistema está ahí."
    ]
  },

  /* ---------------- OBJETIVOS ---------------- */
  objetivos: {
    nav: "Objetivos",
    titulo: "Objetivos",
    subtitulo: "Hacia dónde vamos",
    plazos: [
      { plazo: "Corto plazo", items: [
        "Defender nuestros colores y, sobre todo, a las familias que residen en el barrio, y tener un listón alto a nivel de trabajo y negocio.",
        "Hacer tratos con otras bandas para conseguir contactos de droga y armas, e ir haciendo el nombre de los Cream Boyz reconocido por las calles.",
        "Encontrar fuentes de ingresos legales e ilegales: gracias a los dotes vividos en la calle, la mecánica sería un punto fuerte para encontrar trabajo rápido legalmente.",
        "Conseguir armamento para mantener nuestra seguridad y nuestras vidas a resguardo de cualquier persona o grupo hostil que intente atentar contra nuestros objetivos o nuestro bienestar.",
        "Organizar peleas clandestinas con otros barrios con apuestas de por medio, y tener el respeto de la gente del barrio.",
        "Defender los signos de la banda: territorios, símbolos, gorras..."
      ]},
      { plazo: "Largo plazo", items: [
        "Ser una de las organizaciones más respetadas y con más nombre de la ciudad.",
        "Expandirnos por territorios cercanos (Vinewood, universidad...).",
        "Conseguir ser de los principales pilares en el mundo de la venta de estupefacientes.",
        "Hacer tratos con organizaciones más pequeñas."
      ]}
    ]
  },

  /* ---------------- QUÉ GENERA EL PROYECTO ----------------
     Esta sección no es un apartado nuevo del PDF: reagrupa los objetivos
     y las normas que ya están en la presentación para dejar claro qué rol
     genera el proyecto. Si preferís no incluirla, dejad  ideas: []        */
  proyecto: {
    nav: "Proyecto",
    titulo: "Qué genera el proyecto",
    subtitulo: "Sale de los objetivos y del código de esta presentación",
    ideas: [
      { titulo: "Rol con la policía, no tiroteos por defecto",
        texto: "La relación con las fuerzas de seguridad será cordial y no habrá enfrentamientos sin motivo o solo por diversión. El conflicto aparece cuando hay una razón detrás." },
      { titulo: "Peleas clandestinas entre barrios",
        texto: "Organizar peleas clandestinas con otros barrios con apuestas de por medio: eventos que meten a otros jugadores dentro de la trama." },
      { titulo: "Tratos y contactos",
        texto: "Hacer tratos con otras bandas para conseguir contactos de droga y armas, y con organizaciones más pequeñas, para ir haciendo el nombre de los Cream Boyz reconocido por las calles." },
      { titulo: "El barrio y su gente",
        texto: "Defender a las familias que residen en el barrio y ganarnos el respeto de la gente que vive en él. En estas calles se entra con respeto y se actúa con permiso." },
      { titulo: "Vía legal y vía ilegal",
        texto: "Buscar fuentes de ingresos legales e ilegales. La mecánica es el punto fuerte para el trabajo legal, aprovechando los dotes vividos en la calle." },
      { titulo: "Una estructura que crece",
        texto: "Los Hommies luchan por ganarse el respeto de los miembros y poder ser gangsters algún día: hay recorrido dentro de la organización para quien entra desde abajo." }
    ]
  },

  /* ---------------- CONTACTO ---------------- */
  contacto: {
    nav: "Contacto",
    titulo: "Steam / Discord",
    subtitulo: "Datos de los integrantes",
    personas: [
      { nombre: "Daren Ross",     usuario: "25.keta",      discord: "726821209605668924",  steam: "https://steamcommunity.com/profiles/76561199782360102/" },
      { nombre: "Marlon Vance",   usuario: "xzcastro",      discord: "722079323867316324",  steam: "https://steamcommunity.com/profiles/76561199182996007/" },
      { nombre: "Kilo Ross",      usuario: ".paauoto22",    discord: "1194037237957001317", steam: "https://steamcommunity.com/profiles/76561199812632991/" },
      { nombre: "Kyla Jordan",    usuario: "mariwani",      discord: "682260087490084897",  steam: "https://steamcommunity.com/profiles/76561199094783558/" },
      { nombre: "Javon Carter",   usuario: "mml.77",        discord: "642703201967013889",  steam: "https://steamcommunity.com/profiles/76561199802158010/" },
      { nombre: "Jamal White",    usuario: ".1zan.",        discord: "835276265703473203",  steam: "https://steamcommunity.com/profiles/76561199235564505/" },
      { nombre: "Tyrese Grant",   usuario: ".7trfnn",       discord: "1118996545426178097", steam: "https://steamcommunity.com/profiles/76561199073883572/" },
      { nombre: "Malcom DeShawn", usuario: "blanquitagod",  discord: "625040165496291363",  steam: "https://steamcommunity.com/profiles/76561199099276865/" },
      { nombre: "Kairo Johnson",  usuario: "danielenko",    discord: "962339662725267476",  steam: "https://steamcommunity.com/profiles/76561199652120526/" },
      { nombre: "Donovan Lewis",  usuario: "nct_blue",      discord: "645746415728853022",  steam: "https://steamcommunity.com/profiles/76561199534664497/" }
    ]
  }
};


/* =====================================================================
   A PARTIR DE AQUÍ NO HACE FALTA TOCAR NADA
   ===================================================================== */

(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const hay = a => Array.isArray(a) && a.length > 0;
  const parr = a => (a || []).map(p => "<p>" + p + "</p>").join("");

  function cabecera(d) {
    // cada palabra del título se envuelve en su propia máscara: al entrar en
    // pantalla se revelan una a una, igual que el título de la portada.
    const palabras = String(d.titulo).split(" ").map(w =>
      '<span class="tmask"><span>' + w + "</span></span>"
    ).join(" ");
    return '<h2 class="titulo" data-rv><span class="titulo__linea">' + palabras + "</span>" +
           (d.subtitulo ? "<small>" + d.subtitulo + "</small>" : "") + "</h2>";
  }

  /* ---------- secciones ---------- */

  function rTerritorio(d) {
    if (!hay(d.parrafos)) return "";
    const polas = hay(d.fotos)
      ? '<div class="polas" data-rv>' + d.fotos.map((f, i) =>
          '<figure class="pola" style="--r:' + [-2.5, 1.8, -1.2][i % 3] + 'deg"><img class="clicable" src="' + f + '" alt="Territorio de los Cream Boyz" data-titulo="' + (d.barrio || "Territorio") + '"><span class="lupa" aria-hidden="true">+</span></figure>'
        ).join("") + "</div>"
      : "";
    const mapa = d.mapa
      ? '<div class="mapa panel" data-rv>' +
          '<div class="mapa__marco"><img class="clicable" src="' + d.mapa + '" alt="Mapa del barrio" data-titulo="' + (d.mapaNota || "Mapa del barrio") + '"><span class="lupa" aria-hidden="true">+</span></div>' +
          '<p class="mapa__nota">' + (d.mapaNota || "") + "</p>" +
        "</div>"
      : "";
    return '<div class="wrap"><div class="terr">' +
        '<div class="panel panel--lectura" data-rv>' +
          '<p class="terr__barrio">' + (d.barrio || "") + "</p>" + parr(d.parrafos) +
        "</div>" + polas + mapa +
      "</div></div>";
  }

  function rHistoria(d) {
    if (!hay(d.capitulos)) return "";
    return '<div class="wrap"><div class="panel panel--lectura"><div class="tl"><div class="tl__relleno" id="tlRelleno"></div>' + d.capitulos.map((c, i) =>
      '<article class="cap" data-rv><span class="cap__punto"></span>' +
        '<p class="cap__num">' + String(i + 1).padStart(2, "0") + "</p>" +
        '<h3 class="cap__titulo">' + c.titulo + "</h3><p>" + c.texto + "</p></article>"
    ).join("") + "</div></div></div>";
  }

  function rIdentificativo(d) {
    if (!hay(d.parrafos)) return "";
    const tonos = hay(d.tonos)
      ? '<div class="tonos">' + d.tonos.map(t =>
          '<div class="tono"><i style="background:' + t.hex + '"></i><span>' + t.nombre + "</span></div>"
        ).join("") + "</div>"
      : "";
    const figs = d.figuras || [];
    const coches = hay(d.vehiculos)
      ? '<div class="coches"><h3 class="coches__t" data-rv>' + (d.vehiculosTitulo || "") + "</h3>" +
        '<div class="garaje" data-rv>' + d.vehiculos.map(v =>
          '<div class="coche"><img class="clicable" src="' + v + '" alt="Vehículo de la banda"><span class="lupa" aria-hidden="true">+</span></div>'
        ).join("") + "</div></div>"
      : "";
    return '<div class="wrap">' +
      '<div class="ident" data-rv>' +
        '<div class="ident__fig">' + (figs[0] ? '<img class="clicable" src="' + figs[0] + '" alt=""><span class="lupa" aria-hidden="true">+</span>' : "") + "</div>" +
        '<div class="panel">' + parr(d.parrafos) + tonos + "</div>" +
        '<div class="ident__fig">' + (figs[1] ? '<img class="clicable" src="' + figs[1] + '" alt=""><span class="lupa" aria-hidden="true">+</span>' : "") + "</div>" +
      "</div>" + coches + "</div>";
  }

  function rEstructura(d) {
    if (!hay(d.niveles) && !hay(d.funciones)) return "";
    const organi = hay(d.niveles)
      ? '<div class="organi panel" data-rv>' + d.niveles.map((n, i) =>
          (i ? '<span class="hilo"></span>' : "") +
          '<div class="nivel"><p class="nivel__t">' + n.rango + "</p>" +
            (n.miembros.length > 1
              ? '<div class="oficiales">' + n.miembros.map(m => '<span class="chapa">' + m + "</span>").join("") + "</div>"
              : '<span class="chapa">' + n.miembros[0] + "</span>") +
          "</div>"
        ).join("") + "</div>"
      : "";
    const fun = hay(d.funciones)
      ? '<div class="rangos">' + d.funciones.map(f =>
          '<article class="rango" data-rv><h3>' + f.rango + "</h3><p>" + f.texto + "</p></article>"
        ).join("") + "</div>"
      : "";
    return '<div class="wrap">' + organi + fun + "</div>";
  }

  function rIntegrantes(d) {
    if (!hay(d.miembros)) return "";
    return '<div class="wrap"><div class="crew">' + d.miembros.map((m, i) =>
      '<button class="card" type="button" data-miembro="' + i + '" data-rv data-d="' + (i % 3) + '">' +
        '<span class="card__fig"><img src="' + m.img + '" alt="' + m.nombre + '" loading="lazy"></span>' +
        '<span class="card__nombre">' + m.nombre + "</span>" +
        '<span class="card__rango">' + m.rango + "</span>" +
        '<span class="card__ver">Ver ficha</span>' +
      "</button>"
    ).join("") + "</div></div>";
  }

  function rPolicia(d) {
    if (!hay(d.parrafos)) return "";
    const escena = d.imagen
      ? '<figure class="escena" data-rv data-d="1">' +
          '<img class="clicable" src="' + d.imagen + '" alt="Intervención policial sobre los Cream Boyz">' +
          '<span class="lupa" aria-hidden="true">+</span>' +
          '<span class="escena__marco" aria-hidden="true"></span>' +
        "</figure>"
      : "";
    const texto = '<div class="panel aviso" data-rv>' + parr(d.parrafos) + "</div>";
    return '<div class="wrap"><div class="policia-grid">' + texto + escena + "</div></div>";
  }

  function rObjetivos(d) {
    if (!hay(d.plazos)) return "";
    return '<div class="wrap"><div class="plazos">' + d.plazos.map((p, i) =>
      '<section class="plazo panel" data-rv data-d="' + i + '">' +
        '<h3 class="plazo__t">' + p.plazo + "</h3><ul>" +
        p.items.map(x => "<li>" + x + "</li>").join("") + "</ul></section>"
    ).join("") + "</div></div>";
  }

  function rProyecto(d) {
    if (!hay(d.ideas)) return "";
    return '<div class="wrap"><div class="ideas">' + d.ideas.map((x, i) =>
      '<article class="idea" data-rv data-d="' + (i % 3) + '"><h3>' + x.titulo + "</h3><p>" + x.texto + "</p></article>"
    ).join("") + "</div></div>";
  }

  function rContacto(d) {
    if (!hay(d.personas)) return "";
    return '<div class="wrap"><div class="contactos">' + d.personas.map(p =>
      '<div class="contacto" data-rv>' +
        '<span class="contacto__quien"><b>' + p.nombre + "</b>" +
        (p.usuario ? '<span class="did">Usuario de Discord: ' + p.usuario + "</span>" : "") +
        '<span class="did">Discord: ' + p.discord + "</span></span>" +
        '<a href="' + p.steam + '" target="_blank" rel="noopener">Steam</a>' +
      "</div>"
    ).join("") + "</div></div>";
  }

  const SECCIONES = [
    { id: "territorio",     datos: CONTENIDO.territorio,     render: rTerritorio },
    { id: "historia",       datos: CONTENIDO.historia,       render: rHistoria },
    { id: "identificativo", datos: CONTENIDO.identificativo, render: rIdentificativo },
    { id: "estructura",     datos: CONTENIDO.estructura,     render: rEstructura },
    { id: "integrantes",    datos: CONTENIDO.integrantes,    render: rIntegrantes },
    { id: "policia",        datos: CONTENIDO.policia,        render: rPolicia },
    { id: "objetivos",      datos: CONTENIDO.objetivos,      render: rObjetivos },
    { id: "proyecto",       datos: CONTENIDO.proyecto,       render: rProyecto },
    { id: "contacto",       datos: CONTENIDO.contacto,       render: rContacto }
  ];

  /* ---------- montaje ---------- */
  function montar() {
    $("#heroRef").textContent   = CONTENIDO.meta.referencia || "";
    $("#heroFrase").textContent = CONTENIDO.meta.frase || "";
    $("#cierreFrase").textContent = CONTENIDO.meta.cierre || "";

    const activas = [];
    SECCIONES.forEach(s => {
      const nodo = document.getElementById(s.id);
      if (!nodo) return;
      const cuerpo = s.datos ? s.render(s.datos) : "";
      if (!cuerpo) { nodo.remove(); return; }
      nodo.innerHTML = cabecera(s.datos) + cuerpo;
      activas.push(s);
    });

    const enlaces = [{ id: "portada", nav: "Inicio" }]
      .concat(activas.map(s => ({ id: s.id, nav: s.datos.nav })))
      .concat([{ id: "cierre", nav: "Cierre" }]);
    $("#railNav").innerHTML = enlaces.map((e, i) =>
      '<a class="rail__link" href="#' + e.id + '" data-target="' + e.id + '">' +
        "<span>" + String(i).padStart(2, "0") + "</span>" + e.nav + "</a>"
    ).join("");

    return enlaces;
  }

  /* ---------- ficha de integrante ---------- */
  function fichas() {
    const modal = $("#modal");
    if (!modal) return;
    let ultimo = null;

    function abrir(i) {
      const m = (CONTENIDO.integrantes.miembros || [])[i];
      if (!m) return;
      $("#modalImg").src = m.img;
      $("#modalImg").alt = m.nombre;
      $("#modalRango").textContent = m.rango;
      $("#modalNombre").textContent = m.nombre;
      $("#modalBio").innerHTML = parr(m.bio);
      modal.hidden = false;
      document.body.classList.add("is-locked");
      $(".modal__x", modal).focus();
    }
    function cerrar() {
      if (modal.hidden || modal.classList.contains("is-closing")) return;
      modal.classList.add("is-closing");
      setTimeout(() => {
        modal.hidden = true;
        modal.classList.remove("is-closing");
        document.body.classList.remove("is-locked");
        if (ultimo) ultimo.focus();
      }, 220);
    }

    document.addEventListener("click", e => {
      const card = e.target.closest(".card[data-miembro]");
      if (card) { ultimo = card; abrir(Number(card.dataset.miembro)); return; }
      if (e.target.closest("[data-cerrar]")) cerrar();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && !modal.hidden) cerrar();
    });
  }

  /* ---------- visor de fotos (lightbox) ---------- */
  function visor() {
    const cont = $("#visor");
    if (!cont) return;
    const img = $("#visorImg"), cap = $("#visorTitulo"), caja = $(".visor__caja", cont);
    let ultimo = null;

    function abrir(el, ev) {
      ultimo = el;
      img.src = el.currentSrc || el.src;
      img.alt = el.alt || "";
      cap.textContent = el.dataset.titulo || "";
      // origen del zoom: el punto donde se ha hecho clic (o el centro de la imagen si es teclado)
      let ox = 50, oy = 50;
      const r = el.getBoundingClientRect();
      if (ev && ev.clientX !== undefined && ev.clientX !== 0) {
        ox = ((ev.clientX - r.left) / r.width) * 100;
        oy = ((ev.clientY - r.top) / r.height) * 100;
      }
      caja.style.setProperty("--ox", ox + "%");
      caja.style.setProperty("--oy", oy + "%");
      cont.hidden = false;
      document.body.classList.add("is-locked");
      $(".visor__x", cont).focus();
    }
    function cerrar() {
      if (cont.hidden || cont.classList.contains("is-closing")) return;
      cont.classList.add("is-closing");
      setTimeout(() => {
        cont.hidden = true;
        cont.classList.remove("is-closing");
        document.body.classList.remove("is-locked");
        if (ultimo) ultimo.focus();
      }, 220);
    }

    document.addEventListener("click", e => {
      const foto = e.target.closest("img.clicable");
      if (foto) { abrir(foto, e); return; }
      if (e.target.closest("#visor [data-cerrar]")) cerrar();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && !cont.hidden) { cerrar(); return; }
      if ((e.key === "Enter" || e.key === " ") && e.target.matches("img.clicable")) {
        e.preventDefault(); abrir(e.target, null);
      }
    });
    $$("img.clicable").forEach(el => {
      el.tabIndex = 0;
      el.setAttribute("role", "button");
      if (!el.hasAttribute("aria-label")) el.setAttribute("aria-label", "Ampliar foto");
    });
  }

  /* ---------- comportamiento ---------- */
  function comportamiento(enlaces) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const puntero = window.matchMedia("(pointer: fine)").matches;

    const puerta = $("#puerta");
    function entrar() {
      puerta.classList.add("is-open");
      document.body.classList.remove("is-locked");
      document.body.classList.add("is-entered");
      setTimeout(() => puerta.remove(), 1000);
    }
    $("#puertaBtn").addEventListener("click", entrar);
    document.addEventListener("keydown", e => {
      if (puerta.isConnected && (e.key === "Enter" || e.key === " " || e.key === "Escape")) { e.preventDefault(); entrar(); }
    });
    setTimeout(() => $("#puertaBtn").focus(), 350);

    if ("IntersectionObserver" in window && !reduce) {
      const io = new IntersectionObserver((ent, obs) => {
        ent.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); obs.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      $$("[data-rv]").forEach(el => io.observe(el));
    } else {
      $$("[data-rv]").forEach(el => el.classList.add("is-in"));
    }

    /* ---------- resplandor que sigue al cursor (sólo con ratón de precisión) ---------- */
    const halo = $("#halo");
    if (halo && puntero && !reduce) {
      let visto = false;
      window.addEventListener("pointermove", e => {
        halo.style.setProperty("--mx", e.clientX + "px");
        halo.style.setProperty("--my", e.clientY + "px");
        if (!visto) { visto = true; halo.classList.add("is-activo"); }
      }, { passive: true });
      window.addEventListener("pointerleave", () => halo.classList.remove("is-activo"));
    } else if (halo) {
      halo.remove();
    }

    /* ---------- índice: marcador que se desliza hasta el enlace activo ---------- */
    const nav = $("#railNav");
    const pista = document.createElement("span");
    pista.className = "rail__pista";
    pista.setAttribute("aria-hidden", "true");
    nav.appendChild(pista);
    function moverPista(link) {
      if (!link) return;
      pista.style.top = (link.offsetTop + link.offsetHeight / 2) + "px";
      pista.classList.add("is-visible");
    }

    const links = $$(".rail__link"), mapa = {};
    links.forEach(l => { mapa[l.dataset.target] = l; });
    if ("IntersectionObserver" in window) {
      const spy = new IntersectionObserver(ent => {
        ent.forEach(en => {
          const l = mapa[en.target.id];
          if (l && en.isIntersecting) {
            links.forEach(x => x.classList.remove("is-active"));
            l.classList.add("is-active");
            moverPista(l);
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      enlaces.forEach(e => { const n = document.getElementById(e.id); if (n) spy.observe(n); });
    }
    moverPista(links[0]);

    const toggle = $("#railToggle"), navMovil = $("#railNav");
    toggle.addEventListener("click", () => {
      const abierto = navMovil.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(abierto));
    });
    navMovil.addEventListener("click", e => {
      if (e.target.closest(".rail__link")) {
        navMovil.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    /* ---------- botón flotante "volver arriba" (se oculta al llegar al pie, para no solapar el enlace) ---------- */
    const arriba = $("#arriba"), pie = $(".pie");
    if (arriba) {
      arriba.addEventListener("click", () => {
        $("#portada").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      });
    }
    if (arriba && pie && "IntersectionObserver" in window) {
      const obsPie = new IntersectionObserver(ent => {
        ent.forEach(en => arriba.classList.toggle("is-tapado", en.isIntersecting));
      }, { rootMargin: "0px 0px 0px 0px" });
      obsPie.observe(pie);
    }

    /* ---------- relleno de la línea de tiempo según el scroll ---------- */
    const tl = $(".tl"), tlRelleno = $("#tlRelleno");

    const barra = $("#barra"), heroBg = $("#heroBg");
    let tick = false;
    function pintar() {
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      barra.style.width = (alto > 0 ? (y / alto) * 100 : 0) + "%";
      if (heroBg && !reduce && y < window.innerHeight * 1.2) {
        heroBg.style.transform = "translate3d(0," + (y * 0.16) + "px,0) scale(1.05)";
      }
      if (arriba) arriba.classList.toggle("is-visible", y > window.innerHeight * 0.6);
      if (tl && tlRelleno) {
        const r = tl.getBoundingClientRect();
        const progreso = Math.min(1, Math.max(0, (window.innerHeight * 0.75 - r.top) / (r.height || 1)));
        tlRelleno.style.setProperty("--progreso", progreso.toFixed(3));
      }
      tick = false;
    }
    window.addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(pintar); } }, { passive: true });
    pintar();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const enlaces = montar();
    fichas();
    visor();
    comportamiento(enlaces);
  });
})();
