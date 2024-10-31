import React from 'react'

export const Inpute = ({ style, text }) => {
    let w = style?.w || "5rem";
    let h = style?.h || "2.5rem";
    let type = style?.type || "-1";
    let className

    switch (type) {
        case "1":
            break;
        default: className = 'bg-slate-200 p-2 rounded'

            break;
    }

    return <input style={{ width: w, height: h }} className={className} type="text" placeholder={text} />
}

