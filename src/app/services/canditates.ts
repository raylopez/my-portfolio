import { Injectable } from '@angular/core';
import { Canditate } from '../models';

@Injectable({
  providedIn: 'root',
})
export class Canditates {
  public getCandidateOne(): Canditate {
    const candidate: Canditate = {
      name: 'Eric Raymundo',
      lastName: 'Lopez Alonzo',
      position: 'Ingeniero de Software — Desarrollo web y móvil • APIs • Bases de datos • Cloud',
      about: 'Ingeniero de software con experiencia en desarrollo de aplicaciones web y móviles, mantenimiento de WebAPIs, administración de bases de datos y despliegue en la nube (AWS/Azure). Enfocado en soluciones escalables, buen diseño y colaboración en equipo.',
      socialStatus: 'Soltero',
      email: 'eric.lopez.alonzo@gmail.com',
      phone: '+52 9991197513',
      resumeUrl: '/assets/docs/cv.pdf',
      experenceJobs: [
        {
          name: 'Ritmann, S. de R.L. de C.V.',
          periodStart: new Date(2012,4,1),
          periodEnd: new Date(2012,7,1),
          degree: 'Intern',
          description: 'Development of a financial and statistical management for daily business operations, creation of technical documentation, (UML, ER diagrams, system manual) Database design.',
          technologies: ['PHP', 'JQuery', 'CSS3', 'HTML', 'MySQL']
        },
        {
          name: 'MAE del Golfo S.A.P.I. SOFOM ENR (Grupo Padio)',
          periodStart: new Date(2014,2),
          periodEnd: new Date(2015,0),
          degree: 'Intern - Administrative assistant',
          description: 'Development of a financial and statistical management for daily business operations, creation of technical documentation, (UML, ER diagrams, system manual) Database design.',
          technologies:['PHP', 'MySQL',  'JQuery', 'CSS3', 'HTML', 'Bootstrap'],
          link: 'https://www.maedelgolfo.com.mx'
        },
        {
          name: 'Grupo plenum (Plenumsoft)',
          periodStart: new Date(2016,5),
          periodEnd: new Date(2021,8),
          degree: 'Software developer',
          description: 'Development/maintenance of web and mobile apps, database management, software documentation, (UML diagrams, use cases), versioning code.',
          technologies: ['C#', 'ASP .Net', 'Windows Forms', 'EntityFramework', 'Linq', 'Java', 'TortoiseSVN', 'Git', 'Java/Android', 'Spring Framework (Java)', 'Angular', 'Bootstrap'],
          link: 'https://www.grupoplenum.com'
        },
        {
          name: 'DaCodes',
          periodStart: new Date(2021,8),
          periodEnd: new Date(2023,11),
          degree: 'Software engineer',
          description: 'Development of web and mobile apps, management of repositories. database maintenance',
          technologies: ['Angular', 'React', 'C#', '.Net Core', 'Github', 'CodeCommit', 'AWS Amplify', 'Bootstrap', 'Material Design',' Ant Design'],
          link: 'https://dacodes.com'
        },
        {
          name: 'TuIdentidad',
          periodStart: new Date(2024,0),
          periodEnd: new Date(2025,9),
          degree: 'Software engineer',
          description: 'Development of web apps, maintenance of WebAPI apps, database management, use of Docker containers.',
          technologies: ['C#', '.Net Core', 'EntityFramework', 'Linq', 'NodeJS', 'Amazon Lambda',  'Github', 'AWS Amplify', 'Azure DevOps', 'Angular',  'Bootstrap',' Material Design'],
          link: 'https://tuidentidad.com/'
        },
      ],
      education: [
        {
          name: 'Universidad Tecnologica Metropolitana',
          periodStart: new Date(2010,8),
          periodEnd: new Date(2012,8),
          degree: 'Information and Communication Technologies - multimedia and E-Commerce',
          description: ''
        },
        {
          name: 'Universidad Tecnologica Metropolitana',
          periodStart: new Date(2012, 8),
          periodEnd: new Date(2014, 8),
          degree: 'Software Development Engineering – Cloud Computing Applications',
          description: '',
        },
      ],
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Bootstrap',
        'Angular',
        'React',
        'PHP',
        'C#',
        'Java',
        'NodeJS',
        'Entity Framework',
        'Spring',
        'AWS',
        'Android'
      ],
      softSkills: ['Respeto', 'Puntualidad', 'Proactividad', 'Autodidacta'],
      socials: [
        {
          url: 'https://www.linkedin.com/in/eric-lopez-alonzo/',
          name: 'Linkedin'
        },
        {
          url: 'https://github.com/raylopez',
          name: 'Github'
        }
      ],
    };

    return candidate;
  }
}
