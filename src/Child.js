import React, { useEffect } from 'react';

const Child= ({ onData }) => {
  
    useEffect(() => {
        const name = "khushboo";
        const age = 12;

       
        onData(name, age);
    }, [onData]);

    return (
        <div>
            i am child
        </div>
    );
};

export default Child;
