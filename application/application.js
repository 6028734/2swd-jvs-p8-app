export class Application {
    constructor() {
        this.express = require('express');
        this.app = this.express();
        this.user = null; // no user yet

        document.addEventListener('DOMContentLoaded', (event) => {
            console.log("De pagina is volledig geladen");
            this.updateDOM();
        });
        
        console.log("Constructor van de Application class is aangeroepen");
    }

    updateDOM() {
        const loginLink = document.getElementById('loginLink');
        const logoutLink = document.getElementById('logoutLink');

        if (this.user) {
            loginLink.style.display = 'none';
            logoutLink.style.display = 'block';
        } else {
            loginLink.style.display = 'block';
            logoutLink.style.display = 'none';
        }
    }
    
    login() {
        const username = prompt("Enter your username:");
        const password = prompt("Enter your password:");

        if (username && password) {
            this.user = { username, password };
            this.updateDOM();
        } else {
            alert("Please enter a valid username and password.");
        }
    }
    logout() {
        this.user = null;
        this.updateDOM();
    }

    addEventListeners() {
        const loginLink = document.getElementById('loginLink');
        const logoutLink = document.getElementById('logoutLink');

        loginLink.addEventListener('click', this.login.bind(this));
        logoutLink.addEventListener('click', this.logout.bind(this));
    }

}

class User {
    constructor(username) {
        this.username = username;
    }
}

