 document.getElementById('cancel').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('bodyColor').hidden = true;
  document.getElementById('chat').hidden = true;
  document.getElementById('openMain').hidden = false;
  console.log("Executed a cancel of the form window");
 });
