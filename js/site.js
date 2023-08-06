GoToLoad();

const previewerModalSelector = '#previewer-modal';

const previewerModal = new bootstrap.Modal(previewerModalSelector, {
    keyboard: false
});

const previewerModalElement = document.querySelector(previewerModalSelector);

previewerModalElement.addEventListener('shown.bs.modal', () => {
    let object = previewerModalElement.querySelector("object");
    let iframe = previewerModalElement.querySelector("iframe");
    object.data = object.data;
    iframe.src = iframe.src;
});

document.querySelectorAll(".copy-url").forEach(element => {
    element.addEventListener("click", function () {
        let anchor = this.parentElement.parentElement.parentElement.id;
        let url = window.location.protocol + "//" + window.location.hostname + "/#" + anchor;
        navigator.clipboard.writeText(url);
    });
})

document.querySelectorAll(".resource-button").forEach(element => {
    element.addEventListener("click", function () {
        ShowResource(this);
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

function ShowResource(element) {
    let url = element.getAttribute("data-href");
    let type = element.getAttribute("data-type");

    let anchor = document.getElementById("external-link-anchor");

    anchor.href = url;

    let object = previewerModalElement.querySelector("object");
    let iframe = previewerModalElement.querySelector("iframe");

    if (type == "pdf") {
        object.data = url;
        object.classList.remove("d-none");
        iframe.classList.add("d-none");
    } else if (type == "html") {
        iframe.src = url;
        object.classList.add("d-none");
        iframe.classList.remove("d-none");
    }

    let htmlTitle = element.parentElement.querySelector("h4").innerHTML;
    previewerModal._element.querySelector(".modal-title").innerHTML = htmlTitle;
    previewerModal.show();
}

//myModal.show();