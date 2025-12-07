import Image, { ImageProps } from 'next/image';
import React from 'react';

interface WhatsappIconProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
    size?: number;
}

const WhatsappIcon: React.FC<WhatsappIconProps> = ({ size = 100, ...props }) => {
    return (
        <Image
            src="/whatsapp.gif"
            alt="whatsapp"
            priority
            width={size}
            height={size}
            className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center"
            {...props}
        />
    );
};

export default WhatsappIcon;
