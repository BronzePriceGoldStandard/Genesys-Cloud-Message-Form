  /* Used to create the point in which form will live, body of the page */
  const createDiv = createElement('div');
  createDiv.id('bcc_formDIV');
  document.body.appendChild(createDiv);

  /* Used to create the point in which chat will live, body of the page */
  const createDiv = createElement('div');
  createDiv.id('bcc_chatDIV');
  createDiv.hidden = true;
  document.body.appendChild(createDiv);

  /* Button used to intitiate the form, body of the page */
  const initialButton = createElement('button');
  initialButton.id = 'bcc_openChat';
  document.body.appendChild(initialButton);

  /* Adding the form to the page */
  fetch('php/chat.php')
    .then(response => response.text())
    .then(data => {
       document.getElementById('bcc_formDIV').innerHTML = data;
    })
    .catch(error => {
       console.error('Error loading file:', error);
  });

  /* It's own stylesheet  */
  document.head.appendChild(bcc_stylesheet.css);

