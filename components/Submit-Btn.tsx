import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type='submit'
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] dark:text-gray-200 rounded-lg bg-black/10 hover:bg-black/30 dark:bg-white/10 dark:hover:bg-white/20 transition-all"
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Submit{""}
                    <FaPaperPlane
                        className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1"
                    />{" "}
                </>
            )}
        </button>
    )
}