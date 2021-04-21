import React, { FunctionComponent } from 'react';

export enum Extension {
    SVG = 'svg',
    PNG = 'png',
}

interface IconProps {
    className?: string;
    name: string;
    extension: Extension;
    width?: string;
    height?: string;
}

const Icon: FunctionComponent<IconProps> = ({ className, name, extension, width, height }) => {
    return (
        <img className={className}
            src={`icons/${extension}/${name}.${extension}`}
            alt={`${extension} ${name}`}
            width={width}
            height={height}
        />
    );
}

export default Icon;