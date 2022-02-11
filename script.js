let myLeads = [];
let oldLeads = [];
const tabs = [
    {
    url: "https://www.linkedin.com/in/per-harald-borgen/"
    }
]
const inputBtn = document.getElementById("input-btn");
const saveBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
      listItems += `<li>
          <a target='_blank' href='${leads[i]}'>
           ${leads[i]} 
           </a>
          </li>`;
    }
    ulEl.innerHTML = listItems;
  }

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

saveBtn.addEventListener("click", function () {
    
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});




