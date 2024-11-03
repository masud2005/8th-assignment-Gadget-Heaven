
const Heading = ({title, subtitle}) => {
    return (
        <div className="bg-primary py-10">
            <h1 className="text-center text-white font-bold text-3xl mb-3">{title}</h1>
            <p className="text-center text-white">{subtitle}</p>
        </div>
    );
};

export default Heading;