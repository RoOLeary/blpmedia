import React, { useState } from "react";


const Meta = ({ meta }) => {

    const keywords = meta.tags.toString();
    console.log('hup');
    console.log(keywords);

    return(
        <>
      
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />
            <meta property="og:keyword" content={meta.tags.toString()} />
            <meta name="keyword" content={metaKeyword} />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={meta.excerpt} />
            
            
        </>

    )
}

export default Meta; 