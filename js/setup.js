function setup(){
  const createDiv = createElement('formPoint');
  createDiv.id('formPoint');
  document.body.appendChild(createDiv);
  
  const initialButton = createElement('button');
  initialButton.id = 'openMain';
  
  document.head.appendChild(bronzeStylesheet.css);
  document.body.appendChild('php/chat.php');


  
}

setup()
