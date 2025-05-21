  /* Used to create the point in which form will live, body of the page */
document.addEventListener("DOMContentLoaded", function() {
/*  
fetch('Genesys-Cloud-Message-Form-main/createDIV1Form/php/list-files.php')
  .then(response => response.json())
  .then(files => {
    files.forEach(file => {
      console.log('Found file:', file);
    });
  });
*/
  const createDivEl = document.createElement("div");
  createDivEl.id = 'bcc_formDIV';
  document.body.appendChild(createDivEl);

  /* Used to create the point in which chat will live, body of the page */
  const createDiv1 = document.createElement('div');
  createDiv1.id = 'bcc_chatDIV';
  createDiv1.hidden = true;
  document.body.appendChild(createDiv1);

  /* Button used to intitiate the form, body of the page */
  const initialButton = document.createElement('button');
  initialButton.id = 'bcc_openChat';
  document.body.appendChild(initialButton);

    /* Adding the form to the page */
  fetch('Genesys-Cloud-Message-Form-main/createDIV1Form/php/chat.php')
    .then(response => response.text())
    .then(data => {
       bcc_formDIV.innerHTML = data;
    })
    .catch(error => {
       console.error('Error loading file:', error);
  });
  
  const runList = document.createElement('script');
  runList.src = 'Genesys-Cloud-Message-Form-main/createDIV1Form/js/runListeners.js';
  runList.defer = true; 
  document.head.appendChild(runList);
  


  /* It's own stylesheet  */
  const sSheet = document.createElement('stylesheet');
  sSheet.rel = 'stylesheet';
  sSheet.href = 'Genesys-Cloud-Message-Form-main/creatDIV1Form/bcc_stylesheet.css';
  document.head.appendChild(sSheet);
});
