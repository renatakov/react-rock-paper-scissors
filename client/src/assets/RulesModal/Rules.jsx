import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import rules from "../../images/image-rules.svg"
const Rules = (props) => {
    return (
        <>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton style={{ borderBottom: "none" }}>
                    <Modal.Title style={{ color: "#0e0f45" }} id="contained-modal-title-vcenter">
                        RULES
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={rules} alt="" />

                </Modal.Body>
            </Modal>

        </>
    )
}

export default Rules