const xhr = new XMLHttpRequest();
const source =
  "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    let output = "";
    for (let i = 0; i < response.length; i++) {
      output += `
        <div class="box">
            <img src="https://picsum.photos/250/?random=${i}"> 
            <div class="content">
                <p class="user">User - ${response[i].userId}</p>
                <p class="title">${response[i].title}</p>
                <p class="body">${response[i].body}</p>
            </div>
        </div>`;
    }
    document.querySelector(".container").innerHTML = output;
  }
};
xhr.send();
