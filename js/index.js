document.addEventListener("DOMContentLoaded", function() {
   fetch ("https://api.github.com/users/leandrofcr/repos")
    .then(function(response){
         return response.json();
    })
    .then(function(data){
        console.log(data);
        let repos = document.getElementById("repos");
        let html = "";
        data.forEach(function(repo){
            html += `<li><a href="${repo.html_url}">${repo.name}</a></li>`;
        });
        repos.innerHTML = html;
    })
    .catch(function(error){
        console.log(error);
    });
    
    fetch ("https://api.github.com/users/leandrofcr")
    .then(function(response){
         return response.json();
    })

    .then(function(data){
        console.log(data);
        let user = document.getElementById("user");
        let html = "";
        html += `<li><a href="${data.html_url}">${data.name}</a></li>`;
        user.innerHTML = html;
    })

    .catch(function(error){
        console.log(error);
    });

    fetch ("https://api.github.com/users/leandrofcr/followers")

    .then(function(response){
         return response.json();
    })

    .then(function(data){
        console.log(data);
        let followers = document.getElementById("followers");
        let html = "";
        data.forEach(function(follower){
            html += `<li><a href="${follower.html_url}">${follower.login}</a></li>`;
        });
        followers.innerHTML = html;
    })

    .catch(function(error){
        console.log(error);
    });

    fetch ("https://api.github.com/users/leandrofcr/following")

    .then(function(response){
         return response.json();
    })

    .then(function(data){
        console.log(data);
        let following = document.getElementById("following");
        let html = "";
        data.forEach(function(following){
            html += `<li><a href="${following.html_url}">${following.login}</a></li>`;
        });
        following.innerHTML = html;
    })

    .catch(function(error){
        console.log(error);
    });

    fetch ("https://api.github.com/users/leandrofcr/starred")

    .then(function(response){
         return response.json();
    })

    .then(function(data){
        console.log(data);
        let starred = document.getElementById("starred");
        let html = "";
        data.forEach(function(starred){
            html += `<li><a href="${starred.html_url}">${starred.name}</a></li>`;
        });
        starred.innerHTML = html;
    })
});


