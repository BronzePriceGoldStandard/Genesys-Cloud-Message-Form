 document.getElementById('cancel').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('bodyColor').hidden = true;
  document.getElementById('bcc_chatDIV').hidden = true;
  document.getElementById('bcc_openChat').hidden = false;
  console.log("Executed a cancel of the form window");
 });
