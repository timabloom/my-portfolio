import portfolioWebsiteDark from "../assets/portfolio-website-dark.png";
import chatWebsite from "../assets/chat-website.png";
import catImagesWebsite from "../assets/cat-images-website.png";
import yahtzeeWebsite from "../assets/yahtzee-website.png";

export default function projectInfo(language, project) {
  if (language === "GB") {
    if (project === 1) {
      return {
        heading: "My Portfolio",
        text1:
          "I have learned a lot from making my portfolio website. The website has two built-in language options: English and Swedish. I love dark mode, so I created an option for those who like it. I used the Chakra UI library for styling and Framer Motion for animations. I also used Recoil instead of React context.",
        text2: "JavaScript, Node.js, React, Chakra UI, Framer Motion",
        githubLink: "https://github.com/timabloom/my-portfolio",
        website: "https://magees-portfolio.netlify.app",
        image: portfolioWebsiteDark,
        hash: "UCDb~F00og~UxZbcae%L0K~VNGRjx]IUt7WC",
      };
    } else if (project === 2) {
      return {
        heading: "Chatty Chatty Bang Bang",
        text1:
          "Chatty Chatty Bang Bang is a real-time chat application built for a course about web servers and databases. The purpose of the assignment was to learn how to create an API using Express. I also connected a database on Heroku to my API. This app lets you chat with others by creating or joining a room. Rooms are removed when no one is occupying them. As an option, you can create a name for yourself; otherwise, a random name is given. Emojis and private messages are also possible to send in the rooms.",
        text2: "JavaScript, Node.js, React, Chakra UI, Express.js, Socket.io",
        githubLink: "https://github.com/cme-timothy/realtime-chat-klient",
        website: "https://timothys-realtime-chat-klient.herokuapp.com",
        image: chatWebsite,
        hash: "U9S~w]?ISc~Bx^WEoys.nVNYxHI:^+NZ%2NG",
      };
    } else if (project === 3) {
      return {
        heading: "Cat images in a Heartbeat",
        text1:
          "Cat images in a Heartbeat is a web page for cat lovers built for a course in JavaScript. This website shows 12 adorable cat images per page fetched from an API. A neat function of this web page is that if the user hovers over a cat image, it will enlarge and shrink back to the pacing of a heartbeat.",
        text2: "JavaScript, CSS, Node.js",
        githubLink:
          "https://github.com/cme-timothy/cat-images-webpage-assignment",
        website: "https://cat-images-in-a-heartbeat.netlify.app",
        image: catImagesWebsite,
        hash: "UrP%9Tof_Nxbe:j[ofaf-;j[M_f6%3a{R*j[",
      };
    } else if (project === 4) {
      return {
        heading: "American Yahtzee",
        text1:
          "American Yahtzee is a game I built for a course in JavaScript. I found out through this project that there are different rules for Yahtzee; this game follows the American ruleset. Almost everything in the game is automated; there is no need to count points. You can't cheat in this game, either.",
        text2: "JavaScript, CSS",
        githubLink: "https://github.com/cme-timothy/yahtzee-assignment",
        website: "https://american-yahtzee.netlify.app",
        image: yahtzeeWebsite,
        hash: "U9S?DVxu~q~q_3ayWBoft7t7WBM{%May%Mof",
      };
    }
  } else {
    if (project === 1) {
      return {
        heading: "Min Portfolio",
        text1:
          "Jag har l??rt mig mycket av att g??ra en egen portfolio-hemsida.  Hemsidan har tv?? inbyggda spr??kalternativ: engelska och svenska. Jag ??lskar om m??rkt tema s?? jag skapade ett s??dant tillval f??r de som gillar det. Jag anv??nde biblioteket Chakra UI f??r styling och Framer Motion f??r animationer. Jag anv??nde ocks?? Recoil ist??llet f??r React context.",
        text2: "JavaScript, Node.js, React, Chakra UI, Framer Motion",
        githubLink: "https://github.com/timabloom/my-portfolio",
        website: "https://magees-portfolio.netlify.app",
        image: portfolioWebsiteDark,
        hash: "UCDb~F00og~UxZbcae%L0K~VNGRjx]IUt7WC",
      };
    } else if (project === 2) {
      return {
        heading: "Chatty Chatty Bang Bang",
        text1:
          "Chatty Chatty Bang Bang ??r en chattapplikation som fungerar i realtid, jag gjorde den n??r jag l??ste en kurs om webbservrar och databaser. Syftet med uppdraget var att l??ra sig hur man skapar ett API med hj??lp av Express. Jag kopplade ocks?? en databas p?? heroku till mitt API. I den h??r appen kan du chatta med andra genom att skapa ett rum eller g?? med i ett rum. Ett rum raderas om det inte finns n??gon i rummet. Du har m??ljlighet att skapa ett namn ??t dig sj??lv, annars f??r du ett slumpm??ssigt namn. Det ??r ??ven m??jligt att skicka emojis och privata meddelanden i rummen.",
        text2: "JavaScript, Node.js, React, Chakra UI, Express.js, Socket.io",
        githubLink: "https://github.com/cme-timothy/realtime-chat-klient",
        website: "https://timothys-realtime-chat-klient.herokuapp.com",
        image: chatWebsite,
        hash: "U9S~w]?ISc~Bx^WEoys.nVNYxHI:^+NZ%2NG",
      };
    } else if (project === 3) {
      return {
        heading: "Cat images in a Heartbeat",
        text1:
          "???Cat images in a heartbeat??? ??r en webbsida gjord f??r katt??lskare byggd under en kurs i JavaScript. Hemsidan visar 12 bed??rande kattbilder per sida h??mtade fr??n ett API. En snygg funktion p?? den h??r webbsidan ??r att om anv??ndaren sv??var ??ver en kattbild kommer den att f??rstoras och krympa tillbaka till tempot av ett hj??rtslag.",
        text2: "JavaScript, CSS, Node.js",
        githubLink:
          "https://github.com/cme-timothy/cat-images-webpage-assignment",
        website: "https://cat-images-in-a-heartbeat.netlify.app",
        image: catImagesWebsite,
        hash: "UrP%9Tof_Nxbe:j[ofaf-;j[M_f6%3a{R*j[",
      };
    } else if (project === 4) {
      return {
        heading: "Amerikansk Yahtzee",
        text1:
          "A Yahtzee game built for a course in JavaScript. I found out through this project that there are different rules for Yahtzee; this game follows the American ruleset. Almost everything in the game is automated; there is no need to count points. You can't cheat in this game either.",
        text2: "JavaScript, CSS",
        githubLink: "https://github.com/cme-timothy/yahtzee-assignment",
        website: "https://american-yahtzee.netlify.app",
        image: yahtzeeWebsite,
        hash: "U9S?DVxu~q~q_3ayWBoft7t7WBM{%May%Mof",
      };
    }
  }
}
