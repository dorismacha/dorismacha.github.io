import { useState } from "react";

type BlurImageProps = {
    src: string;       // full image
    blurSrc: string;   // small/blurred version (base64 or tiny jpg)
    alt: string;
    srcSet?: string;
    sizes?: string;
    className?: string;
};

export default function Image({ src, blurSrc, alt, srcSet, sizes, className }: BlurImageProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className || ""}`}>
            {/* Blurred placeholder */}
            <img
                src={blurSrc}
                alt={alt}
                aria-hidden="true"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"} blur-md scale-105 lg:scale-100`}
            />

            {/* Main image */}
            <img
                src={src}
                srcSet={srcSet}
                sizes={sizes}
                alt={alt}
                className="w-full h-full object-cover transition-opacity duration-500"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
