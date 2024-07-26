import React, { useRef } from "react";
import Card from "./Card";
function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "this is the first file to be shown",
            fileSize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green",
            },
        },
        {
            desc: "this is the second file to be shown",
            fileSize: "10.4mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "do something",
                tagColor: "blue",
            },
        },
        {
            desc: "this is the third file to be shown",
            fileSize: "10.4mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "do something",
                tagColor: "blue",
            },
        },
        {
            desc: "this is the fourth file to be shown",
            fileSize: "10.4mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "do something",
                tagColor: "green",
            },
        },
    ];

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5"
        >
            {data.map((item, value) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Foreground;
