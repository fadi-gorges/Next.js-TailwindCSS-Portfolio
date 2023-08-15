import React from "react";

const Modal = ({title, buttons, modalOpen, handleModalClose, children}: {
    title: string,
    buttons?: { text: string, onClick: () => void }[],
    modalOpen: boolean,
    handleModalClose: () => void,
    children: React.ReactNode
}) => {
    const modalClasses = `modal ${modalOpen ? 'modal-open' : ''}`

    return (
        <dialog id="my_modal_2" className={modalClasses}>
            <form method="dialog" className="modal-box max-w-7xl">
                <h3 className="font-bold text-lg">{title}</h3>
                <div className="py-4">
                    {children}
                </div>
                <div className="modal-action">
                    <button onClick={handleModalClose} className="btn">Close</button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button onClick={handleModalClose}/>
            </form>
        </dialog>
    )
}

export default Modal