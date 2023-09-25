import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react';

interface ToolkitOperations {
    isOpen: boolean,
    onClose: () => void
}

const Toolkit = ({
    isOpen,
    onClose
}: ToolkitOperations ) => {

	return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Apryse Toolkit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box w={"100%"}>
                        <Text>Test</Text>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
	);
};

export default Toolkit;