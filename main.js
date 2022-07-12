const Namechild=document.getElementById('Namechild');
  const Childdob =document.getElementById('childdob');
  const FM=document.getElementById('FM');
  const Numb=document.getElementById('Numb');
  const Mail=document.getElementById('Mail');
  const Text=document.getElementById('Text');
  const addbtn=document.getElementById('addbtn');
const database=firebase.database();
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
  e.preventDefault();
    database.ref('/users/'+ Namechild.value).set({
      Namechild: Namechild.value,
      Childdob: Childdob.value,
      FM:FM.value,
      Number:Number.value,
      Mail:Mail.value,
      Text:Text.value


    });
  });
  addBtn.addEventListener('click', e => {
    e.preventDefault();
    usersRef.child(userId.value).set({
      first_name: firstName.value,
      last_name: lastName.value,
      age: age.value
    });
  });
