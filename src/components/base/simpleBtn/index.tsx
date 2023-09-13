const SimpleButton = ({ children, color }) => {
    return (
        <div className="border flex items-center px-4 lg:px-6 xl:px-8">
            <button className={`text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded bg-[#${color}]`}>
                {children}
            </button>
        </div>
    );
};

export default SimpleButton;