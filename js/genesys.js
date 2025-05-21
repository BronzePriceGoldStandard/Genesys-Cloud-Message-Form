  (function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset                                                                                                                                                              = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.                                                                                                                                                             min.js', {
    environment: '[REDACTED]',
    deploymentId: '[REDACTED]'
  });

document.getElementById("preChatForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  document.getElementById("preChatForm").hidden = true;
  document.getElementById('formPoint').hidden = true;
  console.log("Complete");

  Genesys('subscribe',"Database.Ready",function(){
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
