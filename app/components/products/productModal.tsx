import { Button, Modal } from "react-bootstrap";
import { type ProductModalProps } from "~/types/product";

export const ProductModal = ({
    show,
    onClose,
    title,
    children,
    submitLabel = "Save",
    isSubmitting = false,
    ...props
}: ProductModalProps) => {
    return (
        <Modal show={show} onHide={onClose} {...props}>
            <Modal.Header closeButton>
                <Modal.Title>{title || "Modal"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    close
                </Button>
                <Button variant="primary" type="submit" form="product-form" disabled={isSubmitting}>
                    {submitLabel}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};