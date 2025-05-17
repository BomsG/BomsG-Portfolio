import React, { useEffect, useState } from 'react';
export const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
    const onMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const onMouseEnter = () => {
      setHidden(false);
    };
    const onMouseLeave = () => {
      setHidden(true);
    };
    const onMouseDown = () => {
      setClicked(true);
    };
    const onMouseUp = () => {
      setClicked(false);
    };
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);
  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }
  return <>
      <div className={`custom-cursor-ring fixed pointer-events-none z-[9999] rounded-full border-2 border-cyan-400 transition-transform duration-150 ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`} style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: '30px',
      height: '30px',
      marginLeft: '-15px',
      marginTop: '-15px',
      transform: `${clicked ? 'scale(0.75)' : linkHovered ? 'scale(1.5)' : 'scale(1)'}`,
      transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out'
    }}></div>
      <div className={`custom-cursor-dot fixed pointer-events-none z-[9999] rounded-full bg-cyan-400 transition-opacity duration-150 ${hidden ? 'opacity-0' : 'opacity-100'}`} style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: '8px',
      height: '8px',
      marginLeft: '-4px',
      marginTop: '-4px'
    }}></div>
    </>;
};