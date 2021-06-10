import React from 'react';
import {Button} from "react-bootstrap";

const PinkButton = (props) => {
    const {className,variant,children}=props
    return (
        <>
            <Button className={className} variant={variant}>{children}</Button>
        </>
    );
};

export default PinkButton;