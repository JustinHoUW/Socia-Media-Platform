const CustomButton = ({ title, containerStyles, iconRight, type, onClick, styles }) => {
    return (
        <button 
            onClick={onClick}
            type={type || "button"}
            className={`${containerStyles}`}
            style={styles} 
            >
            {title}

            {iconRight && <div className="ml-2">{iconRight}</div>}
        </button>
    );
};

export default CustomButton;
