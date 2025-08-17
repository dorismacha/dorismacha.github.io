import type { SVGProps } from "react";

export default function GoogleScholarIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            {...props}
        >
            <path d="M256 32L32 192h96v96h96v96h64v-96h96v-96h96L256 32z" />
            <circle cx="256" cy="448" r="32" />
        </svg>
    );
}
