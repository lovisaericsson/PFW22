"use strict"

const Questions = [
  {
    "id": 0,
    "title": "Kan jag åka på utbyte inom mitt program?"
  },
  {
    "id": 1,
    "title": "När får man besked om vilken plats man har fått?"
  },
  {
    "id": 2,
    "title": "Kan jag få studiemedel från CSN för utlandsstudier?"
  },
  {
    "id": 3,
    "title": "Vad är det som avgör om jag får en plats?"
  },
  {
    "id": 4,
    "title": "Hur många universitet måste jag söka för att vara säker på att få en plats?"
  },
  {
    "id": 5,
    "title": "Jag har bytt program, hur fungerar det med behörighet och betygssnitt?"
  },
  {
    "id": 6,
    "title": "När kan jag åka på utbyte?"
  },
  {
    "id": 7,
    "title": "Vad händer om jag inte klarar kurserna på utbytet?"
  },
  {
    "id": 8,
    "title": "Är jag försäkrad under utbytet?"
  },
  {
    "id": 9,
    "title": "Vart ska jag vända mig ifall jag råka ut för en olycka eller något händer?"
  },
  {
    "id": 10,
    "title": "Behöver jag göra ett språktest?"
  },
  {
    "id": 11,
    "title": "Kan jag få åka på utbyte med en kompis?"
  },
  {
    "id": 12,
    "title": "Vad är ett learning agreement?"
  },
  {
    "id": 13,
    "title": "Hur gör jag med boende?"
  },
  {
    "id": 14,
    "title": "Kan jag jobba medan jag studera i USA?"
  },
  {
    "id": 15,
    "title": "Vad händer om jag blir antagen till en utbildning men jag ångrar mig?"
  },
];


const Answers = [
  {
    "id": 0,
    "title": "Vänd dig till den internationella kontaktpersonen vid ditt program för att få information om möjligheten att åka på utbyte inom ditt program."
  },
  {
    "id": 1,
    "title": "Du får besked via mail några veckor efter sista ansökningsdag."
  },
  {
    "id": 2,
    "title": "Ja, du kan ansöka om studiemedel från CSN som vanligt för din utbytestermin."
  },
  {
    "id": 3,
    "title": "Studieplanen måste stämma överens med universitetsinformationen i SoleMove. Därefter högst betygssnitt. Om flera studenter har samma meritvärde avgörs urvalet genom en samlad bedömning av ansökan där störst vikt läggs vid motivationsbrev (Statement of Purpose) och CV."
  },
  {
    "id": 4,
    "title": "Vi brukar kunna tilldela platser till 80% av våra sökande studenter, så chanserna är goda. Ju fler universitet du söker desto större är chanserna att få en plats, men sök bara de universitet du verkligen vill åka till."
  },
  {
    "id": 5,
    "title": "Första årets studier på ditt nuvarande program måste vara helt avklarade för att du ska vara behörig. Förutom ÅK1 prövas behörigheten utifrån den individuella studieplan som upprättas i samband med antagning till nuvarande program.Betygssnittet beräknas på avklarade och tillgodoräknade kurser med TH-skala inom ditt aktuella program."
  },
  {
    "id": 6,
    "title": "Prata med ditt program om när det bäst passar att åka på utbyte."
  },
  {
    "id": 7,
    "title": "Om det blir aktuellt ska du ta reda på vilka möjligheter det finns för att tenta om eller komplettera för att få godkänt. Du måste även förhålla dig till eventuella regler vad gäller exempelvis CSN och Erasmus. Du förväntas studera på heltid det vill säga motsvarande 30 hp per termin."
  },
  {
    "id": 8,
    "title": "Ja, alla studenter är försäkrade under utbytet."
  },
  {
    "id": 9,
    "title": "Vid allvarlig sjukdom, intagning på sjukhus eller behov av annan aktiv skadehjälp utanför Norden, skall omedelbar kontakt tas med Falck Global Assistance"
  },
  {
    "id": 10,
    "title": "Vissa universitet har krav på språktest. Exempelvis kan utbytesstudenter i vissa fall behöva skriva ett Test of English as a Foreign Language, TOEFL."
  },
  {
    "id": 11,
    "title": "Det går inte att söka utbytesstudier tillsammans. Däremot kan ni ansöka till samma utbyteslärosäte men utbytesplatserna blir tilldelade utifrån ett meritvärde som räknas ut i placeringsprocessen."
  },
  {
    "id": 12,
    "title": "Ett Learning agreement måste alla studenter fylla i innan de åker på utbytesstudier. Det är ett kontrakt mellan dig, ansvarig för tillgodoräkning och utbytesuniversitetet om din studieplan för din termin."
  },
  {
    "id": 13,
    "title": "Många skolor erbjuder alternativ för studentboende. I vissa fall finns boende på campus, medan man i andra fall söker lägenhet i stan på egen hand. Vi informerar gärna om de olika alternativen och kommer med tips och råd inför flytten"
  },
  {
    "id": 14,
    "title": " USA får du generellt sett inte arbeta när du är där som student. Det finns dock undantag och det går att arbeta på skolans campusområde eller på praktikplatser (internships)."
  },
  {
    "id": 15,
    "title": "Det är respektive college/universitets villkor som gäller för återbetalning och avgifter vid exempelvis avbokning och uppskjutande av studier och det är viktigt att du tar del av skolans villkor i samband med att du gör din ansökan. Vi försöker dock alltid hjälpa dig om det skulle uppstå några problem. Det är viktigt att du kontaktar oss så snart som möjligt i sådana fall."
  },
];

