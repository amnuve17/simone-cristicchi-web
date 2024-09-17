import React, { useState } from 'react';

const ShirtSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

return (
    <div className="flex">
    {['S', 'M', 'L', 'XL'].map((size) => (
        <div 
            key={size}
            className={`size-[30px] text-center hover:cursor-pointer border-1 dark:border-white border-black ${
                selectedSize === size ? 'bg-black dark:bg-white text-white dark:text-black dark:border-white' : 'text-black dark:text-white' // Set color to white when selected and black when not selected
            } ${
                size === 'M' ? 'border-t-1 border-b-1 border-black border-s-0 border-e-0 dark:border-white' : size === 'L' ? ' dark:border-white border-e-0' : ''
            }`}
            onClick={() => handleSizeChange(size)}
        >
            {size}
        </div>
    ))}
</div>
);
};

export default ShirtSizeSelector;