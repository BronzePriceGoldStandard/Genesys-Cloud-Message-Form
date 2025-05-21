  document.getElementById('openMain').addEventListener('click',function(event){
   event.preventDefault();
   document.getElementById('bodyColor').hidden = false;
   document.getElementById('chat').hidden = false;
   document.getElementById('openMain').hidden = true;
   console.log("Found the end");
 });
