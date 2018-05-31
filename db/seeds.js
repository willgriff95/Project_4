const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Job = require('../models/job');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([
    {
      role: 'manager',
      firstName: 'Elliot',
      companyPicture: 'https://cdn.worldvectorlogo.com/logos/facebook-1.svg',
      lastName: 'Yandzio',
      email: 'c@c',
      password: 'c',
      passwordConfirmation: 'c',
      picture: 'https://i.imgur.com/wYVZMiw.jpg?1',
      bio: 'Senior Full Stack Developer currently seeking opportunities I’m always looking for exciting work; from freelance opportunities to working for innovative companies so feel free to get in touch even just to say Hi! hello@willgriff.co.uk'
    },
    {
      role: 'freelance',
      companyPicture: 'http://thietkemythuat.com/thu-vien-logo/wp-content/uploads/2014/11/pixel_logo.jpg',
      firstName: 'Andrew',
      lastName: 'Xu',
      email: 'b@b',
      password: 'b',
      passwordConfirmation: 'b',
      picture: 'https://i.imgur.com/JblBJ51.jpg?2',
      bio: 'Senior Full Stack Developer currently seeking opportunities I’m always looking for exciting work; from freelance opportunities to working for innovative companies so feel free to get in touch even just to say Hi! hello@willgriff.co.uk'
    },
    {
      role: 'manager',
      companyPicture: 'http://brandemia.org/sites/default/files/sites/default/files/logo_google-despues.jpg',
      firstName: 'Will',
      lastName: 'Griffiths',
      email: 'will.griffiths@pixelcrayons.co.uk',
      password: 'a',
      passwordConfirmation: 'a',
      picture: 'https://i.imgur.com/QUIA9rO.jpg',
      bio: 'Responsible for building the function in the APAC region and focused on the growth of the business organisation and support functions in partnership with the regional executives and HR leaders to determine and drive the APAC people strategy. Leading a team of 40+ staffing professionals across India, China, South East Asia, Japan and Australia. Covering all hiring into sales, marketing, legal, public policy, corporate comms, finance, people operations and facilities.'
    },
    {
      role: 'manager',
      companyPicture: 'http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png',
      firstName: 'Alex',
      lastName: 'Poytner',
      email: 'alex.poytner@ga.co.uk',
      password: 'a',
      passwordConfirmation: 'a',
      picture: 'https://i.imgur.com/QUIA9rO.jpg',
      bio: 'Responsible for building the function in the APAC region and focused on the growth of the business organisation and support functions in partnership with the regional executives and HR leaders to determine and drive the APAC people strategy. Leading a team of 40+ staffing professionals across India, China, South East Asia, Japan and Australia. Covering all hiring into sales, marketing, legal, public policy, corporate comms, finance, people operations and facilities.'
    }
  ])
    .then(users => {
      console.log(`${users.length} users were added to the DB.`);
      return Job.create([
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 350,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[3]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 400,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[3]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        }
      ]);
    })
    .then(jobs => console.log(`${jobs.length} jobs created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
