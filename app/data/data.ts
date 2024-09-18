import { EntrieAboutInterface } from "@/interfaces/entries.about.interface";

export const BaseInfo = {
    
    name: "Sergio A.K.A. TitanDev",
    position: "Full Stack Web Developer",
    description:
      "Me gusta trabajar con el código de cualquier framework y puedo adaptarme fácilmente, pero mis frameworks favoritos hasta ahora son Next js para front y Nest js para back.",
    profilePic: "/img/hero.jpg",
  };
  
  export const aboutInfo = {
    title: "Creando aplicaciones web con detalle y dedicación",
    description:
      "Me siento comprometido con esta hermosa profesión, la cual me ha permitido desarrollar habilidades en el desarrollo de aplicaciones web, tanto en el frontend como en el backend, además de habilidades blandas y administrativas en el tiempo que me ha tocado liderar. Mi objetivo es crear soluciones digitales que cumplan con las necesidades de mis clientes y superen sus expectativas.",
    studies: "3+",
    experience: "3+",
    project: "6+",
    cursos: "40+",
  };
  
 
  export const entries: EntrieAboutInterface[] = [
    // Categoría: years
    {
      id: "1",
      title: "Trabajé 4 meses en Strixsoft",
      description: "Aquí es donde partí trabajando y aprendiendo .Net y Sql, estuve pocos meses por que me ofrecieron trabajar para la empresa Medismart como desarollador de apps móviles, pero varias cosas sobre estos frameworks",
      category: "years",
      images: ["/img_about/strix/strix.png"],
    },
    {
      id: "2",
      title: "Trabajé 1 año en Municipalidad de Maipú",
      description: "Aquí es donde ejercí mi título de Soporte Informático , siendo parte del equipo de Mesa de Ayuda, atendendiendo los requerimientos de los usuarios internos en la Municipalidad",
      category: "years",
      images: ["/img_about/municipalidad-maipu/muni.png"],
    },
    {
      id: "3",
      title: "Actualmente trabajo en Medismart",
      description: "Estoy enormemente agradecido de esta empresa que me dio la oportunidad de desarollarme en este hermoso mundo que es el desarollo, siempre he dicho que pongo mucha pasión ya que hasta fuera de horario estoy codificando, es un gusto y un placer que además me da para vivir ,pase de desarrollador a lider técnico y en eso estoy actualmente, no se hasta cuando dure este viaje pero lo disfrutaré hasta que termine.",
      category: "years",
      images: ["/img_about/medismart/medismart.png"],
      
    },
  
    
    // Categoría: courses
    {
      id: "4",
      title: "Flutter",
      description: "Siempre intento tomar los cursos de Fernando Herrera ya sea por necesidad o por aprender algo nuevo, en este caso el de Flutter lo tomé para poder realizar la app que la empresa requería",
      category: "courses",
      images: ["/img_about/courses/flutter.png"],
    },
    {
      id: "5",
      title: "Nest",
      description: "Tomé este curso por que he visto que es muy popular, además me encanto desde el primer video, su semejanza a angular se me dio muy familiar, su estructura modular lo hace muy legible y limpio, además sus decoradores lo hacen muy intuitivo y para que hablar de la CLI lo hace todo un poco mas facil, definitivamente mi framework favorito para desarrollo backend",
      category: "courses",
      images: ["/img_about/courses/nest.png"],
    },
    {
      id: "6",
      title: "Vue",
      description: "En mi trabajo se hablaba de migrar a una nueva tecnología y la elegida en este momento fue Vue, y la verdad que me encanto por que además tuve que aprender la nueva forma que adpoto Vue que es el composition api que es muy distinta y mas intuitiva,además de limpio que el uso de su antigua forma el option api, Vue está entre mis frameworks favoritos sin duda",
      category: "courses",
      images: ["/img_about/courses/vue.png"],
    },
    {
      id: "7",
      title: "Astro",
      description: "Sin duda uno de mis dos frameworks favoritos es Astro, mas aún con sus nuevas herramientas recientemente liberadas. Astro era un framework enfocado 100% en sitios estáticos, pero estudiando este curso noté que extendieron su potencial al server side, añadiendo a este hermoso framework capacidades comom las que tiene Next js de trabajar facilmente desde el lado del servidor, eso sumado a detalles como el ViewTransition lo convierten en una gran alternativa, esperando la liberación de Astro db de seguro dará mucho que hablar",
      category: "courses",
      images: ["/img_about/courses/astro.png"],
    },
    {
      id: "8",
      title: "Zustand",
      description: "Una de las cosas que no me gustaba mucho de React era usar Redux o Context para el manejo de estado, conocí Zustand y se convirtio en mi manejador de estado favorito con un increible alcance y muy familiar en cuanto a su sintaxis, sin duda valío la pena estudiarlo",
      category: "courses",
      images: ["/img_about/courses/zustand.png"],
    },
    {
      id: "9",
      title: "Next",
      description: "Mi framework favorito número 1, de todos los que conocí con este framework me quedo hasta el dia de hoy, no quiere decir que los demás no me gusten, pero en el que trabajo día a día es este maravilloso framework, con el poder de React mas server side, server actions, su intuitiva manera de poner a disposición sus componentes hacen que para mi sea el mejor actualmente, nunca se deja de aprender de este framework así que seguimos",
      category: "courses",
      images: ["/img_about/courses/next.png"],
    },
    
    // Categoría: studies
    {
      id: "10",
      title: "Análisis de sistema en Esucomex",
      description: "Logré sacar mi carrera de analista de sistema con mención en app móviles con notas ejemplares, hoy por hoy me decidí a cursar la ingeniería",
      category: "studies",
      images: ["/img_about/studies/titulo-esucomex.png"],
    },
    {
      id: "11",
      title: "Soporte técnico informático en Icel",
      description: "Saqué mi título de soporte informático en Icel, donde aprendí a reparar computadores, a instalar sistemas operativos, a configurar redes, a instalar programas, a configurar servidores, entre otras cosas",
      category: "studies",
      images: ["/img_about/studies/titulo-icel.png"],
    },
    {
      id: "12",
      title: "Bootcamp de stack MERN en Desafío Latam",
      description: "Tomé este curso para aprender a desarrollar aplicaciones web con el stack MERN, aprendí a desarrollar aplicaciones web con React, Node, Express y MongoDB, además de aprender a trabajar con Git, GitHub, Netlify, entre otras herramientas.",
      category: "studies",
      images: ["/img_about/studies/titulo-desafio-latam.png"],
      
    },
    {
      id: "13",
      title: "Actualmente estudio para sacar la ingeniería en informática en Iplacex",
      description: "Estoy estudiando para sacar la ingeniería en informática en Iplacex, donde he optado por este nuevo desafío que pienso terminar con excelencia y dedicación",
      category: "studies",
      images: ["/img_about/studies/iplacex.png"],
      
    },
   
  

    // lead projet
    {
      id: "13",
      title: "Ecosistema de telemedicina para ITAU",
      description: "Me toco liderar al equipo Front con el que desarrollamos este ecosistema de telemedicina para Itau, con un backend ya desarrollado, usamos la tecnología Next js para realizarlo, Tailwind CSS para estilos, ShadCn como biblioteca de componentes para estilos NextAuth para la autenticación, React Hook Form para formularios, Zod para validar, entre otras.\n El sistema actualmente se encuentra en producción.",
      category: "lead-project",
      images: ["/img_about/scotiabank-cardif/cardif.png", "/img_about/scotiabank-cardif/cardif-2.png", "/img_about/scotiabank-cardif/cardif-3.png"],
    },
    {
      id: "14",
      title: "Smartcheck 2.0",
      description: "Sistema externo que expone Apis de una empresa canadiense dedicada a la telemetría médica, me toco liderar el desarollo del front que consume estas Apis y concluye en una medición de distintos tipos de datos entregados mediante la cámara, donde el usuario enciende la cámara y el sistema realiza la medición del usuario, a la vez guardamos estos datos en una bd no relacional (mongoDB) y liberamos informes para los usuarios, las tecnologías usadas son Nextjs, mongoDb, Prisma, React Hook Form, Zod, Shadcn, TailwindCSS.",
      category: "lead-project",
      images: ["/img_about/smartcheck/smartcheck.png", "/img_about/smartcheck/smartcheck-2.png"],
    },
    {
      id: "15",
      title: "Encuesta NPS",
      description: "La empresa necesitaba un sistema de encuestas para México, Colombia y Chile, encuestas de satisfacción respecto al servicio de telemedicina entregado, utilicé Nextjs, Shadcn, TailwindCSS, por el lado del back el desarrollador de backend utilizó una bd relacional SQL",
      category: "lead-project",
      images: ["/img_about/encuesta-nps/encuesta.png"],
    },
    {
      id: "16",
      title: "Ecosistema de telemedicina para BETTERFLY",
      description: "Me toco liderar al equipo Front con el que desarrollamos este ecosistema de telemedicina para Betterfly, con un backend ya desarrollado, usamos la tecnología Next js para realizarlo, Tailwind CSS para estilos, ShadCn como biblioteca de componentes para estilos, NextAuth para la autenticación, React Hook Form para formularios, Zod para validar, entre otras. El sistema actualmente se encuentra en producción.",
      category: "lead-project",
      images: ["/img_about/betterfly/bet.png"],
    },
    {
      id: "17",
      title: "Metrics",
      description: "Metrics es un sistema interno en el cual se disponibilizan datos cargados desde POWER-BI, tanto para la empresa como para clientes que necesiten conocer las estadísticas de sus sistemas independientes que a su vez son instancias del sistema de telemedicina corporativo de Medismart.",
      category: "lead-project",
      images: ["/img_about/metrics/metrics.png"],
    },
    {
      id: "18",
      title: "App movil Medismart",
      description: "Primero partimos junto a un Senior trabajando en Ionic con Angular realizando esta app movil, luego nos pasamos a Flutter y reescribimos la app, quede por un tiempo solo desarrollando en esta app y luego se unió otro compañero para formar equipo. Actualmente esta app no esta en producción pero si tuve la oportunidad de poder desarrollar en este gran framework que es Flutter, cabe mencionar que este framework permite desarollar para iOS y Android ",
      category: "lead-project",
      images: ["/img_about/app-movil/login.png", "/img_about/app-movil/home.png", "/img_about/app-movil/agenda.png"],
    },
  ];
  
  
  export const contactData = {
    phone: "+88(012345 789)",
    email: "example@gmail.com",
    address: "Dhaka , Bangladesh",
  };