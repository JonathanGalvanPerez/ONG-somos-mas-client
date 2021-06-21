import React from 'react'
import { ModalOverlay } from '@chakra-ui/modal';
import { Modal } from '@chakra-ui/react';
import { ModalContent } from '@chakra-ui/modal';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalBody } from '@chakra-ui/modal';

export default function ModalWrapper({ label, isOpen, onClose, children }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{label}</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}