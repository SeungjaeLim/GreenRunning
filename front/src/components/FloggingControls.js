// src/components/FloggingControls.js
import React, { useState } from 'react';
import ImageModal from './Modal';
import { Button } from '@mui/material';

function FloggingControls() {
    const [isFlogging, setIsFlogging] = useState(false);
    const [imageIndex, setImageIndex] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleStart = () => {
        setIsFlogging(true);
    };

    const handleStop = () => {
        setIsFlogging(false);
        const randomIndex = Math.floor(Math.random() * 3) + 1;
        setImageIndex(randomIndex);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <div style={{ padding: 20 }}>
                {isFlogging ? (
                    <Button variant="contained" color="primary" onClick={handleStop}>
                        플로깅 끝내고 나만의 플로그 만들기
                    </Button>
                ) : (
                    <Button variant="contained" color="secondary" onClick={handleStart}>
                        플로깅 시작하기
                    </Button>
                )}
                <ImageModal imageIndex={imageIndex} open={modalOpen} onClose={handleCloseModal} />
            </div>
        </div>
    );
}

export default FloggingControls;
