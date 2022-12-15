const navbarBtn = document.getElementById('navbar-btn');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebar-close');
const sidebarItem = document.querySelectorAll('.app__sidebar-item');

navbarBtn.onclick = function () {
  console.log('clicked');
  sidebar.style.visibility = 'visible';
  sidebar.style.right = '0';
};

sidebarClose.onclick = function () {
  console.log('clicked');
  sidebar.style.visibility = 'hidden';
  sidebar.style.right = '-150px';
};

sidebarItem[0].onclick = function () {
  console.log('clicked');
  sidebar.style.visibility = 'hidden';
  sidebar.style.right = '-150px';
};
sidebarItem[1].onclick = function () {
  console.log('clicked');
  sidebar.style.visibility = 'hidden';
  sidebar.style.right = '-150px';
};
sidebarItem[2].onclick = function () {
  console.log('clicked');
  sidebar.style.visibility = 'hidden';
  sidebar.style.right = '-150px';
};
sidebarItem[3].onclick = function () {
  console.log('clicked');
  sidebar.style.visibility = 'hidden';
  sidebar.style.right = '-150px';
};
sidebarItem[4].onclick = function () {
  console.log('clicked');
  sidebar.style.visibility = 'hidden';
  sidebar.style.right = '-150px';
};
sidebarItem[5].onclick = function () {
  console.log('clicked');
  sidebar.style.visibility = 'hidden';
  sidebar.style.right = '-150px';
};
