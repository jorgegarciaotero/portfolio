import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "navbar": {
        "home": "Home",
        "about": "About Me",
        "resume": "Resume",
        "projects": "Projects",
        "contact": "Contact"
      },
      "profile": {
        "hello": "Hello, I am ",
        "roles": [
            "Data Engineer",
            "Python / SQL / PySpark",
            "Azure / Databricks / Data Factory",
            "Power BI / Power Automate",
            "Delta Lake / Hive / MariaDB",
            "Ingestion, Transformation & AI"
        ],
        "tagline": "Telecommunications Engineer with Master's in AI and Master in Big Data & Business Intelligence. Automating your data processes from ingestion to visualization.",
        "contactMe": "Contact Me",
        "getResume": "Get Resume"
      },
      "aboutMe": {
        "title": "About Me",
        "description": "Telecommunications Engineer with Master's degrees in Big Data and Artificial Intelligence. Over 10 years of experience in the data and telecommunications sectors. I began my career in network operations and deployment, evolving towards contract management, KPI control, and report automation. In recent years, I have consolidated my role as a Data Engineer, building data ingestion and transformation pipelines (Medallion architecture) for analytical exploitation in Power BI and web platforms.",
        "highlightsHeading": "Key highlights:",
        "highlights": [
          "Data Engineering: Databricks, PySpark, Delta Lake, Apache NiFi, Airflow",
          "Cloud & Orchestration: Azure (Data Factory, DevOps), Google Cloud Platform",
          "Programming: Python (Flask, Pandas), SQL, JavaScript",
          "Databases: MariaDB, Hive, Oracle, Microsoft Dataverse",
          "Visualization: Power BI",
          "Automation: Power Automate, Web Scraping (Selenium)"
        ]
      },
      "resume": {
        "title": "Resume",
        "subHeading": "My formal Bio Details",
        "tabs": {
          "education": "Education",
          "currentRole": "Current Role",
          "workHistory": "Work History",
          "skills": "Programming Skills",
          "certificates": "Certificates"
        },
        "education": {
          "unir": "Master in Artificial Intelligence",
          "eoi": "Master Degree in Big Data and Business Intelligence",
          "uvigo": "Master's Degree in Telecommunications Engineering"
        },
        "experience": {
          "reale": {
            "b1": "Designed and implemented data pipelines in <b>Azure Databricks</b> and <b>Azure Data Factory</b>, following the Medallion architecture on <b>Delta Lake</b>.",
            "b2": "Developed ingestion and transformation processes using <b>PySpark and SQL</b>, integrating data governance via Unity Catalog.",
            "b3": "Integrated data from Oracle, Microsoft Dataverse, and REST APIs (Medallia, Genesys Cloud), including web scraping with Python Selenium.",
            "b4": "CI/CD environment management with <b>Azure DevOps</b> for code deployment and version control."
          },
          "voda1": {
            "b1": "Administered an on-premise Big Data cluster (Hortonworks), managing massive network data storage.",
            "b2": "Implemented data pipelines in <b>Apache NiFi</b> and processed data with <b>PySpark/Pandas</b> to generate automated reports and incident tickets.",
            "b3": "Supervised the <b>Power BI</b> portal for network monitoring and SLA compliance."
          },
          "voda2": {
            "b1": "Automated Service Level Agreements (SLAs) and Key Performance Indicators (KPIs) through VBA, SQL and Power BI.",
            "b2": "Monitored and analyzed network operations and supplier contracts (Orange, Cellnex, Huawei, Telefónica)."
          },
          "experis": {
            "b1": "Managed equipment deployment across Vodafone Network Centers and resolved mobile network incidents."
          }
        },
        "certificates": {
          "text": "Take a look at my certified courses at: ",
          "linkText": "the following link",
          "expired": "Expired certificate"
        }
      },
      "projects": {
        "title": "Projects",
        "subHeading": "Latest Projects",
        "viewProject": "View Project",
        "fotodered": {
          "desc": "Website developed using Flask, Datatables, Leaflet and ChartJs to track Mobile and Fixed Network Alarms of Vodafone Spain Network Area."
        },
        "vision": {
          "desc": "Website developed using Flask, Datatables, Leaflet and ChartJs to track all Network Incidents of Vodafone Spain Network Area."
        },
        "kpis": {
          "title": "Network Operation KPIs",
          "desc": "Administration of the Network Operation Sharepoint, which contains over a score of Fully automated Power BI Executive dashboards that tracks Vodafone NetOps main KPIs."
        }
      },
      "contactMe": {
        "title": "Contact Me",
        "subHeading": "Lets Keep In Touch",
        "getInTouch": "Get In Touch 📧",
        "sendEmailText": "Send Your Email Here!",
        "name": "Name",
        "email": "Email",
        "message": "Message",
        "send": "Send",
        "sending": "Sending...",
        "success": "Thank You For Contacting Jorge",
        "error": "Error in Server. Please try again."
      }
    }
  },
  es: {
    translation: {
      "navbar": {
        "home": "Inicio",
        "about": "Sobre Mí",
        "resume": "Currículum",
        "projects": "Proyectos",
        "contact": "Contacto"
      },
      "profile": {
        "hello": "Hola, soy ",
        "roles": [
            "Data Engineer",
            "Python / SQL / PySpark",
            "Azure / Databricks / Data Factory",
            "Power BI / Power Automate",
            "Delta Lake / Hive / MariaDB",
            "Ingeniería de Datos e IA"
        ],
        "tagline": "Ingeniero de Telecomunicaciones con Máster en IA y Máster en Big Data & Business Intelligence. Automatizando procesos de datos desde la ingesta hasta la visualización.",
        "contactMe": "Contáctame",
        "getResume": "Descargar CV"
      },
      "aboutMe": {
        "title": "Sobre Mí",
        "description": "Ingeniero de Telecomunicaciones con Máster en Big Data y en Inteligencia Artificial. Más de 10 años de experiencia en los sectores de datos y telecomunicaciones. Comencé mi carrera en operaciones y despliegue de red, evolucionando hacia la gestión de contratos, control de KPIs y automatización de informes. En los últimos años he consolidado mi rol como Ingeniero de Datos, construyendo pipelines de ingesta y transformación (Arquitectura Medallion) para su explotación analítica en Power BI y plataformas web.",
        "highlightsHeading": "Puntos destacados:",
        "highlights": [
          "Data Engineering: Databricks, PySpark, Delta Lake, Apache NiFi, Airflow",
          "Cloud & Orchestración: Azure (Data Factory, DevOps), Google Cloud Platform",
          "Programación: Python (Flask, Pandas), SQL, JavaScript",
          "Bases de Datos: MariaDB, Hive, Oracle, Microsoft Dataverse",
          "Visualización: Power BI",
          "Automatización: Power Automate, Web Scraping (Selenium)"
        ]
      },
      "resume": {
        "title": "Currículum",
        "subHeading": "Mi trayectoria formal",
        "tabs": {
          "education": "Educación",
          "currentRole": "Rol Actual",
          "workHistory": "Historial Laboral",
          "skills": "Habilidades de Programación",
          "certificates": "Certificados"
        },
        "education": {
          "unir": "Máster en Inteligencia Artificial",
          "eoi": "Máster en Big Data y Business Intelligence",
          "uvigo": "Máster en Ingeniería de Telecomunicaciones"
        },
        "experience": {
          "reale": {
            "b1": "Diseño e implementación de pipelines de datos en <b>Azure Databricks</b> y <b>Azure Data Factory</b>, siguiendo la arquitectura Medallion en <b>Delta Lake</b>.",
            "b2": "Desarrollo de procesos de ingesta y transformación usando <b>PySpark y SQL</b>, integrando gobierno del dato vía Unity Catalog.",
            "b3": "Integración de datos desde Oracle, Microsoft Dataverse, y APIs REST (Medallia, Genesys Cloud), incluyendo web scraping con Python Selenium.",
            "b4": "Gestión de entorno CI/CD con <b>Azure DevOps</b> para despliegue de código y control de versiones."
          },
          "voda1": {
            "b1": "Administración de cluster Big Data on-premise (Hortonworks), gestionando almacenamiento masivo de red.",
            "b2": "Implementación de pipelines en <b>Apache NiFi</b> y procesamiento con <b>PySpark/Pandas</b> para la generación automatizada de informes y tickets de incidencia.",
            "b3": "Supervisión del portal corporativo en <b>Power BI</b> para monitorización de red y cumplimiento de SLAs."
          },
          "voda2": {
            "b1": "Automatización del cálculo de Acuerdos de Nivel de Servicio (SLAs) e Indicadores de Rendimiento (KPIs) mediante VBA, SQL y Power BI.",
            "b2": "Monitorización y análisis de operaciones de red y contratos de proveedores (Orange, Cellnex, Huawei, Telefónica)."
          },
          "experis": {
            "b1": "Gestión de despliegue de equipamiento en Centros de Red Vodafone y resolución de incidencias en red móvil."
          }
        },
        "certificates": {
          "text": "Echa un vistazo a mis cursos certificados en: ",
          "linkText": "el siguiente enlace",
          "expired": "Certificado expirado"
        }
      },
      "projects": {
        "title": "Proyectos",
        "subHeading": "Últimos Proyectos",
        "viewProject": "Ver Proyecto",
        "fotodered": {
          "desc": "Sitio web desarrollado con Flask, Datatables, Leaflet y ChartJs para rastrear las Alarmas de Red Fija y Móvil del Área de Red de Vodafone España."
        },
        "vision": {
          "desc": "Sitio web desarrollado con Flask, Datatables, Leaflet y ChartJs para monitorizar todas las incidencias de red de Vodafone España."
        },
        "kpis": {
          "title": "KPIs de Operaciones de Red",
          "desc": "Administración del portal Sharepoint de Operaciones de Red, que contiene más de 20 dashboards ejecutivos totalmente automatizados en Power BI que monitorizan los principales KPIs."
        }
      },
      "contactMe": {
        "title": "Contáctame",
        "subHeading": "Mantengamos el Contacto",
        "getInTouch": "Ponte en Contacto 📧",
        "sendEmailText": "¡Envía tu mensaje aquí!",
        "name": "Nombre",
        "email": "Email",
        "message": "Mensaje",
        "send": "Enviar",
        "sending": "Enviando...",
        "success": "Gracias por contactar con Jorge",
        "error": "Error en el servidor. Por favor, inténtalo de nuevo."
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // fallback language if translation is missing

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
