import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const categories = useLoaderData();
    // console.log(categories);

    return (
        <div>
            <Helmet>
                <title>Home || Gadget Heaven</title>
            </Helmet>
            {/* <h1>This is Home Component</h1> */}
            <Banner />

            <div className="container mx-auto">
                <h1 className="text-center font-bold text-4xl my-10">Explore Cutting-Edge Gadgets</h1>
                <div className="grid grid-cols-12  gap-10">
                    <div className="col-span-2 bg-white p-6 rounded-xl">
                        <Categories categories={categories} />
                    </div>
                    <div className="col-span-10">
                        <Outlet />
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Home;