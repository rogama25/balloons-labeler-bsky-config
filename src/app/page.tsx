export default function Home() {
  return (
    <div className="p-4 py-8 flex w-full justify-center">
        <div className="flex flex-col items-center w-full md:w-3/4 gap-8">
            <h1 className="text-2xl md:text-5xl mb-2">Configurador de globitos 🎈</h1>
            <p className="text-center">Página en progreso...</p>
            <p className="text-center">Desde aquí se configurarán la fecha de cumple y algunas de tus etiquetas</p>
            <button disabled className="bg-gray-700 p-4 rounded-md cursor-not-allowed">La página está en progreso</button>
        </div>
    </div>
  );
}
