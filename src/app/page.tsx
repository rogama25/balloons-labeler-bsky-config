import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="p-4 py-8 flex w-full justify-center">
            <div className="flex flex-col items-center w-full md:w-3/4 gap-8">
                <h1 className="text-2xl md:text-6xl mb-2 font-bold">Configuración de globitos 🎈</h1>
                <p className="text-center">Página en progreso...</p>
                <p className="text-center">Desde aquí se configurarán la fecha de cumple y algunas de tus etiquetas</p>
                <Link className="bg-gray-700 p-4 rounded-md cursor-not-allowed" href="">La página está en
                    progreso</Link>
                <Link className="bg-amber-600 p-4 rounded-md cursor-pointer" href="/#tutorial">¿Cómo se usa?</Link>
                <hr className="border-white border-2 w-3/4"/>
                <h2 className="text-xl md:text-5xl mb-2 font-bold" id="tutorial">Tutorial de uso</h2>
                <h3 className="text-lg md:text-4xl mb-1 font-bold">Ver los globitos</h3>
                <div className="flex flex-col items-center gap-8 justify-center">
                    <p className="text-center">Para ver los indicadores de la gente, ve al perfil de <Link
                        href="https://bsky.app/profile/globitos.bsky.social"
                        target="_blank">@globitos.bsky.social</Link> y haz clic en el botón de &quot;Suscribirse&quot;.
                    </p>
                    <p className="text-center">Los indicadores se muestran desde 2 semanas antes de la fecha y hasta 1
                        semana después.</p>
                </div>
                <Image src="/media/img/subscribe.png" alt="Suscribirse" width={429} height={631}/>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center gap-8 justify-center">
                        <p className="text-center">En tu perfil se mostrará tal que así:</p>
                        <Image src="/media/img/profile.png" alt="Perfil" width={412} height={96}/>
                    </div>
                    <div className="flex flex-col items-center gap-8 justify-center">
                        <p className="text-center">Y encima de tus posts, tal que así:</p>
                        <Image src="/media/img/post.png" alt="Posts" width={615} height={157}/>
                    </div>
                </div>
                <h3 className="text-lg md:text-4xl mb-1 font-bold">Configurar globitos</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center gap-8 justify-center">
                        <p className="text-center">Por ahora la página no está terminada, pero se pueden configurar a
                            través de Bluesky</p>
                        <p className="text-center">Para hacerlo, envía la fecha de tu cumple por MD a <Link
                            href="https://bsky.app/profile/globitos.bsky.social"
                            target="_blank">@globitos.bsky.social</Link>. Desde la pestaña de mensajes, haz click
                            en &quot;nuevo&quot;, busca globitos y envía tu cumple en formato DD/MM. Por ejemplo 25/12
                            para el 25 de diciembre.</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 justify-center">
                        <video src="/media/video/create.mp4" controls className="w-1/2" preload="metadata"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
