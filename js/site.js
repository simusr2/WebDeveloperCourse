GoToLoad();

function GoTo(selector) {
    let element = document.querySelector("[data-bs-target='" + selector + "']");
    element.click();
}

function GoToLoad() {
    let accordionSection = window.location.hash;

    if (accordionSection.length) {
        GoTo(accordionSection);
    }
}

function GoToHref(element) {
    let url = element.href;
    let parts = url.split('#');
    if (parts.length > 1) {
        GoTo("#" + parts.pop());
    }
}