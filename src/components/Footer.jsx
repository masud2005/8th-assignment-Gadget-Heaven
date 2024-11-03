
const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <h1 className="text-center text-4xl font-bold mb-2 pt-10">Gadget Heaven</h1>
            <p className="text-center text-gray-500 pb-5">Leading the way in cutting-edge technology and innovation.</p>
            <div className="container mx-auto flex justify-around py-10 border-t">
                <div>
                    <h6 className="text-lg font-bold text-black mb-2">Services</h6>
                    <div className="flex flex-col gap-1 text-gray-500">
                        <a className="link link-hover ">Branding</a>
                        <a className="link link-hover ">Design</a>
                        <a className="link link-hover ">Marketing</a>
                        <a className="link link-hover ">Advertisement</a>
                    </div>
                </div>
                <div>
                    <h6 className="text-lg font-bold text-black mb-2">Company</h6>
                    <div className="flex flex-col gap-1 text-gray-500">
                        <a className="link link-hover ">About us</a>
                        <a className="link link-hover ">Contact</a>
                        <a className="link link-hover ">Jobs</a>
                        <a className="link link-hover ">Press kit</a>
                    </div>
                </div>
                <div>
                    <h6 className="text-lg font-bold text-black mb-2">Legal</h6>
                    <div className="flex flex-col gap-1 text-gray-500">
                        <a className="link link-hover ">Terms of use</a>
                        <a className="link link-hover ">Privacy policy</a>
                        <a className="link link-hover ">Cookie policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;