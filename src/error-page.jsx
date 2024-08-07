import { Link, useRouteError } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex flex-col relative poppins">
            <Navbar />
            <main className="flex-grow container">
                <section className="cursor-pointer"><Link to={'/'} className="text-gray-400">Home</Link> / <span>404 Error</span></section>
                <div className="flex flex-col justify-center items-center mt-10 xl:gap-20 gap-10 my-20 max-sm:my-10">
                    <section className="flex flex-col text-center gap-5">
                        <h1 className="text-8xl max-lg:text-6xl">404 Not Found</h1>
                        <p>Your visited page not found. You may go home page.</p>
                    </section>
                    <Link to={'/'} className="bg-[#DB4444] hover:bg-red-500 py-4 text-white px-10 rounded">Back to home page</Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
