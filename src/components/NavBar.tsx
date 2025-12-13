export function NavBar() {
  return (
    <div className="flex justify-between bg-black items-center px-4 py-2">
      <p>Globitos</p>
      <button disabled className="bg-gray-700 p-2 rounded-md cursor-not-allowed">Próximamente</button>
    </div>
  );
}
