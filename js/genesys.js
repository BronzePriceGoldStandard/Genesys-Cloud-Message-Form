console.log("Created by Bronze Cooley, please contact for information: siteDemo@bronzecooley.com");

document.getElementById("bcc_preChatForm").addEventListener("submit", function(e) {
  e.preventDefault();
  (function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
    environment: 'prod',
    deploymentId: '677568d8-da32-4ed2-bc6a-8865569a4ed9'
  });
Genesys('subscribe','Database.Ready',function(){
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  document.getElementById("bcc_preChatForm").hidden = true;
  document.getElementById('bcc_formDIV').hidden = true;
  console.log("Complete");
  Genesys('subscribe',"Messenger.Ready",function(){
   console.log("Database is ready!");
   Genesys("command", "Database.set", {
    messaging: {
      customAttributes: {
        firstName,
        lastName,
        email
      }
    }
  });
  Genesys("command", "Journey.setCustomerData", {
    email,
    firstName,
    lastName
  });
  Genesys("command", "Messenger.open");
});
 Genesys('subscribe','Messenger.closed',function(){
  Genesys('command','Messenger.clear');
  location.reload(true);
 });
});
});
