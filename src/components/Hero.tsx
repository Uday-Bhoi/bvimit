export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://harmless-tapir-303.convex.cloud/api/storage/ec11cb7b-4e6e-4a3a-803c-6423fd5e3e9c')",
        }}
      />
    </section>
  );
}