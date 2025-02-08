"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureItem = ({
  imagePath,
  title,
  description,
  index,
}: {
  imagePath: string;
  title: string;
  description: string;
  index: number;
}) => {
  const isImageLeft = index % 2 === 0; // Alternate image position

  return (
    <div className="grid lg:grid-cols-2 items-center gap-20">
      {isImageLeft ? (
        <>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-20%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
            viewport={{ once: false }}
          >
            <Image
              src={imagePath}
              alt={title}
              width={400}
              height={800}
              className="rounded-3xl"
              style={{ objectFit: "contain", maxHeight: "800px", width: "auto" }}
            />
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "20%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:text-left"
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "-20%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:text-right"
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-20%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
            viewport={{ once: false }}
          >
            <Image
              src={imagePath}
              alt={title}
              width={400}
              height={800}
              className="rounded-3xl"
              style={{ objectFit: "contain", maxHeight: "800px", width: "auto" }}
            />
          </motion.div>
        </>
      )}
    </div>
  );
};

interface FeatureItemType {
  imagePath: string;
  title: string;
  description: string;
}

const items: FeatureItemType[] = [
  {
    imagePath: "/images/phone/1.png",
    title: "See Sticker Locations",
    description:
      "Every added sticker is automatically added to the map, making it easy to see where your stickers are located. You can easily select from which groups you want to see the stickers.", 
  },
  {
    imagePath: "/images/phone/2.jpg",
    title: "Sticks Feed",
    description:
      "See the newest stickers added to your groups in a feed. Discover were your friends are and like their stickers, photography and more!",
  },
  {
    imagePath: "/images/phone/3.png",
    title: "Compete with other groups & users",
    description:
      "Compete with other groups and users to see who has the most stickers. You can see the group rankings of a location by long-pressing on the map. Compete and collect achievements!",
  },
];

const FeatureSection = () => {
  return (
    <section className="md:pt-40 sm:pt-28 pt-12" id="portfolio">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        {items.map((item, index) => (
          <FeatureItem
            key={index}
            index={index}
            imagePath={item.imagePath}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
