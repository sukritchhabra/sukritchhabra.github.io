import {
  faGithubSquare,
  faLinkedin,
  faStackOverflow,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const info = {
  name: 'Sukrit Chhabra',
  social: [
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/sukritchhabra/',
      name: 'LinkedIn',
      order: 1,
    },

    {
      icon: faGithubSquare,
      link: 'https://github.com/sukritchhabra/',
      name: 'Github',
      order: 2,
    },

    {
      icon: faStackOverflow,
      link: 'http://stackoverflow.com/users/4041297/sukrit-chhabra',
      name: 'StackOverflow',
      order: 3,
    },

    {
      icon: faInstagram,
      link: 'https://www.instagram.com/sukritchhabra/',
      name: 'Instagram',
      order: 4,
    },
  ]
};

export default info;
