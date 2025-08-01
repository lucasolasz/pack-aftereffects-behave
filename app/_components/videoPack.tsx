interface VideoPackProps {
  src: string;
}

export default function VideoPack({ src }: VideoPackProps) {
  return (
    <div>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="md:w-80 md:h-150 shadow p-2"
      />
    </div>
  );
}
