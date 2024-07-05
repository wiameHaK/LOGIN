document.getElementById('login-form').addEventListener('submit',function(event){
    event.preventDefault(); // Prevent the default form submission behavior>
    //this means preventing the form from actually submitting data to the server and reloading the page.
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'wiamehk' && password === 'wiame'){
        document.getElementById('message').textContent = 'Authentification réussie ! ';
       window.location.href = 'index.html';
       //location.reload();
    } else {
        document.getElementById('message').textContent = 'Nom d\'utilisateur ou mot de passe incorrect .';
    }
});D