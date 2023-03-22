import React from 'react';
import ReactDOM from 'react-dom/client';

const modalRoot = ReactDOM.createRoot(document.getElementById("modal"));

function Modal() { };

Modal.prototype.open = function (component) {
    this.component = component;
    modalRoot.render(<ModalWrapper that={this} />);
}

Modal.prototype.close = function () {
    return modalRoot.render();
}

function ModalWrapper({ that }) {

    return (
        <div class="modal fade show-update-modal" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    {that.component}
                </div>
            </div>
        </div>
    )
}

const modalObj = {
    open: function (component) {
        const modal = new Modal();
        return modal.open(component);
    },
    close: function () {
        const modal = new Modal();
        return modal.close();
    }
}

export default modalObj;