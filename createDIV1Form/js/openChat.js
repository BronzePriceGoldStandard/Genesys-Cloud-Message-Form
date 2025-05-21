  document.getElementById('bcc_openChat').addEventListener('click',function(event){
   event.preventDefault();
   document.getElementById('bodyColor').hidden = false;
   document.getElementById('bcc_chatDIV').hidden = false;
   document.getElementById('bcc_openChat').hidden = true;
   console.log("Found the end");
 });
