import Image from 'next/image';

interface MediumCard {
  img: string;
  title: string;
}

export default function MediumCard({ img, title }: MediumCard) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          fill={true}
          objectFit="cover"
          alt={title}
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
