// Selektovanje Viewa
const mainBody = document.querySelector('#mainBody');
const formBody = document.querySelector('#formBody');
//Selektovanje Dugmica
const addContactLink = document.querySelector('#addContactLink');
const goBackBtn = document.querySelector('#backBtn');
const saveBtn = document.querySelector('#saveBtn');
//Selektovanje Input polja
const nameInput = document.querySelector('#nameInput');
const photoInput = document.querySelector('#photoInput');
const jobInput = document.querySelector('#jobInput');
const numberInput = document.querySelector('#numberInput');
const emailInput = document.querySelector('#emailInput');
const skypeInput = document.querySelector('#skypeInput');
const instagramInput = document.querySelector('#instagramInput');
const siteInput = document.querySelector('#siteInput');

addContactLink.addEventListener('click',() => {
  mainBody.classList.add('hide');
  formBody.classList.remove('hide');
});

goBackBtn.addEventListener('click',close);

saveBtn.addEventListener('click',saveContact);

//Array koji sadrzi sve kontakte
let contactsArr = [];
//Array koji sadrzi sva input polja
let formInputArr = [nameInput,photoInput,jobInput,numberInput,emailInput,skypeInput,instagramInput,siteInput];

//Fukcija za cuvanje kontakta
function saveContact() {
  let nameValue = nameInput.value;
  let photoValue = photoInput.value;
  let jobValue = jobInput.value;
  let numberValue = numberInput.value;
  let emailValue = emailInput.value;
  let skypeValue = skypeInput.value;
  let instagramValue = instagramInput.value;
  let siteValue = siteInput.value;
  let contact = {
    nameValue : nameValue,
    photoValue : photoValue,
    jobValue : jobValue,
    numberValue : numberValue,
    emailValue : emailValue,
    skypeValue : skypeValue,
    instagramValue : instagramValue,
    siteValue : siteValue
  };
  contactsArr.push(contact);
  for (var i = 0; i < formInputArr.length; i++) {
    formInputArr[i].value = '';
  };
  close();
  createSidebar();
}

function close() {
  mainBody.classList.remove('hide');
  formBody.classList.add('hide');
  editFormBody.classList.add('hide');
}
