const list = document.querySelector('#list')
const pathForm = document.querySelector('#path-form');
const frontEndForm = document.querySelector('#front-end-form');
const backEndForm = document.querySelector('#back-end-form');
const technologiesForm = document.querySelector('#technologies-form');
const questionsSection = document.querySelector('#questions');
const result = document.querySelector('#result');
const aluraBackEnd = document.querySelector('#alura-back-end');
const aluraFrontEnd = document.querySelector('#alura-front-end');
let isFrontEnd = false;

function addItemToList(itemText) {
  list.innerHTML += `<li>${itemText}</li>`
}

function handlePath() {
  const frontEndRadio = pathForm.elements['front'];
  pathForm.classList.add('hide');
  result.querySelector('#placeholder').classList.add('hide');
  
  if(frontEndRadio.checked === true) {
    addItemToList('🎯 Front-end');
    isFrontEnd = true;
    frontEndForm.classList.remove('hide')
  } else {
    addItemToList('🎯 Back-end');
    backEndForm.classList.remove('hide')
  }
}

function handleFrontEnd() {
  const reactRadio = frontEndForm.elements['react'];

  if(reactRadio.checked === true) {
    addItemToList('🧩 React');
  } else {
    addItemToList('🧩 Vue');
  }
  frontEndForm.classList.add('hide');
  technologiesForm.classList.remove('hide');
}

function handleBackEnd() {
  const cSharpRadio = backEndForm.elements['c-sharp'];

  if(cSharpRadio.checked === true) {
    addItemToList('🧩 C#');
  } else {
    addItemToList('🧩 Java');
  }

  backEndForm.classList.add('hide')
  technologiesForm.classList.remove('hide');
}

function handleTechnologies() {
  const inputValue = technologiesForm.elements[0].value;
  if(inputValue !== '') {
    addItemToList(`🧩 ${inputValue}`);
  }
  technologiesForm.reset();
}

function finish() {
  questionsSection.classList.add('hide');
  document.body.classList.add('finished');
  
  if(isFrontEnd === true) {
    aluraFrontEnd.classList.remove('hide');
  } else {
    aluraBackEnd.classList.remove('hide');
  }
}