"use client"
import { useEffect, useState } from "react";    
import LoadingThumbnail from "./loading-thumbnail";

export default function LoadingUIWrapper( { children }: { children: React.ReactNode } ) {
    const [showLoadingThumbnail, setShowLoadingThumbnail] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setShowLoadingThumbnail(false)
        }, 3000)
    }, [])
    return (
        <div className="">
            { !showLoadingThumbnail ? children : null }
            { showLoadingThumbnail ? <LoadingThumbnail /> : null }
        </div>  
    )
}