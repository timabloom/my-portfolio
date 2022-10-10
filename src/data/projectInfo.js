import portfolioWebsite from "../assets/portfolio-website.png";
import chatWebsite from "../assets/chat-website.png";
import catImagesWebsite from "../assets/cat-images-website.png";
import yahtzeeWebsite from "../assets/yahtzee-website.png";

export default function projectInfo(language, project) {
  if (language === "GB") {
    if (project === 1) {
      return {
        heading: "My Portfolio",
        text1: "This is my frontend/app development portfolio",
        text2:
          "Technologies Used: Javascript, Node, React, Chakra, Framer Motion",
        githubLink: "https://github.com/timabloom/my-portfolio",
        image: portfolioWebsite,
      };
    } else if (project === 2) {
      return {
        heading: "Chatty Chatty Bang Bang",
        text1:
          "This is a realtime chatt klient built for my last web server and database assignment.",
        text2: "Technologies Used: Javascript, Node, React, Chakra, Socket.io",
        githubLink: "https://github.com/cme-timothy/realtime-chat-klient",
        website: "https://timothys-realtime-chat-klient.herokuapp.com",
        image: chatWebsite,
      };
    } else if (project === 3) {
      return {
        heading: "Cat images in a Heartbeat",
        text1:
          "Cat images in a heartbeat is a webpage made for cat lovers. The webpage shows currently 12 adorable cat images per page. A neat function of this webpage is if the user hovers over a cat image then it will enlarge and shrink back to the pacing of a heartbeat.",
        text2: "Technologies Used: Javascript, CSS, Node",
        githubLink:
          "https://github.com/cme-timothy/cat-images-webpage-assignment",
        website: "https://cat-images-in-a-heartbeat.netlify.app",
        image: catImagesWebsite,
      };
    } else if (project === 4) {
      return {
        heading: "American Yatzy",
        text1: "A yatzy game for my CME assignment",
        text2: "Technologies Used: Javascript, CSS",
        githubLink: "https://github.com/cme-timothy/yatzy-assignment",
        website: "https://american-yahtzee.netlify.app",
        image: yahtzeeWebsite,
      };
    }
  } else {
    if (project === 1) {
      return {
        heading: "Min Portfolio",
        text1: "under utveckling",
        text2: "under utveckling",
        githubLink: "https://github.com/timabloom/my-portfolio",
        image: portfolioWebsite,
      };
    } else if (project === 2) {
      return {
        heading: "Chatty Chatty Bang Bang",
        text1: "under utveckling",
        text2: "under utveckling",
        githubLink: "https://github.com/cme-timothy/realtime-chat-klient",
        website: "https://timothys-realtime-chat-klient.herokuapp.com",
        image: chatWebsite,
      };
    } else if (project === 3) {
      return {
        heading: "Cat images in a Heartbeat",
        text1: "under utveckling",
        text2: "under utveckling",
        githubLink:
          "https://github.com/cme-timothy/cat-images-webpage-assignment",
        website: "https://cat-images-in-a-heartbeat.netlify.app",
        image: catImagesWebsite,
      };
    } else if (project === 4) {
      return {
        heading: "Amerikansk Yatzy",
        text1: "under utveckling",
        text2: "under utveckling",
        githubLink: "https://github.com/cme-timothy/yatzy-assignment",
        website: "https://american-yahtzee.netlify.app",
        image: yahtzeeWebsite,
      };
    }
  }
}
