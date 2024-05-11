// src/components/Modal.js
import React from 'react';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';


function ImageModal({ imageIndex, open, onClose }) {
    if (!imageIndex) return null;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{
                position: 'relative',
                width: 'auto',
                maxHeight: '80%',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
                borderRadius: 2,
                outline: 'none'
            }}>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <img src={`/images/${imageIndex}.png`} alt="Flog" style={{ width: '100%', maxHeight: '100%', display: 'block' }} />
                <Button variant="contained" color="primary">
                        플로그 소장하기
                    </Button>
            </Box>
        </Modal>
        </div>
    );
}

export default ImageModal;
