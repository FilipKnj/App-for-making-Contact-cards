const contactName = document.querySelector('#contactName');
const contactPhoto = document.querySelector('#contactPhoto');
const contactJob = document.querySelector('#contactJob');
const contactNumber = document.querySelector('#contactNumber');
const contactEmail = document.querySelector('#contactEmail');
const contactSkype = document.querySelector('#contactSkype');
const contactInstagram = document.querySelector('#contactInstagram');
const contactSite = document.querySelector('#contactSite');


//Fukcija za prikazivanje kontakta na kontakt kartici
function seeContact() {
  let id = this.id;
  contactName.innerText = contactsArr[id].nameValue;
  contactPhoto.src = contactsArr[id].photoValue;
  contactJob.innerText = contactsArr[id].jobValue;
  contactNumber.innerText = contactsArr[id].numberValue;
  contactEmail.innerText = contactsArr[id].emailValue;
  contactSkype.innerText = contactsArr[id].skypeValue;
  contactInstagram.innerText = contactsArr[id].instagramValue;
  contactSite.innerText = contactsArr[id].siteValue;
}
