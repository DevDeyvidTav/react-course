import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { IMG } from './styles';

interface ImageWithBlurhashProps {
    src: string,
    blurhash: string
}

const ImageWithBlurhash = ({ src, blurhash }: ImageWithBlurhashProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div style={{ position: 'relative' }}>
            {
                !isLoaded &&
                <Blurhash
                    hash={blurhash}
                    width='500px'
                    height='100%'
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            }
            <IMG
                src={src}
                onLoad={handleImageLoad}
                style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
                alt='Imagem'
            />
        </div>
    );
};

export default ImageWithBlurhash;
