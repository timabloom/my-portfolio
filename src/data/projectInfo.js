import portfolioWebsiteDark from "../assets/portfolio-website-dark.png";
import chatWebsite from "../assets/chat-website.png";
import catImagesWebsite from "../assets/cat-images-website.png";
import yahtzeeWebsite from "../assets/yahtzee-website.png";
import tarotSanctuaryWebsite from "../assets/tarot-sanctuary-website.png";
import kalejdoskopApi from "../assets/kalejdoskop-api.png";

export default function projectInfo(language, project) {
  if (language === "GB") {
    if (project === 1) {
      return {
        heading: "Tarot Sanctuary",
        subHeading: "(in development)",
        text1:
          "Tarot Sanctuary is an interactive tarot reading platform that hosts historical decks to use in fun and playful ways. This project has served as a rich learning ground, enabling me to deepen my proficiency with SvelteKit, a frontend developer-friendly meta-framework now favored by a growing community of developers, myself included.",

        text2:
          "I've learned to harness the power of AI using Codeium and ChatGPT and have successfully installed my own local chatbot. My design skills have been honed throughout this project as I took the time to learn and utilize Figma, culminating, in my opinion, in a visually appealing interface.",
        technologies: "JavaScript, TypeScript, Node.js, SvelteKit",
        githubLink: "https://github.com/timabloom/tarot-sanctuary",
        website: "https://tarot-sanctuary.onrender.com",
        image: tarotSanctuaryWebsite,
        hash: "L8N^YrR,_N%100s.DiNH00ofD%R*",
      };
    } else if (project === 2) {
      return {
        heading: "Kalejdoskop API",
        subHeading: "(in development)",
        text1:
          "This project is part of my internship at Sverok and MÄN. I ventured into backend for this project due to the need of the organizations by creating an Express application. I also worked with and took on a leadership role leading a small team of two other students in developing a website, admin panel and the express application. The website, adminpanel and api are all made for a game called Kalejdoskop.",
        text2:
          "This experience enhanced my adaptability as I took on unfamiliar tasks. I expanded my technical skills, delving into backend technologies and gaining a deeper understanding of web security principles. The challenges faced in this project have left me more versatile, well-rounded, and prepared for future roles in web development.",
        technologies:
          "JavaScript, Typescript, Node.js, Express.js, Prisma, SQLite ",
        githubLink:
          "https://github.com/orgs/sverok-man-collaboration/repositories",
        website:
          "https://github.com/orgs/sverok-man-collaboration/repositories",
        image: kalejdoskopApi,
        hash: "L02r,NxuDiD%-;ofIUM{RiRjogxu",
      };
    } else if (project === 3) {
      return {
        heading: "My Portfolio",
        text1:
          "I have learned a lot from making my portfolio website. The website has two built-in language options: English and Swedish. I love dark mode, so I created an option for those who like it. I used the Chakra UI library for styling and Framer Motion for animations. I also used Recoil instead of React context.",
        technologies: "JavaScript, Node.js, React, Chakra UI, Framer Motion",
        githubLink: "https://github.com/timabloom/my-portfolio",
        website: "https://timothy-magees-portfolio.onrender.com",
        image: portfolioWebsiteDark,
        hash: "UCDb~F00og~UxZbcae%L0K~VNGRjx]IUt7WC",
      };
    } else if (project === 4) {
      return {
        heading: "Chatty Chatty Bang Bang",
        subHeading: "(changing servers)",
        text1:
          "Chatty Chatty Bang Bang is a real-time chat application built for a course about web servers and databases. The purpose of the assignment was to learn how to create an API using Express. I also connected a database on Heroku to my API. This app lets you chat with others by creating or joining a room. Rooms are removed when no one is occupying them. As an option, you can create a name for yourself; otherwise, a random name is given. Emojis and private messages are also possible to send in the rooms.",
        technologies:
          "JavaScript, Node.js, React, Chakra UI, Express.js, Socket.io",
        githubLink: "https://github.com/cme-timothy/realtime-chat-klient",
        website: "https://timothys-realtime-chat-klient.herokuapp.com",
        image: chatWebsite,
        hash: "U9S~w]?ISc~Bx^WEoys.nVNYxHI:^+NZ%2NG",
      };
    } else if (project === 5) {
      return {
        heading: "Cat images in a Heartbeat",
        text1:
          "Cat images in a Heartbeat is a web page for cat lovers built for a course in JavaScript. This website shows 12 adorable cat images per page fetched from an API. A neat function of this web page is that if the user hovers over a cat image, it will enlarge and shrink back to the pacing of a heartbeat.",
        technologies: "JavaScript, CSS, Node.js",
        githubLink:
          "https://github.com/cme-timothy/cat-images-webpage-assignment",
        website: "https://cat-images-in-a-heartbeat.netlify.app",
        image: catImagesWebsite,
        hash: "UrP%9Tof_Nxbe:j[ofaf-;j[M_f6%3a{R*j[",
      };
    } else if (project === 6) {
      return {
        heading: "American Yahtzee",
        text1:
          "American Yahtzee is a game I built for a course in JavaScript. I found out through this project that there are different rules for Yahtzee; this game follows the American ruleset. Almost everything in the game is automated; there is no need to count points. You can't cheat in this game, either.",
        technologies: "JavaScript, CSS",
        githubLink: "https://github.com/cme-timothy/yahtzee-assignment",
        website: "https://american-yahtzee.netlify.app",
        image: yahtzeeWebsite,
        hash: "U9S?DVxu~q~q_3ayWBoft7t7WBM{%May%Mof",
      };
    }
  } else {
    if (project === 1) {
      return {
        heading: "Tarot Sanctuary",
        subHeading: "(under utveckling)",
        text1:
          "Tarot Sanctuary är en intuitiv och interaktiv plattform för tarottolkning, som erbjuder historiska kortlekar för användning på ett roligt och lekfullt sätt. Detta projekt har varit en ovärderlig lärresurs, där jag har kunnat fördjupa min kunskap i SvelteKit, ett frontend-vänligt meta-ramverk som nu uppskattas av en växande skara utvecklare, mig själv inkluderad",
        text2:
          "Jag har lärt mig att använda AI:s kraft genom Codeium och ChatGPT, och har framgångsrikt satt upp en egen lokal chatbot. Mina designfärdigheter har förfinats genom detta projekt, då jag tagit mig tid att lära mig och utnyttja Figma, vilket har resulterat i ett gränssnitt som, enligt min mening, är visuellt tilltalande.",
        technologies: "JavaScript, TypeScript, Node.js, SvelteKit",
        githubLink: "https://github.com/timabloom/tarot-sanctuary",
        website: "https://tarot-sanctuary.onrender.com",
        image: tarotSanctuaryWebsite,
        hash: "L8N^YrR,_N%100s.DiNH00ofD%R*",
      };
    } else if (project === 2) {
      return {
        heading: "Kalejdoskop API",
        subHeading: "(under utveckling)",
        text1:
          "Detta projekt utgör en del av min praktik hos Sverok och MÄN. Trots att jag huvudsakligen är inriktad på frontend-utveckling, fann jag mig själv äventyra in i backend-teknologier för att möta organisationernas behov. Här utvecklade jag en Express-applikation. Utöver detta, tog jag även på mig en ledarroll där jag styrde ett litet team bestående av två andra studenter. Tillsammans skapade vi en webbplats, en adminpanel och Express-applikationen. Alla dessa element är specifikt utformade för ett spel som heter Kalejdoskop.",

        text2:
          "Under denna process förbättrades min förmåga att anpassa mig till nya utmaningar. Jag tog mig an okända uppgifter och lärde mig nya tekniska färdigheter, med särskilt fokus på backend-teknologier. Dessutom fick jag en djupare förståelse för webbsäkerhetsprinciper. Utmaningarna jag ställdes inför under detta projekt har utan tvekan bidragit till att jag har blivit en mer mångsidig och välrundad webbutvecklare.",
        technologies:
          "JavaScript, Typescript, Node.js, Express.js, Prisma, SQLite",
        githubLink:
          "https://github.com/orgs/sverok-man-collaboration/repositories",
        website:
          "https://github.com/orgs/sverok-man-collaboration/repositories",
        image: kalejdoskopApi,
        hash: "L02r,NxuDiD%-;ofIUM{RiRjogxu",
      };
    } else if (project === 3) {
      return {
        heading: "Min Portfolio",
        text1:
          "Jag har lärt mig mycket av att göra en egen portfolio-hemsida.  Hemsidan har två inbyggda språkalternativ: engelska och svenska. Jag älskar om mörkt tema så jag skapade ett sådant tillval för de som gillar det. Jag använde biblioteket Chakra UI för styling och Framer Motion för animationer. Jag använde också Recoil istället för React context.",
        technologies: "JavaScript, Node.js, React, Chakra UI, Framer Motion",
        githubLink: "https://github.com/timabloom/my-portfolio",
        website: "https://timothy-magees-portfolio.onrender.com",
        image: portfolioWebsiteDark,
        hash: "UCDb~F00og~UxZbcae%L0K~VNGRjx]IUt7WC",
      };
    } else if (project === 4) {
      return {
        heading: "Chatty Chatty Bang Bang",
        subHeading: "(byter servrar)",
        text1:
          "Chatty Chatty Bang Bang är en chattapplikation som fungerar i realtid, jag gjorde den när jag läste en kurs om webbservrar och databaser. Syftet med uppdraget var att lära sig hur man skapar ett API med hjälp av Express. Jag kopplade också en databas på heroku till mitt API. I den här appen kan du chatta med andra genom att skapa ett rum eller gå med i ett rum. Ett rum raderas om det inte finns någon i rummet. Du har möljlighet att skapa ett namn åt dig själv, annars får du ett slumpmässigt namn. Det är även möjligt att skicka emojis och privata meddelanden i rummen.",
        technologies:
          "JavaScript, Node.js, React, Chakra UI, Express.js, Socket.io",
        githubLink: "https://github.com/cme-timothy/realtime-chat-klient",
        website: "https://timothys-realtime-chat-klient.herokuapp.com",
        image: chatWebsite,
        hash: "U9S~w]?ISc~Bx^WEoys.nVNYxHI:^+NZ%2NG",
      };
    } else if (project === 5) {
      return {
        heading: "Cat images in a Heartbeat",
        text1:
          "“Cat images in a heartbeat” är en webbsida gjord för kattälskare byggd under en kurs i JavaScript. Hemsidan visar 12 bedårande kattbilder per sida hämtade från ett API. En snygg funktion på den här webbsidan är att om användaren svävar över en kattbild kommer den att förstoras och krympa tillbaka till tempot av ett hjärtslag.",
        technologies: "JavaScript, CSS, Node.js",
        githubLink:
          "https://github.com/cme-timothy/cat-images-webpage-assignment",
        website: "https://cat-images-in-a-heartbeat.netlify.app",
        image: catImagesWebsite,
        hash: "UrP%9Tof_Nxbe:j[ofaf-;j[M_f6%3a{R*j[",
      };
    } else if (project === 6) {
      return {
        heading: "Amerikansk Yahtzee",
        text1:
          "A Yahtzee game built for a course in JavaScript. I found out through this project that there are different rules for Yahtzee; this game follows the American ruleset. Almost everything in the game is automated; there is no need to count points. You can't cheat in this game either.",
        technologies: "JavaScript, CSS",
        githubLink: "https://github.com/cme-timothy/yahtzee-assignment",
        website: "https://american-yahtzee.netlify.app",
        image: yahtzeeWebsite,
        hash: "U9S?DVxu~q~q_3ayWBoft7t7WBM{%May%Mof",
      };
    }
  }
}
