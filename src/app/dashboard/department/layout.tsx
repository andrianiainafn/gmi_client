import React, {PropsWithChildren} from 'react';

export  default function  ExampleLayout ({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
        </div>
    );
};

