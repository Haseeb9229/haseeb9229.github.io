import { IconButton, Tooltip, styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';

const StyledIconButton = styled(IconButton)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: white;
    padding: 10px;
`

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
    background-color: #38bdf8;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0px 8px 24px rgba(18, 22, 20, 0.25);
`

function ScrollToTop() {
    const [open, setOpen] = React.useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const handleClick = () => {
        setOpen(false);
        scroll.scrollToTop({ duration: 0 });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 500;
            if (window.scrollY > scrollThreshold) setShouldRender(true)
            else setShouldRender(false);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, []);

    return (
        shouldRender &&
        <Tooltip title='Scroll to top' placement='top' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <StyledIconButton size='large' aria-label='scroll to top' onClick={handleClick} >
                <StyledArrowIcon fontSize={40} />
            </StyledIconButton>
        </Tooltip>
    )
}

export default ScrollToTop