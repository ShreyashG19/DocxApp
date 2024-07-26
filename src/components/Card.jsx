import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({ data, reference }) {
    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.02 }}
            className="relative  flex-shrink-0 w-60 h-72  bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden"
        >
            <FaRegFileAlt />
            <p className="text-sm mt-5 leading-tight font-semibold">
                {data.desc}
            </p>

            <div className="footer absolute bottom-0 left-0  w-full">
                <div className="flex items-center justify-between mb-3 py-3 px-8 ">
                    <h5>{data.fileSize}</h5>
                    <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                        {data.close ? (
                            <IoCloseCircle size={".8em"} color="#fff" />
                        ) : (
                            <LuDownload size={".8em"} color="#fff" />
                        )}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div
                        className={`tag w-full py-4 ${
                            data.tag.tagColor === "blue"
                                ? "bg-blue-600"
                                : "bg-green-600"
                        } flex items-center justify-center`}
                    >
                        <h3 className="text-sm font-semibold">
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default Card;
