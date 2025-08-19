"use client";
import React from "react";

const GlowSpinner = () => {
    return (
        <div
            className="-left-9 absolute h-6 w-6 rounded-full 
                 bg-[linear-gradient(#9b59b6,#84cdfa,#5ad1cd)] 
                 animate-[spin_1.2s_linear_infinite] 
                 before:content-[''] before:absolute before:top-[10px] before:left-[10px] 
                 before:right-[10px] before:bottom-[10px] 
                 before:bg-white before:rounded-full before:border-[5px] before:border-white"
        >
            <span className="absolute h-full w-full rounded-full 
                       bg-[linear-gradient(#9b59b6,#84cdfa)] blur-[5px]" />
            <span className="absolute h-full w-full rounded-full 
                       bg-[linear-gradient(#9b59b6,#84cdfa)] blur-[10px]" />
            <span className="absolute h-full w-full rounded-full 
                       bg-[linear-gradient(#9b59b6,#84cdfa)] blur-[25px]" />
            <span className="absolute h-full w-full rounded-full 
                       bg-[linear-gradient(#9b59b6,#84cdfa)] blur-[50px]" />
        </div>
    );
};

export default GlowSpinner;
