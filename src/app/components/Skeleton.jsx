import React from 'react'

const Skeleton = () => {
    return (
        <div className='w-full '>
            <div className=" rounded-md max-w-sm  w-full mx-auto">
                <div className="h-80 bg-slate-700 shadow-lg  rounded-md"></div>
                
                <div className="animate-pulse mt-4 h-3 bg-slate-700 rounded w-3/4"></div>
                
                <div className="animate-pulse mt-2 h-2 bg-slate-700 rounded w-5/6"></div>
            </div>
        </div>
    )
}

export default Skeleton
