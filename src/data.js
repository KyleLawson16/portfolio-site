import Lou from './assets/images/lou.png';
import LouInfo from './assets/images/lou-more-info.png';
import Melillo from './assets/images/melillo.png';
import MelilloInfo from './assets/images/melillo-more-info.png';
import Vidvision from './assets/images/vidvision.png';
import Pureworld from './assets/images/pureworld.png';

const projects = [
  {
    index: 0,
    id: "melillo_equities",
    title: "Melillo Equities",
    src: "https://melillo-equities-dev-builtbykingwilllycom.netlify.com/",
    imageSrc: Melillo,
    modal: {
      content: " ",
      image: MelilloInfo,
    }
  },
  {
    index: 1,
    id: "lou_assistant",
    title: "LOU Assistant",
    src: "https://www.louassistant.com/",
    imageSrc: Lou,
    modal: {
      content: "LOU Assistant is a company I co-founded that helps train employees more productively by allowing them to learn while they work. By using a chrome extension, we were able to create step-by-step clickthrough tutorials that could be adapted to any web platform. For our landing page, we decided to create a techy but fun vibe that we believed would appeal to people with a wide range of technical abilities. Use of slanted containers and vibrant colors helped achieve this look and feel.",
      image: LouInfo,
    }
  },
  {
    index: 2,
    id: "vidvision",
    title: "Vidvision",
    src: "https://www.getvidvision.com/",
    imageSrc: Vidvision,
    modal: {
      content: " ",
      image: MelilloInfo,
    }
  },
  {
    index: 3,
    id: "pureworld_hemp",
    title: "Pureworld Hemp",
    src: "https://pure-world-staging.herokuapp.com/",
    imageSrc: Pureworld,
    modal: {
      content: " ",
      image: MelilloInfo,
    }
  }
];

const icons = [
  {name: 'mail', url: 'mailto:kyle@kylelawson.io'},
  {name: 'github', url: 'https://github.com/KyleLawson16/'},
  {name: 'linkedin', url: 'https://www.linkedin.com/in/kylejlawson/'},
  {name: 'twitter', url: 'https://twitter.com/KyleLaws0n'},
  {name: 'facebook', url: 'https://www.facebook.com/kyle.lawson.77'},
];

const data = {
  projects: projects,
  icons: icons,
}

export default data;
