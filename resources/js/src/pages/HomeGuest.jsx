import GuestComponent from "../middlewares/GuestComponent";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

const HomeGuest = () => {
    return (
        <GuestComponent>
            <div className="min-h-screen dark:bg-gray-800">
                <Navbar login={true} register={true} />
                <div className="container mx-auto flex flex-col">
                    <div className="my-3">
                        <h1 className="text-2xl font-bold text-black dark:text-blue-200 ">
                            SmartLolo Social Logo
                        </h1>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                        <div className="flex-col space-y-3 w-full md:w-2/3">
                            <h3 className="text-xl font-semibold text-black dark:text-blue-100">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </h3>
                            <p className="text-black dark:text-white">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Magni, nemo! Dicta consequatur
                                eveniet minima voluptates delectus libero fuga
                                eius dolore tempore quidem aliquam autem
                                possimus suscipit et ullam sit magnam, provident
                                adipisci! Neque iure non aperiam quaerat,
                                obcaecati, molestias adipisci consectetur
                                voluptas maxime in perspiciatis ratione? Dolorum
                                nobis ex aliquam minus porro similique vel,
                                tempora perspiciatis impedit explicabo dicta
                                doloremque at cupiditate iste nesciunt, corrupti
                                quod commodi laboriosam illum incidunt
                                temporibus suscipit corporis. Quasi officia vero
                                aliquam, neque sint laborum nesciunt pariatur
                                blanditiis quisquam. Tempore, vel possimus ex,
                                labore dolore sequi eligendi eaque libero cumque
                                in veniam dolores, odio distinctio aspernatur
                                maiores? Odio cum asperiores veritatis non eius
                                voluptatum sed adipisci reprehenderit tenetur
                                tempora totam sunt, nostrum incidunt! Quod,
                                ducimus laborum? Explicabo temporibus
                                repellendus eveniet rerum minima, expedita amet
                                dicta distinctio impedit at? Corrupti voluptates
                                architecto delectus magni non praesentium
                                adipisci vitae iure, dolorum eaque maiores!
                                Minima laboriosam facilis fugit in fugiat dolore
                                ducimus impedit animi odit aliquid, officiis
                                voluptate cum, debitis molestiae praesentium
                                neque reprehenderit! Quo quod dolorem explicabo
                                libero tempore aut sint quos ab beatae
                                consequuntur error amet repellendus,
                                reprehenderit unde maiores odio rerum inventore
                                soluta distinctio et temporibus perspiciatis.
                                Voluptatibus excepturi pariatur velit quis illum
                                minima veniam!
                            </p>
                        </div>
                        <LoginForm />
                    </div>
                </div>
                <Footer />
            </div>
        </GuestComponent>
    );
};

export default HomeGuest;
