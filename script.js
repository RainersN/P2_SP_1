const quizData = [
  {
    question: 'Ko nozīmē šī zīme?',
    options: ['Dodiet ceļu', 'Stop', 'Slidens Ceļš', 'Tuvojas Sēlijas Poligons'],
    answer: 'Slidens Ceļš',
    image: 'https://t3.ftcdn.net/jpg/01/32/98/20/360_F_132982097_qZcsT4B0tmvr9Bq9T4HpUmVhEkQ98ROo.jpg',
  },
  {
    question: 'Jūs redzat negadījumu uz ceļa. Uz vietas jau ir neatliekamā medicīniskā palīdzība. Kā jūs rīkojaties?',
    options: ['Apstājos un izsaucu NMPD', 'Apbraucu avārīju', 'Lieku gāzi grīdā un triecos avārijā', 'Izsitu savu logu'],
    answer: 'Apbraucu avārīju',
    image: 'https://pbs.twimg.com/media/FiWQU4cWAAEyPfR.jpg',
  },
  {
    question: 'Kurā gadījumā drīkst lietot skaņas signālu?',
    options: ['Kad rodas bīstama situācija', 'Kad uz ceļa ir sastrēgums', 'Kad liekas pārāk kluss', 'Kad uznāk vēlme'],
    answer: 'Kad rodas bīstama situācija',
    image: 'https://th.bing.com/th/id/R.e56d8e872acbe114c55b20369928345d?rik=ch2KDK05Bt1lBg&pid=ImgRaw&r=0',
  },
  {
    question: 'Kāds ir maksimālais atļautais ātrums apdzīvotās vietās?',
    options: ['50km/h', '90km/h', '70km/h', '120km/h'],
    answer: '50km/h',
    image: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/08/TheGamer---Roblox-Car-Tycoon.jpg',
  },
  {
    question: 'Kā rīkoties,ja Jums rodas dusmas uz personu,kura seko ātruma ierobežojumam?',
    options: ['Nomierināties un turpināt ceļu', 'Ietriekties bezkauņas transportlīdzeklī', 'Izšaut raķeti no izpūtēja', 'Atvērt durvis un izlekt no sava transportlīdzekļa'],
    answer: 'Nomierināties un turpināt ceļu',
    image: 'https://th.bing.com/th/id/R.a77cb691cc54b69ce89338d9c86f94e8?rik=L72s50Bzg1MY9w&pid=ImgRaw&r=0',
  },
  {
    question: 'Jūs apstādina policija uz ceļa. Kā Jūs rīkojaties?',
    options: ['Strauji izvelku no kabatas maku', 'Parādu tiem savus dokumentus', 'Ātri aizbraucu prom', 'Izkāpju ārā un sāku kauties'],
    answer: 'Parādu tiem savus dokumentus',
    image: 'https://www.ventspilnieks.lv/wp-content/uploads/2018/06/LET_2401755.jpg',
  },
  {
    question: 'Jūs pa nakti uz ceļa pamanat šādu darinājumu. Kā jūs rīkojaties?',
    options: ['Steidzos pāri,ceru ka nepārsprāgs riepas.', 'Braucu atpakaļgaitā', 'Izkāpju no mašīnas un pakustinu to prom no ceļa', 'Cenšos apbraukt garām,neapstājoties priekš aizdomīgām personām'],
    answer: 'Cenšos apbraukt garām,neapstājoties priekš aizdomīgām personām',
    image: 'https://th.bing.com/th/id/OIP.OVMgtvW3IyMLf3387w7kRAHaE8?rs=1&pid=ImgDetMain',
  },
  {
    question: 'Jums iet uz beigām degviela. Kā jūs rīkojaties?',
    options: ['Meklēju DUS', 'Ieleju bākā ūdeni', 'Ieleju cita tipa degvielu', 'Nokārtojos bākā'],
    answer: 'Meklēju DUS',
    image: 'https://th.bing.com/th/id/R.bfbff34443d29693b3806c4cd2bc06ac?rik=XJp7oTXVLAAKFw&pid=ImgRaw&r=0',
  },
  {
    question: 'Kāda būs jūsu rīcība šādā situācijā?',
    options: ['Strauji bremzēšu', 'Cenšos apsteigt transportlīdzekli', 'Strauji mainīšu joslu', 'Lekšu ārā no sava transportlīdzekļa'],
    answer: 'Strauji bremzēšu',
    image: 'https://external-preview.redd.it/NgKL2W30I2343gGMj_APzPu-uUFG-jdCuYb97LE9pjA.jpg?auto=webp&s=df3cf2bd038f402de0a96ab6822f680560b41a86',
  },
  {
    question: 'Uz ceļa ir izveidojies sastrēgums. Ko jūs darat?',
    options: ['Iekļaujos satiksmē', 'Izmantoju skaņas signālu', 'Ietriecos priekšējā transportlīdzeklī', 'Izkāpju no mašīnas,lai pasmēķētu'],
    answer: 'Iekļaujos satiksmē',
    image: 'https://i.jauns.lv/t/2023/12/22/2996371/480x297.webp?v=1703258416',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const timerDisplay = document.getElementById('timer');
const imageElement = document.createElement('img');
imageElement.src = questionData.image;
imageElement.alt = 'Question Image';
imageElement.width = 300; // 👈 NEW
imageElement.height = 200; // 👈 NEW (or whatever works for your aspect ratio)
imageElement.style.maxWidth = '100%';
imageElement.style.display = 'block';
imageElement.style.margin = '10px 0';
const imageWrapper = document.createElement('div');
imageWrapper.style.width = '300px';
imageWrapper.style.height = '200px'; // Matches image size
imageWrapper.style.overflow = 'hidden';
imageWrapper.style.display = 'flex';
imageWrapper.style.alignItems = 'center';
imageWrapper.style.justifyContent = 'center';

imageWrapper.appendChild(imageElement);
quizContainer.appendChild(imageWrapper);

let currentQuestion = 0;
let score = 0;
let minimumScore = 9;
let incorrectAnswers = [];
let totalTime = 600; // 10 minūtes
let timer;

// Palīgfunkcija: jaukt masīvu
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Laika sākšana
function startGlobalTimer() {
  clearInterval(timer);
  timerDisplay.style.display = 'block';
  updateTimerDisplay();

  timer = setInterval(() => {
    totalTime--;
    updateTimerDisplay();

    if (totalTime <= 0) {
      clearInterval(timer);
      displayResult(true); // beidzās laiks
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  timerDisplay.textContent = `Atlikušais laiks: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Jautājuma attēlošana
function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const imageElement = document.createElement('img');
  imageElement.src = questionData.image;
  imageElement.alt = 'Question Image';
  imageElement.style.maxWidth = '300px';
  imageElement.style.display = 'block';
  imageElement.style.margin = '10px 0';

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(imageElement);
  quizContainer.appendChild(optionsElement);
}

// Atbildes pārbaude
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      clearInterval(timer);
      displayResult(false);
    }
  }
}

// Rezultātu attēlošana (ar kļūdām)
function displayResult(timeUp = false) {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  timerDisplay.style.display = 'none';

  let message = '';
  if (timeUp) {
    message = `⏰ Laiks beidzies!<br>Jūs ieguvāt ${score} pareizas atbildes no ${quizData.length}.`;
  } else if (score < minimumScore) {
    message = `❌ Jūs nenokārtojāt eksāmenu.<br>Jums ir tikai ${score} pareizas atbildes no ${quizData.length}.`;
  } else {
    message = `✅ Apsveicam! Jūs veiksmīgi nokārtojāt eksāmenu!<br>Jums ir ${score} pareizas atbildes no ${quizData.length}.`;
  }

  // Kļūdaino atbilžu uzskaite
  let mistakesHtml = '';
  if (incorrectAnswers.length > 0) {
    mistakesHtml = '<h3>Nepareizās atbildes:</h3>';
    incorrectAnswers.forEach(item => {
      mistakesHtml += `
        <p>
          <strong>Jautājums:</strong> ${item.question}<br>
          <strong>Jūsu atbilde:</strong> ${item.incorrectAnswer}<br>
          <strong>Pareizā atbilde:</strong> ${item.correctAnswer}
        </p>
      `;
    });
  }

  resultContainer.innerHTML = `
    ${message}
    ${mistakesHtml}
  `;
}

// Viktorizācijas restartēšana
function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  totalTime = 600;
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
  startGlobalTimer();
}

// Notikumu piesaiste
submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);

// Sākums
displayQuestion();
startGlobalTimer();
