import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className="bg-gray-800 rounded-lg overflow-hidden">
            <img 
            id="COVER"
            alt=''
            className="w-full h-[72px] object-cover" 
            src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />


            <div 
            id="profile" 
            className="flex flex-col items-center mt-[calc(0px-1.5rem-6px)]">

                <Avatar
                    src ='http://github.com/femendesf.png'
                    
                />

                <strong className="mt-4 text-gray-100 leading-relaxed">
                    Felipe Mendes Fonseca
                </strong>

                <span className="text-sm text-gray-400 leading-relaxed">
                    Web Developer
                </span>

            </div>

            <footer className="border-t-[1px] border-solid border-gray-600 mt-[1.5rem] pt-[1.5rem] px-[2rem] pb-[2rem]">

                <a id="edit_profile"

                className=" text-green-500 border-[1px] border-solid border-green-500 rounded-lg h-[50px] py-0 font-bold flex items-center justify-center gap-[0.75rem] hover:bg-green-500  hover:text-gray-100 duration-200"
                href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}