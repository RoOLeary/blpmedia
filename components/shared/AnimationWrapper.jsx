"use client";
import classNames from "classnames";
import { motion } from "framer-motion";

const AnimationWrapper = ({ children }) => {

    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            
        >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper