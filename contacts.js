const sidebar = document.querySelector('#sidebar');
const showContactsLink = document.querySelector('#showContactsLink');
const closeSidebar = document.querySelector('#closeSidebar');
let sidebarList = document.querySelector('.sidebar-list')

showContactsLink.addEventListener('click',() => {
  sidebar.classList.remove('hide');
  createSidebar();
});

closeSidebar.addEventListener('click',() => {
  sidebar.classList.add('hide');
  sidebarList.innerHTML = '';
});

//Fukcija za kreiranje sidebar liste
function createSidebar() {
  sidebarList.innerHTML = '';
  for (var i = 0; i < contactsArr.length; i++) {
    let li = document.createElement('li');
    li.classList.add('sidebar-contact');
    li.innerText = contactsArr[i].nameValue;
    li.id = i;
    sidebarList.appendChild(li);
    li.addEventListener('click',seeContact)
  };
}
