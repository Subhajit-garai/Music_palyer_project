import React from 'react'

export const Button = ({ style, text }) => {

    let w = style?.w || "5rem";
    let h = style?.h || "2.5rem";
    let type = style?.type || "-1";
    let className

    

    switch (type) {
        case "default": className =  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

            break;
        case "1": className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            break;
        default: className = 'bg-blue-200 p-2 rounded red-300'

            break;
    }

    return <button style={{ width: w, height: h }} className={className} value={text} />
}






