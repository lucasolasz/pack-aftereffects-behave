interface VideoPackHorizontalProps {
  src: string;
  width?: string; // Exemplo: "md:w-150"
  height?: string; // Exemplo: "md:h-80"
}

export default function VideoPackHorizontal({
  src,
  width = "md:w-150",
  height = "md:h-80",
}: VideoPackHorizontalProps) {
  return (
    <div>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`${width} ${height} shadow`}
      />
    </div>
  );
}
