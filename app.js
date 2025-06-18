// let API_KEY = "https://api.github.com/users/input.value"
// let input = document.getElementById('userinput').value;

// let API_URL = "https://api.github.com/users/${input.value}"
// console.log(API_KEY);



function findUSerdata(){
    let username = document.getElementById('userinput').value;
    if (!username) {
        alert("Please enter correct username");
        return;
      }

      const url = `https://api.github.com/users/${username}`;

      fetch(url)
      .then(response => {
        if (!response){
            throw new Error("User not found");
        }
        return response.json();

      })
      

      .then(data => {
          const resultDiv = document.getElementById('result');
          resultDiv.innerHTML = `
            <p><strong>Name:</strong> ${data.name || 'No name provided'}</p>
            <p><strong>Username:</strong> ${data.login}</p>
            <p><strong>Bio:</strong> ${data.bio || 'No bio available'}</p>
            <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <img src="${data.avatar_url}" width="100">
          `;
        })
      
}