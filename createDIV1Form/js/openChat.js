  document.getElementById('chat-button').addEventListener('click',function(event){
   event.preventDefault();
   document.getElementById('bodyColor').hidden = false;
   document.getElementById('bcc_chatDIV').hidden = false;
   document.getElementById('chat-button').hidden = true;
   console.log("Found the end");
 });
