export default function LoginPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <form action="/startLogin" method="GET">
        <h2 className="text-2xl font-bold mb-4">Login with Bluesky</h2>
        <input type="text" placeholder="Bluesky handle" className="p-2 rounded-md text-black mb-4 bg-white"
               name="handle"/>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Start Login
        </button>
      </form>
    </div>
  );
}
