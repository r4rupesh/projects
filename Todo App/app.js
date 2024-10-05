let inp = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector(".container");
let removeAlltask = document.querySelector(".removeAll");

 



btn.addEventListener("click", function () {
    updateList();
});
window.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        updateList();
  }
});

function updateList() {
  if (inp.value.trim() == "") {
    alert("please add some task");
    return;
  }
  let list = document.createElement("div");
  list.classList.add("update");
  let item = document.createElement("label");
  let check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("checkbox");
  item.classList.add("labels");
  item.innerText = inp.value;
  item.setAttribute("for", item.innerText);
  check.setAttribute("id", item.innerText);
  container.appendChild(list);
  list.appendChild(check);
  list.appendChild(item);
  inp.value = "";

  check.addEventListener("click", function (event) {
      setTimeout(() => {
          if (check.checked == true) {
              item.remove();
              check.remove();
              list.remove();
            }
        }, 200);
    });

   

    removeAlltask.addEventListener("click", function () {
        setTimeout(() => {
            list.remove();
        }, 1000);
        
       
    }
);

}
