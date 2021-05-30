import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context";
import { Link } from "react-router-dom";

const ProfileDetails = ({ userId, self }) => {
    const [selfUser] = useContext(UserContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (self) {
            setUser(selfUser);
        }
    }, []);

    if (user == null) {
        return <div></div>;
    }

    return (
        <div className="flex flex-col bg-gray-500 dark:bg-gray-700 rounded-lg m-4 p-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="">
                    <img
                        src={user.picture}
                        alt=""
                        className="w-full rounded-full"
                    />
                </div>
                <div className="dark:text-white col-span-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto ullam soluta rem officia aperiam mollitia,
                    cupiditate officiis, vero aspernatur assumenda atque sit
                    inventore quis totam, pariatur molestias. Facere sapiente
                    voluptates alias, tempore et ut sed nobis esse numquam
                    doloremque laborum culpa quod excepturi aperiam voluptas quo
                    iusto cumque. Nemo quae soluta doloremque, quam quis
                    necessitatibus ducimus voluptas doloribus voluptate
                    asperiores dolores hic corrupti, libero commodi aperiam
                    recusandae natus maiores eligendi ullam. Ipsa dignissimos
                    similique ex eum earum, eos itaque, laboriosam assumenda
                    aliquam, voluptate suscipit debitis voluptatibus hic!
                    Pariatur molestias facilis quas itaque quae? Blanditiis
                    dolor, velit quibusdam cum voluptates dolorum libero maiores
                    sed magnam beatae fuga ullam itaque voluptatem reprehenderit
                    nostrum nisi modi corporis adipisci facere cumque, quaerat,
                    error amet. Pariatur alias consequuntur explicabo facere
                    similique! Ab dignissimos laudantium, explicabo excepturi
                    consequuntur eaque. Neque itaque atque eius quam, explicabo
                    odit eveniet. Commodi beatae veniam distinctio sint
                    quibusdam vitae libero nulla suscipit, temporibus a,
                    sapiente id laboriosam adipisci voluptatem, esse iure. Vitae
                    sapiente voluptatem repudiandae minima sit corrupti maxime,
                    officia error ducimus aliquid. Laborum dolorem facilis dolor
                    minus natus molestias nostrum excepturi, porro illo
                    repellendus vel repellat rem, eligendi quasi saepe tempore
                    laudantium ipsa. Aut inventore quia maiores. Veniam porro
                    quasi nobis inventore assumenda nostrum sit soluta ea
                    possimus repudiandae, explicabo odio amet placeat,
                    praesentium laborum error laudantium expedita ipsa in
                    corporis est? Voluptate odit totam minus esse rem, earum
                    optio vero fugiat laboriosam voluptatum repellat amet eaque
                    est possimus sed, atque laborum ducimus obcaecati expedita
                    molestiae voluptatem itaque odio deserunt iste? At quo
                    possimus ex velit esse porro vel nam, voluptatem itaque
                    voluptatibus cum unde quis fuga vitae nulla. Doloribus,
                    doloremque recusandae! Magnam eius distinctio, officiis
                    optio vitae numquam, obcaecati iure laudantium pariatur
                    consectetur explicabo enim cum deserunt dignissimos aliquam
                    nulla doloribus sapiente modi dolorum culpa ducimus velit!
                    Corrupti qui temporibus quisquam repellendus aut eius sit
                    quae dicta unde! Distinctio neque esse rem libero similique
                    maxime corrupti modi beatae iusto quibusdam unde rerum
                    asperiores repellendus, iste sunt laudantium debitis quo
                    consectetur tempore! Qui dolore rerum inventore, eveniet
                    facere quod aperiam eum. Facilis quaerat quis praesentium
                    obcaecati maiores tempora eveniet quod recusandae harum
                    culpa neque cupiditate consequuntur, architecto labore! Ut
                    nihil ullam fuga non accusamus sunt ipsa, vitae quam a
                    repellendus illo culpa? Aliquam dignissimos, exercitationem
                    optio, eum vitae reprehenderit quo eius reiciendis officia
                    nulla eos pariatur qui deserunt perspiciatis nesciunt, quasi
                    labore numquam est voluptates culpa inventore? Natus,
                    molestias debitis!
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
