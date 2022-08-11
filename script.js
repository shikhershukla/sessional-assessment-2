let data,
page = 1;

// fetching data
const xhr = new XMLHttpRequest();
const source =
  "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    // console.log(response);
    let output = "";
    for (let i = 0; i < Math.min(data.length, 10); i++) {
      output += `
        <div class="box">
            <img src="https://picsum.photos/250/?random=${i}">
            <div class="content">
                <p class="user">User - ${data[i].userId}</p>
                <p class="title">${data[i].title}</p>
                <p class="body">${data[i].body}</p>
            </div>
        </div>`;
    }
    document.querySelector(".container").innerHTML = output;
  }
};
xhr.send();

// implementing pagination
let pagination = new tui.Pagination("pagination", {
  totalItems: 100,
});

pagination.on("beforeMove", function (eventData) {
  page = eventData.page;
  updateContent();
});

function updateContent() {
  let output = "";
  for (let i = (page - 1) * 10; i < page * 10; i++) {
    output += `
        <div class="box">
            <img src="https://picsum.photos/250/?random=${i}">
            <div class="content">
                <p class="user">User - ${data[i].userId}</p>
                <p class="title">${data[i].title}</p>
                <p class="body">${data[i].body}</p>
            </div>
        </div>`;
  }
  document.querySelector(".container").innerHTML = output;
}
