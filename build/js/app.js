function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("people");

fetch("http://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    let people = data;

    return people.map(person => {
      let li = createNode("li");
      let span = createNode("span");

      li.innerHTML = person.name;
      span.innerHTML = person.email;

      append(li, span);
      append(ul, li);
    });
  });
