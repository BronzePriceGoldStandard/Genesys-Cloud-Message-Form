  /* Used to create the point in which form will live, body of the page */
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

  const runList = document.createElement('javascript');
  runList.src = "js/runListeners.js"
  document.getElementById('bcc_chatDIV').innerHTML = runlist;
  /* Adding the form to the page */
  fetch('Genesys-Cloud-Message-Form/creatDIV1Form/php/chat.php')
    .then(response => response.text())
    .then(data => {
       document.getElementById('bcc_formDIV').innerHTML = data;
    })
    .catch(error => {
       console.error('Error loading file:', error);
  });

  /* It's own stylesheet  */
  document.head.appendChild(bcc_stylesheet.css);

