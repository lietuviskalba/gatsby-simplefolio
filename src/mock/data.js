import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mantas Lingaitis', // e.g: 'Name | Developer'
  lang: 'en, lt, ru', // e.g: en, es, fr, jp
  description: 'Software developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Greetings, my name is',
  name: 'Mantas',
  subtitle: 'I am a Software developer',
  cta: 'More?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Software developer that recently finished my abroad education in Denmark. Additionally I had two exchange programs in Ireland and Canada. Gained a great view for different cultures and a massive bundle of knowledge.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Alna Software Parking System',
    info:
      'I took the initiative at my company to create a web application that would allow us to communicate and share free parking spaces across all the employees. Making a functional and intuitive app for ease of use and convenience.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Testing the contact funtionality',
  btn: 'testing',
  email: 'tempmail@testing.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lietuviskalba',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
