GoToLoad();

document.querySelectorAll(".copy-url").forEach(element => {
    element.addEventListener("click", function () {
        let anchor = this.parentElement.parentElement.parentElement.id;
        let url = window.location.protocol + "//" + window.location.hostname + "/#" + anchor;
        navigator.clipboard.writeText(url);
    });
})


function GoTo(selector, updateHash) {
    let element = document.querySelector("[data-bs-target='" + selector + "']");
    if (element != null && element.getAttribute("aria-expanded") != "true") {
        element.click();
    }
}

function GoToLoad() {
    let accordionSection = window.location.hash;

    if (accordionSection.length) {
        GoTo(accordionSection, true);
    } else {
        GoTo("#intro", false);
    }
}

function GoToHref(element) {
    let url = element.href;
    let parts = url.split('#');
    if (parts.length > 1) {
        GoTo(seletor);
    }
}