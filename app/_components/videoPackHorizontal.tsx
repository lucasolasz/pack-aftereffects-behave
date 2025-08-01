interface VideoPackHorizontalProps {
  src: string;
}

export default function VideoPackHorizontal({ src }: VideoPackHorizontalProps) {
  return (
    <div>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="md:w-150 md:h-80 shadow"
      />
    </div>
  );
}
