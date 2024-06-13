import { Heading } from "@medusajs/ui";
import Image from 'next/image';
import backgroundImg from '../../assets/skin.jpg';
import skincareImg from '../../assets/skin.jpg';

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-8 small:p-32 gap-6 bg-black bg-opacity-50">
        <span>
          <Heading
            level="h1"
            className="text-4xl sm:text-5xl leading-tight text-white font-bold"
          >
            Vital Derma Radiance
          </Heading>
          <Heading
            level="h2"
            className="text-2xl sm:text-3xl leading-snug text-gray-300 font-medium mt-2"
          >
            Discover the Essence of Radiant Skin
          </Heading>
        </span>
        <div className="mt-6">
          <Image
            src={skincareImg}
            alt="Skincare Products"
            className="w-64 h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Hero;
