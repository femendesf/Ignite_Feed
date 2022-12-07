
import {ImgHTMLAttributes} from 'react'

interface AvatarProps extends ImgHTMLAttributes <HTMLImageElement>{
    hasBorder?: boolean,
}

export function Avatar({hasBorder = true, ...props} : AvatarProps){
    return(
        <img 
            {...props}
            className={
                hasBorder ? 'w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-lg border-4 border-solid border-gray-800 outline outline-2 outline-green-500'
                : 'w-12 h-12 rounded-lg'}
        />
    )
}