import Modal from "@components/page/Modal";

const CitizenshipAUModal = ({modalOpen, handleModalClose}: {
    modalOpen: boolean,
    handleModalClose: () => void
}) => {
    return (
        <Modal title="CitizenshipAU" modalOpen={modalOpen} handleModalClose={handleModalClose}>
            <p>CitizenshipAU is a website xD</p>
        </Modal>
    )
}

export default CitizenshipAUModal