<html>
<head>
  <meta name="viewport" content="height=device-height,width=device-width, initial-scale=1.0">
</head>
<body>
  <div id="bodyColor" hidden>
    <table id="headerTable">
      <tr>
        <td>
          <img id="cLogo" src="img/OrLogo.png"></img>
        </td>
        <td>
          <h3 id="chatHeader">YOUR COMPANY NAME</h3>
        </td>
      </tr>
    </table>
<form id="preChatForm">
  <input class="inputFields" type="text" id="firstName" placeholder="First Name" required />
  <input class="inputFields" type="text" id="lastName" placeholder="Last Name" required />
  <input class="inputFields" type="email" id="email" placeholder="Email" required />
  <br><br>
  <button class="submitButton" type="submit">STAR CHAT</button><br><br>
</form>
<button id="cancel" class="cancelButton" type="submit">CANCEL</button>
<br>
</div>
<script>
 document.getElementById('cancel').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('bodyColor').hidden = true;
  document.getElementById('chat').hidden = true;
  document.getElementById('openMain').hidden = false;
  console.log("Executed a cancel of the form window");
 });
</script>
</body>
</html>
