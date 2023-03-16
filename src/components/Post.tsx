import { Avatar } from "./Avatar";
import { Comment } from "./Comment"; 

import { format,  formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { InstagramLogo } from "phosphor-react";

interface PostProps {
    author: {
        name: string,
        avatarUrl: string,
        role: string,
    };
    
    publishedAt: Date;
    content: Content[];
    
}

export interface Content {
    type: "paragraph" | "link";
    content: string;
    href: string
}

export function Post({ author , publishedAt, content} : PostProps){
    
    const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedAtDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [comments, setComments] = useState(
        [
            'Muito show de bola!',
            'Vai Brasilllllll'
        ]
    );

    const [newCommentText, setNewCommentText] = useState ('')

    const isNewCommentEmpty = newCommentText.length === 0

    function handleCreateNewComment(event : FormEvent){ // Função para adicionar novo comentário na lista
        
        event.preventDefault()

        setComments([...comments, newCommentText]) 

        setNewCommentText('')

    };

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){ // Função para armazenar oque esta sendo digitado no campo de texto. Não adiciona na lista
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)

    }

     function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete : string){
        
        const commentWithoutDeleteOne = comments.filter( comment => {
            return comment != commentToDelete;
        })

        setComments(commentWithoutDeleteOne)
    }


    return(

       <article className="bg-gray-800 rounded-lg p-10 mb-8">
            {/*Perfil do autor*/}
            <header id="PROFILE" className="flex items-center justify-between">

                <div id="AUTHOR" className="flex items-center gap-4">
                    <Avatar
                        src = {author.avatarUrl}
                    />
                    <div id="AUTHOR_INFO" className="flex flex-col">

                        <strong id="AUTHOR_NAME" className=" text-gray-100 leading-relaxed">{author.name}</strong>
                        <span id="AUTHOR_ROLE" className="text-sm text-gray-400 leading-relaxed">{author.role}</span>
                        
                    </div>
                </div>

                <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()} className="text-sm text-gray-400">
                    {publishedAtDateRelativeToNow}
                </time>
            </header>

            {/*Conteúdo da postagem*/}
            <div id="CONTENT" className="leading-relaxed text-gray-300 mt-6">

                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}> {line.content}</p>
                    }else{
                        return <p key={line.content}>
                            <a className="font-bold text-green-500 hover:text-green-300 flex items-center gap-1" target="_blank" href={line.href}><InstagramLogo/> - {line.content}</a>
                        </p>
                    }
                })}

            </div>

            {/*Formulario do comentário*/}
            <form onSubmit={handleCreateNewComment} id='FEEDBACK_FORM' className="w-full mt-6 pt-6 border-t-[1px] border-solid border-gray-600 ">

                <strong id="FEEDBACK" className="leading-relaxed text-gray-100">
                    Deixe seu feedback
                </strong>

                <textarea
                    name="comment"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    id="WRITE_FEEDBACK"
                    className="w-full bg-gray-900 resize-none h-24 p-4 rounded-lg text-gray-100 leading-snug mt-4 "
                    placeholder="Deixe seu comentarário"
                    required
                    onInvalid={handleNewCommentInvalid}
                >
                    
                </textarea>
                
                <footer className="invisible max-h-0">
                    
                    <button
                        type="submit"
                        className="py-4 px-6 mt-4 rounded-lg bg-green-500 text-white font-bold cursor-pointer hover:bg-green-300 hover:duration-300 focus:border-green-
                            500 outline-none focus:bg-green-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-500"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>

                </footer>
                
            </form>

            {/*Listagem dos comentários*/}
            <div id="comment_list" className="mt-8">

                {comments.map(comment => {
                    return(
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    ) 
                })}
              
            </div>
       </article>
    )
}