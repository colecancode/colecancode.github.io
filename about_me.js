var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");
var tabcontainer = document.getElementById("tab-container");
var idx = 0;

function opentab(_idx) {
    if (_idx == idx) return;
    idx = _idx;
    for (tablink of tablinks)
        tablink.classList.remove("active-link");

    for (tab of tabcontents)
        tab.classList.remove("active-tab");

    event.currentTarget.classList.add("active-link");
    tabcontents[idx].classList.add("active-tab");
    tabcontainer.style.height = `${tabcontents[idx].scrollHeight}px`;
    if (tabcontents[idx].id == "pets") {
        tabcontents[idx].scrollLeft = 1;
        update_pets();
    }
}

window.addEventListener('resize', () => {
    tabcontainer.style.height = `${tabcontents[idx].scrollHeight}px`;
});