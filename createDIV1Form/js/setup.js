  /* Used to create the point in which form will live, body of the page */
document.addEventListener("DOMContentLoaded", function() {
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
       document.getElementById('bcc_formDIV').innerHTML = data;
       const runList = document.createElement('script');
       runList.src = 'Genesys-Cloud-Message-Form-main/createDIV1Form/js/runListeners.js';
       runList.defer = true; 
       document.head.appendChild(runList);
       const runList1 = document.createElement('script');
       runList1.src = 'Genesys-Cloud-Message-Form-main/createDIV1Form/js/genesys.js';
       runList1.defer = true; 
       document.head.appendChild(runList1);
       const runList2 = document.createElement('script');
       runList2.src = 'Genesys-Cloud-Message-Form-main/createDIV1Form/js/openChat.js';
       runList2.defer = true; 
       document.head.appendChild(runList2);
    })
    .catch(error => {
       console.error('Error loading file:', error);
  });

  /* It's own stylesheet  */
  const sSheet = document.createElement('link');
  sSheet.rel = 'stylesheet';
  sSheet.href = 'Genesys-Cloud-Message-Form-main/createDIV1Form/bcc_stylesheet.css';
  document.head.appendChild(sSheet);
});
