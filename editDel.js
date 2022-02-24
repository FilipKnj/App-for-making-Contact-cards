const editDelLink = document.querySelector('#editDelLink');

editDelLink.addEventListener('click',() => {
  sidebar.classList.remove('hide');
  showEditDel()
});


//Fukcija za prikazivanje edit delete liste
function showEditDel() {
  sidebarList.innerHTML = '';
  let text = '';
  for (var i = 0; i < contactsArr.length; i++) {
    text += `<li class='sidebar-contact'>${contactsArr[i].nameValue} <i data-id=`+i+` class="bi bi-pencil edit"></i> <i id=`+i+` class="bi bi-trash delete"></i></li>`;
  };
  sidebarList.innerHTML += text;
  let delBtn = document.querySelectorAll('.delete');
  let editBtn = document.querySelectorAll('.edit');
  for (var i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener('click',deleteContact);
    editBtn[i].addEventListener('click',editContact);
  }

}

//Fukcija koja brise kontakt
function deleteContact() {
  let id = this.id;
  contactsArr.splice(id,1);
  showEditDel();
}

//Deo skripte koji edituje contacts
const editFormBody = document.querySelector('#editFormBody');
const enameInput = document.querySelector('#enameInput');
const ephotoInput = document.querySelector('#ephotoInput');
const ejobInput = document.querySelector('#ejobInput');
const enumberInput = document.querySelector('#enumberInput');
const eemailInput = document.querySelector('#eemailInput');
const eskypeInput = document.querySelector('#eskypeInput');
const einstagramInput = document.querySelector('#einstagramInput');
const esiteInput = document.querySelector('#esiteInput');
const egoBackBtn = document.querySelector('#ebackBtn');
const esaveBtn = document.querySelector('#esaveBtn');
let id;

egoBackBtn.addEventListener('click',close);
esaveBtn.addEventListener('click',saveEditContact);

function editContact() {
   id = this.getAttribute('data-id');
  editFormBody.classList.remove('hide');
  mainBody.classList.add('hide');
  enameInput.value = contactsArr[id].nameValue;
  ephotoInput.value = contactsArr[id].photoValue;
  ejobInput.value = contactsArr[id].jobValue;
  enumberInput.value = contactsArr[id].numberValue;
  eemailInput.value = contactsArr[id].emailValue;
  eskypeInput.value = contactsArr[id].skypeValue;
  einstagramInput.value = contactsArr[id].instagramValue;
  esiteInput.value = contactsArr[id].siteValue;
}

function saveEditContact() {
  let enameValue = enameInput.value;
  let ephotoValue = ephotoInput.value;
  let ejobValue = ejobInput.value;
  let enumberValue = enumberInput.value;
  let eemailValue = eemailInput.value;
  let eskypeValue = eskypeInput.value;
  let einstagramValue = einstagramInput.value;
  let esiteValue = esiteInput.value;

  contactsArr[id] = {
    nameValue : enameValue,
    photoValue : ephotoValue,
    jobValue : ejobValue,
    numberValue : enumberValue,
    emailValue : eemailValue,
    skypeValue : eskypeValue,
    instagramValue : einstagramValue,
    siteValue : esiteValue
  };

  close();
  createSidebar();
};
