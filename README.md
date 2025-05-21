# Genesys-Cloud-Message-Form

Sample View:
<a href="https://bronzecooley.com/showme">https://bronzecooley.com/showme</a>
<br>
Need help or want to provide feedback? Email me <a href="mailto:FormChatHelp@BronzeCooley.Com">FormChatHelp@BronzeCooley.Com</a>

<br><br>
This is my first Github, hopefully you find it useful. Thank you for stopping by.
<br>
When setting this up, you only need to include a single line of code in all page headers where chat will be used. You can setup a logic to prevent visibility until you need it.

Code:<br>
<code><script src="Genesys-Cloud-Message-Form-main/createDIV1Form/js/setup.js" type="text/javascript"></script></code>

The design is to have a lower-right corner form that was originally on Chat V2. 
Currently the demo asks for: First Name, Last Name, Email Address

Example:<br>
<img width="312" alt="image" src="https://github.com/user-attachments/assets/736e8a23-23f2-4049-9975-268eec5ff881" />  <img width="312" alt="image" src="https://github.com/user-attachments/assets/5fc412c4-aa63-41fb-9d82-45d80908c86b" />

<br>
This is built on a web message deployment that is configured to pop with business logic.<br>
Also, you need to update the <b>Genesys-Cloud-Message-Form-main/createDIV1Form/js/genesys.js</b>
<br>
<img width="600" alt="image" src="https://github.com/user-attachments/assets/3a1e5d0f-329a-46cf-a31b-a89780f4ebbc" />
<br>
Requires:
<br>
envrionment (Example, 'prod')
DeploymentKey


<br><br><br>
<b>Notes:</b> The logo should be stored in, and replace the current logo file. Use same name or you will need to modify the script:<br>
<code>Genesys-Cloud-Message-Form/createDiv1Form/img/logo.png</code>
<br><br><br>
Then it brings back those values from the Participant Data and not from the form inputs directly.

 
