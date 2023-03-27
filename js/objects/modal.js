class Modal {
    modalTemplate = `<div class="modal-title">
                    </div>
                     <div class="modal-content"></div>`
    modalHTMLElement;
    modalTitle;
    modalContent;

    constructor(title, content) {
        this.modalHTMLElement = document.createElement('div');
        this.modalHTMLElement.className = "modal";
        this.modalHTMLElement.innerHTML = this.modalTemplate;

        overlay.appendChild(this.modalHTMLElement);
        document.body.appendChild(overlay);

        this.modalTitle = document.getElementsByClassName('modal-title')[0];
        this.modalContent = document.getElementsByClassName('modal-content')[0];
        this.modalTitle.innerHTML = "<h1>"+ title +"</h1>" + '<p id="x">X</p>';

        const closeButton = document.getElementById('x');
        console.log(closeButton);
        closeButton.addEventListener('click', this.hideModal);

        this.modalContent.innerHTML = ""

        if(title == "Results")
        {
            content.forEach(string => {
                this.modalContent.innerHTML += string;
            });
        } else this.modalContent.innerHTML = content;
    }

    showModal() {
        overlay.appendChild(this.modalHTMLElement);
        document.body.appendChild(overlay);
    }

    hideModal() {
        overlay.replaceChildren();
        overlay.remove();
    }


}