import React from 'react';

const Button = ({children}) => {
    return (
        <div className="my-4">
            <button className="btn btn-error">{children}</button>
        </div>
    );
};

export default Button;