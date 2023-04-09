import React from 'react';

const Button = (props) => {
    // console.log(props)
    const {children} = props;
    return (
        <div className='text-center my-3'>
            <button className="btn btn-secondary px-5 text-white">{children}</button>
        </div>
    );
};

export default Button;