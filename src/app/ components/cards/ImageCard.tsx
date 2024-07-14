import useLocaleStore from "@/app/store/locale";
import { ImageCardProps } from "@/app/types/homepage";

export function ToedurImageCard({ name, image, nationality }: ImageCardProps) {
  const { theme } = useLocaleStore();
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative flex flex-col col-span-1 h-[8rem] w-[8rem] rounded-full overflow-hidden shadow-md border-4"
    >
      {/* <p
        style={{
          position: "absolute",
          width: "100%",
          bottom: "0",
          textAlign: "center",
          background: `${theme.bgPartialTransparency}`
        }}
        className="card flex flex-col text-white"
      >
        <span>{name}</span>
        <span>{nationality}</span>
      </p> */}
    </section>
  );
}