function renderQuestions() {
  let wrapper = document.getElementById("faq");
  wrapper.innerHTML = ""
  for (let j = 0; j < Questions.length; j++) {
    if (j != 0 && j % 4 == 0) {
      renderAdvertisement(wrapper)
    }
    createDiv(Questions[j].title, Answers[j].title, wrapper);

  }
}

function createDiv(title, answer, wrapper) {
  let createDiv = document.createElement("div");
  createDiv.classList.add("box");
  createDiv.innerHTML = `<p>${title}</p>`;
  // "initializes" arrow
  createDiv.classList.add("faq-arrow-down");
  createDiv.style.backgroundImage = "url('../Images/arrow-down.png')";
  wrapper.appendChild(createDiv);

  let divWithFaq = createAnswer(answer);
  createDiv.appendChild(divWithFaq);
  createDiv.addEventListener("click", function () {
    divWithFaq.classList.toggle("answer-result");
    if (divWithFaq.classList.contains("answer-result")) {
      createDiv.classList.add("faq-arrow-up");
      createDiv.classList.remove("faq-arrow-down");
      createDiv.style.backgroundImage = "url('../Images/arrow-up.png')";

      //FAQ automatically scrolls up to display whole answer
      createDiv.scrollIntoView({block: "center"})
    }
    // When not clicked, show arrow down
    else {
      createDiv.classList.remove("faq-arrow-up");
      createDiv.classList.add("faq-arrow-down");
      createDiv.style.backgroundImage = "url('../Images/arrow-down.png')";
    }
  })


  return createDiv
}

function createAnswer(answer) {
  let answerContainer = document.createElement("div");
  answerContainer.classList.add("hidden-answer-result");
  let answerDiv = document.createElement("div");
  answerDiv.innerHTML = answer
  answerContainer.appendChild(answerDiv);

  return answerContainer
}

// Renders a single ad
function renderAdvertisement(wrapper) {
  let div = document.createElement("div");
  div.classList.add("ad-faq");
  div.style.backgroundImage = `url("../Advertising-images/${randomizeAdNumber()}.png")`;
  wrapper.appendChild(div);
}

// Randomize a number from 1-11
function randomizeAdNumber() {
  let nr = Math.floor(Math.random() * 11) + 1;
  console.log(nr);
  return nr
}


renderQuestions()