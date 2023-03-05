import { Job } from "src/app/job";

const createFakeData= (arr: Job[]) => {
    for (let i = 0; i < arr.length; i++) {
      const newObj: Job = { ...arr[i] };
      newObj.id = Math.floor(Math.random() * 10000000000);
      const companies = [
        'Scoot',
        'Blogr',
        'Vector',
        'Office Lite',
        'Pod',
        'Creative',
        'Pomodoro',
        'Maker',
        'Coffeeroasters',
        'Mastercraft',
        'Crowdfund',
        'Typemaster',
      ];
      newObj.company = companies[Math.floor(Math.random() * companies.length)];
      const logo = './assets/logos/' + newObj.company.toLowerCase() + '.png';
      newObj.logo = logo;
      const logoBackgrounds = [
        'hsl(36, 87%, 49%)',
        'hsl(12, 79%, 52%)',
        'hsl(235, 10%, 23%)',
        'hsl(227, 62%, 48%)',
        'hsl(216, 46%, 14%)',
        'hsl(295, 55%, 21%)',
        'hsl(254, 71%, 45%)',
        'hsl(218, 58%, 31%)',
        'hsl(29, 60%, 87%)',
        'hsl(0, 0%, 12%)',
        'hsl(157, 57%, 50%)',
        'hsl(22, 89%, 52%)',
      ];
      newObj.logoBackground =
        logoBackgrounds[Math.floor(Math.random() * logoBackgrounds.length)];
      const devjobs = [
        'Frontend Developer',
        'Backend Developer',
        'Fullstack Developer',
        'UI/UX Designer',
        'Product Designer',
        'Data Scientist',
        'Data Analyst',
        'Data Engineer',
        'DevOps Engineer',
        'Software Engineer',
        'QA Engineer',
        'Project Manager',
      ];
      newObj.position = devjobs[Math.floor(Math.random() * devjobs.length)];
      const postedAt = [
        '1d ago',
        '2d ago',
        '3d ago',
        '4d ago',
        '5d ago',
        '6d ago',
        '7d ago',
        '8d ago',
        '9d ago',
        '10d ago',
        '11d ago',
        '12d ago',
        '13d ago',
        '14d ago',
      ];
      newObj.postedAt = postedAt[Math.floor(Math.random() * postedAt.length)];
      const contractTypes = ['Full Time', 'Part Time'];
      newObj.contract =
        contractTypes[Math.floor(Math.random() * contractTypes.length)];
      const europeanCountries = [
        'Germany',
        'France',
        'Spain',
        'Italy',
        'Poland',
        'Romania',
        'Portugal',
        'Greece',
        'Netherlands',
        'Belgium',
        'Austria',
        'Switzerland',
      ];
      newObj.location =
        europeanCountries[Math.floor(Math.random() * europeanCountries.length)];
      newObj.website =
        'https://www.example.com/' + newObj.company.toLowerCase();
      newObj.apply =
        'https://www.example.com/' + newObj.company.toLowerCase() + '/apply';
      const description = [
        `We are looking for a passionate Frontend Developer to join our team. As a Frontend Developer, you will be responsible for implementing visual elements that users see and interact with in a web application. You will also be bridging the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.`,
      ];
      newObj.description =
        description[Math.floor(Math.random() * description.length)];
      newObj.requirements = {
        content:
          'The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.',
        items: [
          '5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.',
          'Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.',
          'Extremely data-driven.',
          'Ability to debug complex systems.',
        ],
      };
      newObj.role = {
        content:
          'We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.',
        items: [
          'This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.',
          'Translate the product roadmap into engineering requirements and own the engineering roadmap',
          'Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.',
          'Collaborate with product, design, and external engineering teammates as needed.',
        ],
      };
    //   this.fakeJobs.push(newObj)
    }
    // console.log(this.fakeJobs)
  }

  module.exports = createFakeData;