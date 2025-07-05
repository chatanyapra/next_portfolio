import Image from "next/image";
import iconMap from "@/utils/iconMap";

interface IconsImageProps {
    name: string;
    alt?: string;
}

const IconsImage = ({ name, alt }: IconsImageProps) => {
    const src = iconMap[name.toLowerCase()];

    if (!src) {
        return <div>Image not found</div>;
    }

    return (
        <Image
            src={src}
            alt={alt || name}
            width={40}
            height={40}
            className="object-contain"
        />
    );
};

export default IconsImage;
