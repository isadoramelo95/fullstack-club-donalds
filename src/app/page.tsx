import Image from "next/image";

const HomePage = () => {
  return (
    <Image
      src="https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQac8bHYlkBUjlHSKiuseLm2hIFzVY0OtxEPnw"      alt="Imagem de teste"
      width={800}
      height={600}
      unoptimized={true} // Desativa a otimização de imagens do Next.js
    />
  );
};

export default HomePage;
