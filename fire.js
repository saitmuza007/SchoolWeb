const phone = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const parent = document.getElementById('parent');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const database = firebase.database();
const usersRef = database.ref('/users');
const normalUsersRef = usersRef.child('normal_users');
const superUsersRef = usersRef.child('super_users');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(userId.value).set({
    first_name: firstName.value,
    last_name: lastName.value,
    age: age.value,
    phone:phone.value,
    parent:parent.value

  });
  alert("Bye")
});
