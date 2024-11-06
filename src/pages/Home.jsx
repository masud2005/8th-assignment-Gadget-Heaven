import { Outlet, useLoaderData } from "react-router-dom";
// import Banner from "../Banner";
// import Categories from "../Categories";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {

    const categories = useLoaderData();
    // console.log(categories);

    return (
        <div>
            <Helmet>
                <title>Home || Gadget Heaven</title>
            </Helmet>
            {/* <h1>This is Home Component</h1> */}
            {/* <Banner /> */}
            <Banner />

            <div className="container mx-auto px-2">
                <h1 className="text-center font-bold text-3xl md:text-4xl my-10">Explore Cutting-Edge Gadgets</h1>
                <div className="grid md:grid-cols-12 gap-5 ">
                    <div className="md:col-span-3 lg:col-span-2">
                        <Categories categories={categories} />
                    </div>
                    <div className="md:col-span-9 lg:col-span-10">
                        <Outlet />
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Home;