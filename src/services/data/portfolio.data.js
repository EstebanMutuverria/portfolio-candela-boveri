//Hero image and cv
import hero_image from '../../assets/hero/hero_image.jpeg'
import cv_candela_boveri from '../../assets/CV/cv_candela_boveri.pdf'

//Limpieza periodontal
import antes_limpieza_periodontal from '../../assets/casos_clinicos/antes_limpieza_periodontal.jpeg'
import despues_limpieza_periodontal from '../../assets/casos_clinicos/despues_limpieza_periodontal.jpeg'

//Carillas de resina
import antes_carillas_de_resina from '../../assets/casos_clinicos/antes_carillas_de_resina.jpeg'
import despues_carillas_de_resina from '../../assets/casos_clinicos/despues_carillas_de_resina.jpeg'

//Incrustacion de resina
import antes_incrustacion_de_resina from '../../assets/casos_clinicos/antes_incrustacion_de_resina.jpeg'
import despues_incrustacion_de_resina from '../../assets/casos_clinicos/despues_incrustacion_de_resina.jpeg'

export const PORTFOLIO_DATA = {
    hero: {
        name: "Candela",
        lastName: "Boveri",
        phrase: "Estudiante avanzada de odontología enfocada en salud bucal integral",
        cta: "Consultar",
        image: hero_image,
        cv: cv_candela_boveri
    },
    aboutMe: {
        university: "Universidad Nacional del Oeste (UNO)",
        year: "5to Año",
        motivation: "Elegí la odontología por mi deseo de transformar sonrisas y mejorar la calidad de vida de las personas a través de la salud bucal.",
        interests: ["Ortodoncia", "Estética Dental", "Cirugía"],
        values: "Compromiso, responsabilidad y un trato humano y empático con cada paciente.",
    },
    formation: [
        {
            title: "Estudiante de Odontología",
            institution: "Universidad Nacional del Oeste",
            period: "2021 - Presente",
            description: "Cursando actualmente el 5to año de la carrera.",
        },
        {
            title: "Escuela secundaria",
            institution: "Instituto privado Alfonsina Storni",
            period: "2016 - 2021",
            description: "Bachiller con orientación en Ciencias Naturales.",
        }
    ],
    experience: [
        {
            area: "Profilaxis",
            description: "Limpieza profunda y prevención de enfermedades periodontales.",
        },
        {
            area: "Restauraciones",
            description: "Tratamiento de caries y reconstrucción dental estética.",
        },
        {
            area: "Radiografías",
            description: "Toma e interpretación de placas radiográficas periapicales.",
        },
        {
            area: "Asistencia Clínica",
            description: "Apoyo en procedimientos complejos y manejo de instrumental.",
        }
    ],
    cases: [
        {
            id: 1,
            title: "Limpieza Periodontal",
            description: "Limpieza profunda y prevención de enfermedades periodontales.",
            beforeImg: antes_limpieza_periodontal,
            afterImg: despues_limpieza_periodontal,
        },
        {
            id: 2,
            title: "Carillas de Resina",
            description: "Restauraciones estéticas con resina.",
            beforeImg: antes_carillas_de_resina,
            afterImg: despues_carillas_de_resina,
        },
        {
            id: 3,
            title: 'Incrustacion de resina',
            description: "Restauraciones estéticas con resina.",
            beforeImg: antes_incrustacion_de_resina,
            afterImg: despues_incrustacion_de_resina,
        }
    ],
    testimonials: [
        {
            name: "María G.",
            comment: "Excelente atención, muy cuidadosa y detallista. Me sentí muy cómoda durante el tratamiento.",
            role: "Paciente Clínica UNO",
        },
        {
            name: "Dr. Roberto S.",
            comment: "Cande demuestra una gran destreza clínica y una responsabilidad admirable en sus prácticas.",
            role: "Profesor de Clínica II",
        }
    ],
    healthTips: [
        {
            id: 1,
            title: "El cepillado correcto",
            description: "No se trata de fuerza, sino de técnica. Cepillá suavemente en círculos y no olvides la lengua.",
            icon: "🦷",
        },
        {
            id: 2,
            title: "Uso del hilo dental",
            description: "El cepillo solo llega al 60% de la superficie dental. El hilo es fundamental para prevenir caries interdentales.",
            icon: "🧵",
        },
        {
            id: 3,
            title: "Cambio de cepillo",
            description: "Renová tu cepillo cada 3 meses o después de haber estado enfermo para evitar bacterias.",
            icon: "🔄",
        }
    ],
    contact: {
        whatsapp: "5491127434309",
        email: "bovericandela2711@gmail.com",
        location: "Merlo, Buenos Aires",
    }
};
