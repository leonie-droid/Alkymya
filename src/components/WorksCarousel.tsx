import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const works = [
  {
    title: "Éclosion Minérale",
    category: "Sculpture",
    image: "https://picsum.photos/seed/art1/1200/800",
    description: "Une exploration de la matière brute et de sa transformation."
  },
  {
    title: "Souffle Végétal",
    category: "Installation",
    image: "https://picsum.photos/seed/art2/1200/800",
    description: "L'interaction entre l'air et les structures organiques."
  },
  {
    title: "Mémoire de Terre",
    category: "Céramique",
    image: "https://picsum.photos/seed/art3/1200/800",
    description: "Le cycle éternel de la terre et du feu."
  },
  {
    title: "Lumière Éthique",
    category: "Photographie",
    image: "https://picsum.photos/seed/art4/1200/800",
    description: "Capturer l'essence de la nature sans la perturber."
  }
];

export default function WorksCarousel() {
  return (
    <section id="oeuvres" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">Nos œuvres</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden group">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                  <span className="text-turquoise font-medium tracking-widest uppercase text-sm mb-2">
                    {work.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl text-white font-heading font-black mb-4">
                    {work.title}
                  </h3>
                  <p className="text-white/90 max-w-lg text-sm md:text-base font-normal">
                    {work.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(31, 79, 110, 0.4);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #02Adab !important;
        }
      `}} />
    </section>
  );
}
