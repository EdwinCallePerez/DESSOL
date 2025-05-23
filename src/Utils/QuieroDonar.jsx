export default function QuieroDonar() {
  return (
    <>
  <button
  className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white font-semibold rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl transition-all duration-300 ease-in-out
             bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 text-center
             animate-glow hover:scale-110"
  type="button"
>
  <span className="text-sm">Quiero Donar</span>
  <i className="fas fa-heart text-lg mt-1 animate-bounce"></i>
</button>



    </>
  );
}
