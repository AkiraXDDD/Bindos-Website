import { useState, useRef, useEffect } from 'react';

export function useDraggable(initialPosition, boxSize = { width: 500, height: 200 }) {
  const [position, setPosition] = useState(initialPosition || { x: 0, y: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    document.body.style.userSelect = 'none';

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const newX = e.clientX - offset.current.x;
    const newY = e.clientY - offset.current.y;

    const maxX = screenWidth - boxSize.width;
    const maxY = screenHeight - boxSize.height;

    setPosition({
      x: clamp(newX, 0, maxX),
      y: clamp(newY, 0, maxY),
    });
  };

  const handleMouseUp = () => {
    dragging.current = false;

    document.body.style.userSelect = '';

    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return {
    position,
    handleMouseDown,
  };
}
