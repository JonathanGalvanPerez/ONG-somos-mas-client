import React from 'react'
import { ModalOverlay } from '@chakra-ui/modal';
import { Modal, ModalCloseButton } from '@chakra-ui/react';
import { ModalContent } from '@chakra-ui/modal';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalBody } from '@chakra-ui/modal';

export default function ModalWrapper({ label, isOpen, onClose, children }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent h="max-content" bg="#9ac9fb" w={{ base: "95%", lg: "80%" }}>
                <ModalHeader textAlign="center" as="ins" fontSize={{ base: "xl", md: "1xl", lg: "3xl" }}>{label}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}