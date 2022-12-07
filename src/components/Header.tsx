import IgniteLogo from '../assets/Ignite-logo.svg'

export function Header(){
    return(
        <header className="bg-gray-800 flex justify-center py-[1.25rem] px0">
            <img src={IgniteLogo} alt="Logotipo do Ignite"  className='h-[2rem]'/>
        </header>
        
    )
}