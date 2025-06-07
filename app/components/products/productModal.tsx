import React from "react";
import { Button, Modal } from "react-bootstrap";
import { type ProductModalProps } from "~/types/product";

export const ProductModal = ({
    show,
    onClose,
    onSubmit,
    title,
    children,
    submitLabel = "Save",
}: ProductModalProps) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title || "Modal"}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{children}</Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    close
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    {submitLabel}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};