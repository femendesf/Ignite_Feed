import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment} : CommentProps) {

     const [likeComment, setLikeComment] = useState(0)

    function handleDeleteComment(){
        
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeComment((state) => {
            return state + 1
        })
    }

    return(
        <div id="COMMENT" className="mt-6 flex gap-4">

            {/*Perfil autor do comentário*/}
            <Avatar
                src ='https://www.criptofacil.com/wp-content/uploads/2021/01/streamer-gaules-admite-possuir-quantia-consideravel-de-bitcoin.jpg'
                alt=""
                hasBorder= {false}
            />
           
            <div id="COMMENT_BOX" className="flex-1">

                <div id="COMMENT_CONTENT" className="bg-gray-700 rounded-lg p-4">

                   
                    <header id="AUTHOR-and-TIME" className="flex items-start justify-between">

                        <div >
                            <strong className="block text-sm leading-relaxed">Gaules</strong>

                            <time className="text-gray-400 block text-xs leading-relaxed" title="02 de dezembro às 14:32" dateTime='2022-02-12 14:32:30'>
                                Cerca de 1hr atrás
                            </time>
                        </div>  

                        {/*Botão deletar comentário*/}
                        <button onClick={handleDeleteComment} title="Deletar comentário" className="text-gray-400 cursor-pointer leading-[0px] rounded-sm hover:text-red-500">
                            <Trash size={20}/>
                        </button>
                    </header>

                    {/*Conteúdo do comentário*/}
                    <p id="content_from_comment" className="mt-4 text-gray-300">
                       {content}
                    </p>

                </div>

                {/*Botão curtir*/}
                <footer id="INTERACTION" className="mt-4">
                    <button onClick={handleLikeComment} className="text-gray-400 cursor-pointer flex items-center hover:text-green-300 rounded-sm">
                        <ThumbsUp/>
                         Aplaudir
                         <span  className="before:py-0 before:px-1 before:content-['\2022']">{likeComment}</span>
                    </button>
                   
                </footer>

            </div>

        </div>
    )
}