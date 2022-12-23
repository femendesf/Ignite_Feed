import { Header } from './components/Header';
import { Post, Content } from './components/Post';
import { Sidebar } from './components/Sidebar';


import './styles/main.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUQEhAVFRUWFRUVFRUVFQ8QFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARoAswMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAD0QAAEDAgQDBgMGBAUFAAAAAAEAAhEDIQQSMUEFUWEGInGBkaETQrEUMlLB0eFicrLxByOCk/AVU1Rzwv/EABsBAAIDAQEBAAAAAAAAAAAAAAADAQIEBQYH/8QAMhEAAgIBAwIDBwQCAgMAAAAAAAECEQMEITESQVFhgQUTInGRobEUwdHwMuFSkiMzQv/aAAwDAQACEQMRAD8A9QLG/hHoEJYOQ9AjKFYzYAWDkPQICwcgpCgKAByDkmyjknKaUEjQOSUBOmQAoCEtTpKAGypoRJIAGEiESSCAYQwiTQgkEhOnTQgAUxTpFAAFCSjKFADSkkkgg1SUJKRKZSAxKByIoCgkZMnTKAEkkkEAJJH8Lc2QVHtbqf1Q3QCTQmGIZBIOmv7KD7e2Y9FHUgLSaE4eESsQCmRJkEgFNCJOoIAhAVIUBQACEoyEJQSCknSQBoSmJToSpAZxQFEUJQAkkyQUAExsonODf1/RNiawYLeH6lUKVRzyZs28ayT48lWUqJSJq1Rx0308N7qm+sC7v39gpKrzbmTA6a3PLfRYz8SA8wdLFxy7Gwk6lUZZI1zUEw0g6Cxn6WA/VBicUycp/wDk+/mFn0sRkNRz8twLZc0iAAc09FnYjF5vnJJgzMQIFp/5ogDZGIMjKdRvJki1lbZxJosD4grlKWIOYNNrkieUygONc5wPM6deSurIO8w9cPEg+PRTFcpw/iRacw10I0XUUnhzQ4aEAq5RiShFCUIAjIQkKUhRlSABCAoyhKCQEk8JKCaLySSZBAyYp0xUAMkBvy8klBjSMt/HlohuiUtyCvjNS5pE7m4tyhV2Y5jQSQZvufIe6qVqx2cecG/uqNTESZNvBJsfGCYeK4s6HHc2n8Im8dVi1OMQbUxAmBp0kncq1icZJIi3O0HwWNiXhCL9CCr47NBy9d/K3qojjCZtqZ9oUBKcKyRHSi9TxQzZyTmgga6kaqFxm0kTvy6qNoUgCuiOhGjhMYIGa5BgnnvK7Xs/WzMLeRt4G/6rzpdH2MxpFX4ZdZzbAxqJNvdSmLnjrdHbwhRJldCACgKkKAhDAjKAoyhIVQBlJJJBJdTJ0kEjISjTFQQCsnjWIiGrWXMdo3xV/wBIVZ8DMa3KZxCoVa1ynJKBlKSkWalEgxbzCynhbGNpwFn/AA1eJZorBqWUqyGIxTCvZSiBjUeQqQMUoYpsmiABXuDvy16R/jHvb81CaSl4dSmrTA/7jP6goXJSXB6dCRCcpJxjAcoypCgKCSMoSpCoyqkAJJJIJLsp0klAAlJOUyAMDiHaRjHuptElus6E7gLJxWK+1PzMcxhaAMtRwZIiczXaG8iDGyxa7SK1bPqKjh5kk/SE+Gyv08P3SJSbtHQliiq6TWo4FoeKT69JtRwJawOD3EC5Ii3PfZHVDKcBoDyTALicukkw3oOarsp2gi6rVqkOpiNHkeTmOj3A9UtPYVJSrkbieNqZSRkEcqbD/VK46r2hrSbs/wBun+i6/GskEcwQvPMWwhxCZpJudqW/0EZ/hqvyzYpdonj71Om7ycw+xWtw/HU6rst6ZtqfiNANp0B5eq4wUytbgVfIXvdo0AeZe2B6ArXOCp0JhkyJrc7elwGuTbIW/jztDY5kG/sszHYqnRe6neq5upk02Cw2HePqFAO0NdjS4UyKe97hvNYnE8RNRx2eWnqRFlmhHI76qNc51SNLA8XqPrfDIY1pD/ut0ysJBkyToFZ4bWr/ABXB7y3LoBALTmgX52Kw+H4v4VQOOnTaRr1XUOxIM1rXGa2lhNlE5TUtuH+RSprk7Hsrxp1Vop1Jc6XAO3hsgl3Tu69V0iy+y2CNLC0muEOLQ5/8z+8Z9YWmVoQoYoSiKBxUgC5RORuKjKqAKSbMkgkvpJJKAGKSdMgDgu2mBLarnt+YNf5gZXfRvqs3h0Nbm+YuaDtAhd52gwTalPM4kZDmBGo5rka/ee6oRcxBJi07pE9nRvxSuCL1RkjwVWth2kEn25gyCPRWy6As3FV9YS1zsWatUZ9TG278A8u8PIgjVcxxLC5qhcwtg83NH1W/jBm1VB2Fun44Rg7WxmnFtUZ9Hhbj87B/qn6StLC8OaS1odma05nGCA52gAB2AHqVMxi08DSsrSyUWhhV7kgoNILSLEaLnnYCmHZHV/hloy95lRzXs1b3mgkEaG14XTxeFm43CNc64URdcjcseqjPx+HoFjclZheHSTlrEXEEAFnhC1OC0szmAHugtblLRlNwLk3HP9VHSwzG6NH1Wlw672ADVzR7hTaVJCPdcts9JQoihKYZgHICjKAoAjKEoihKgkFJKEkAX0kklADJJ0kAIjZcr2l4fSpgODYGrhLoiYmOlvRdUFx/arFA1jTJsW5Y8R+6fgwrLJp+D/v1Mms1MtPBTj4r/f2IHkFs9JWFinXVvhjyKORx7zCWnqJkH0Kz8Q5Yuhxk4s60cinFSXDADZTOYmY9TZbSrNlolR2oHMgLXYGs3WRVCgqtOuY+pQ42XujZfXgyiqODhO6wqdRziB7rXpkAK1UiFKxsy2uyOGz4gHZgLj46N9zPksKsd12/YbDZaLqh1e638rbfWURW4nLKkzpCoyjKjKYZQShKcoSgAChKIoSpskZMlKSgC+mhIBEoASp8Sxvw22Eu2H6q08wuH7T8XMupsEuNiVs0enWR9UuDle0ta8EeiG0n9i7w7tBXq1S2GhjT3jA5EwOphc92ld/mNqHUmCfopOywqtp1MzSJc2oyfmH3THp7pdoqeajmjn6sv9J9F1444q+lUecnnySklkm5fN3yU24ixdN9HdRs78lUqvlU8PWtmnQb/SFH9rbNjbrbKdx4dVzddpfi95H1PQeyNdt7mfbj+C8wXVt7oaqOHfupsS+RC5LVs9EmVm4lkkF4Hihq8SoN+bMoatNusSoH0aZ1t4JiSLRk/IsDidKZAPkQrI4lmactM9DoPdU6NCkNL8pWm3wQ0ki8k13JsDQdWLKbR3nmPDmfAXK9VwmGbTY2m3RrQB5bry7hPGzha4eKYe2Mr/xAGCch2P1XpuF4jSqNDm1NQDBIa4ToCDunPBkjFSa2Zy3rMWTI8akrX58idyAo3KMpYwYoE5QlTZIKEpyUJRQDJJs3VJQBotCZzwOvhohrVgJE/uqjsU3qtuDR2uqZxdZ7S6W4436g8QxBymNh7lczw/CtzGq8ae628RWDpF1k4ppPcFgdTyBK6uLGlGktjz2fK5T6m7Zm4jE1X1W16bIawuY75W1GmCBJsHDbyUHEuNN+FUotZdxNz8todbnsulGCpNc6lRc4EMzEnK+k4ExDgdfJeecdoup13AiAbgajyO45LlaL2hHPklBbKupJ7On4rf0rtykdjUaF48cckt2tnW6v0++3q+TLDrFVwIMhWKrYlQsdsV1JK0ZcaSHoYo0yAbsOh3HTyW0KocJBWGYgtOhv4HmlhnvpmwzN6XHiFydTpWncT0Oj1qlHpm90a5YUhg51KjpY1pEz5bovtgWPpaZ1FOLLlDBMGylqw0F3JU6eMm30uq/EMUT3Bbn4JmDDLJNJ+onV6qOHE2ue3zI8NVLp6ldLhKJrPp4YOABjOZgSPrHLnAXP4d7WACZd9P3VrD4kA9V6WCdcngp11qVXTuvE9kiBCjKwuznHhUDaTz34s7XNGx/iHutxxXm82KWKXTI9nptRDUY1khx90+6fmAUxKcoCqUaBiqHFuJNotnVx+6PzPRXyvPeJ401K1Qn5XFoHINJH5Ks3SGYcanLfsTVK7nEuc4ybm6SqfGSSOk6Vo76rWJVWq9BUxCpVcT1XqkfLW/E0KJd99rc0RbX23UlPjIhzqrWtcP4SCRHX6LHp8ZdTsLiZgj81aHF6FUZarI6nvAeYuF5r2vp9Rmm+vB1Q7Sxy+NLvafKfdL69zu+zcuHHFdOWpPlSXwt9t1vt838itWltT7RTh9GpLX5Bds7wNgsbtPh2igymHB5BdkdIkM/CeevstHE4aphSatB2ambkaiOsajqFz3Eq/wAR5q5Q2YkDnGvmm6DBLPmhmjk6oLvxJtWlGa7SipPeO0ls0X1edYMUsbhU325SvduL7ptXT4f0Oeq0y3wULmrcqNzMywLEwdx+yyq9MtXo5Ro4+PJ1fMhIlRgkG2qMvQOdKoaXuS/Hmzr9dx4FS4QXhUCVfoPDWl8SYMDqFi1mO0muTp+zsvS3Fvbkuv4h8N0ACBYxYg6/mmOLFQuhsuOhINhzMLKqMIa0G7nS4+JN1t8Ow+RulyJd0VsWignGXdVfmZdX7Rn0yS3Tbrb7me+kWlSU3rSrsB1EWkbWKyqjcpXSRyYy6tnybGArlj2VGm4LSPJeq4bECoxtRujgCPNeOUqkgRs4ei7bsdxtgolr3BoaSWk7gm4HO/1XP9o4+qCn4fh/7/J1PY+VwyPE/wD64+a/lfg69xQSsg9oqP8AF4wP1QHtDS2DvQfquL1o9N7ufgbBK8rrvmo94+Z7iPNxK7HH8eDmOYxpaSCMxi02Nlzv2P7sfdHglymuxpwY3G2yFtJyS0ZH/P7pKLQ4u1ah5qpWqHms9/EHKF3Eei9aqPlathYiuZSZjbQq7qwKie1SkWsv0OK1GU30Qe64Rf5Z1jlIVIlA0pOVYYYQblGKTbt13fFv0GTyzklGTtLZeSHpuhSPpB/ioUbHpyVi2nyuTMx2BLDMLP1XUVHyIKysfggBnb5hKljrg14NRe0+TKKtYCS4NtBN5RsotcJBh24QBuW/JU6TQ5JpoloDPWJ2ZYeK6qi7KA2mCXuZUFVsGTEusOcDToub4DIaX7l0+i6HA4svxQq5QSXBkDQuMZ4ncNyjzKz54zcPhV7N/N1smu6732pDMHT76m6ql8l3afZ3t5psiONa+RVaS7IAzM0tcIIyktJuNbiViYtpFlvca4C+mfhOaHy1zw1oLixs5WGdiZGiw8Q0ixBBFoOojmm4enp+Huk/6u3mL1EWpK7tNrf6/wCS58u6IKdSAfA+qt8Pq5A0E7D3We0qxg25nSbxz0JKVqul4ZW6NHs/qWoi4K3/AKNU44DdAeIhZ9XAEn7x8NlOcMS1rC6WtktHIuifoF56key6pFluOJVqjxEixEqlh8MGrQoUxyVXQ2N0TfHB3SR/ACdFoimZlVV3BT1FAV69ny2JG5qhdUezXvBWIRKKGqVcqys3GtKtNcCJCz8fhRGYaqHhmKIdlO6hSp1Ia8SlDqj2NVpTuamAg+as5ZCejM3RGy6TjCDKQVI4SFJBn1cDPeZ6KA0zMEK8HFpR1awdaFSkPWSXfcrcFbDHM3DjbpsVtcEwQq1hScHZXA3b8pg97lqG+pXP03fDxFzZ7bcrug+8eq28JxGpSdNN0S4A2meXheB5rJKc/dvorqi6+/8ABtjGK1EZT3jNW/3X/ZV6nTDH1ATUqkMZ8P4bHlhnO4NgEkTZwdJ0suSwuF+M853kXOY2uZkfVbeC4qKmHfh3Mzvd8WrJuM2bMA3eYkyuaNQsJjpPjE/QhZ443HrUNprb05VfM6cs2KbxzyK8fL+fG/1XmTcT7PVKROQioIkR3fZRYDCZRBMHdT0+Kzqb+anw2KBmYPjC5ufUZnF45r+Ts6bR6ZT99if32I3Yc7P9R+6hdRcNx7q40hxiIQ1qbhs0jmS5Yuprk6FIrU2HmrDaDo7pP1VZ9Yg3AHgVPhuIjQhWUSU0Ttrvi4SS+ImV6K9QFQWVYhWCVG5q9WfME9yJIBE8QomVRMItdx8cOSceqMW0PUGy593dqea3qqwOIDvlJz8JmnR7to6NhkA+CsByz8FVmmPJW5T4uzDkjTosOEoAISpPTVHpgpJ3QRpByhq0ABZXH0i2iap+Y5Gek1HekN/1FZjax0SVkUm0uzr17/Tj52aHhlCMXfKuvLt9eflRncY0a78L/Z1vrCvGqCAToWqvi2h0g6FS0QCANrBUivjk+zNTneKEfBv71+5c4fistRlTuOg3gkPINnS02NibAhQ1KRGZwBLZPeO8kx4rUPBqNMS6CQQbnWJ7sAxrNjyVfEYo5TTY1oaRlu1uYjboDFp1WHDlU8vXhi3wm29qV8eZuzx6Mfu80ku6SW913rYwq5UbcQRumx79lSBWnNGMnTQvTZJ411RdGrR4mW7rQo8SLrELnRSClpVcttlzsuiVNxOzp/akurpm9vE2qlQaTbkb/wBlGyneQAqrXzur1OoANVgcaOypqSJo6pKD7YzmnRuRa8Sw5+480ZdaVA3klSu0tXpcTbPD+0tNDDkShxyNXdJhRYilEKtWeWugqZlYvslNpt+J2cHVHHjcWlBL4iWZA/lWLxL7628tlhY7vVT0geytlXwpHI08176Ulxv+S9w9/cjqtKk5YuCdt1WphXd5NxvZGfUQ3ZPngrcwXBn1WUnUxOYw4/hOY3PSIWQaYK1OA8cdh5aW5mm8TBH97JOteoji6tOk5J8Pv2+3K+QaL9PPJ0521Frldt07+1epY7VNbnbQb92izIPE3J8dPRctXplq1a2Nzuc92rpJ8SZKzOI1hsrYMPusEYPlLfzfd+rtlcuaWbUSnWze3kuy9FRSe5HSeq5KYOV7od07Gk+pVquDZzGLSdABz2ACndhsoIDjUcI/haCYiJu877WVvswwOc+RMMc6OeQTHmQFNQxJNQVDJaA7u6y4gta3x7wXN1eqliyRxx2W3rueh9mey8ep0082R77+lKu/N/ZKlvucpxGg8BtRzCGvByOizoMGD5LNzL27GcBpvwowjh3QwNBGrXAWcOsrx3i3DKmHquo1Bdu+zhs4dCrYtQskn2/gyZtK8KW9r9yuKqir1uSEoXt2Tm3QlRVk2GcRuVO95OpPqoGCAiBUdMXyifeTX+LYWXq72STwkp91DwQfqcv/ACZ0rrKvSqw5WmvzWKoVxBWiNVsYdVHJ75rNz9qJK7NWu/t1CovJpuibLQqVw5o5j6KrxFndaeU+6olubs795jjOS6W9mvHzLlJ8iVkUmSXO5klWcPV/y3dAVSp1MvhCtJ8Wc/FBrqSHw1nHxWjhXd4LMbUhFTxJBkKISSGZIOV0dIagG6hfxBgsTPhdZQeXfePkLKamybAQE5z8DH+niv8AJljF4gbKqQTqpPh5UTG7lVe/JaNRWxXqMhV3FWsQVVKqx8HaNns7xE0auaATBAHMmNfRbfZqgcTiW1HNDWsOfKNyD3bbCSFx1CrlcCed/Ddehf4d4trzXtBGSP5O9b1Cx6uKUXOt/wAHX0GWW2G6TfHj339UdkVh9qez9PF08p7tRs/DfyPI82lbZKBxXJTado7MoKSp8Hg/FeGVcO8sqsLTsfld1adwqYF171jKLKjSyoxr2nVrgHD0K4Lth2UY2n8XC0iCDL2NLnd3m0HlyC3Y9WpNKRzMuicVcXa+5xDhZRBTUngi6jcxa06OelsGkhzdEybcfEimdSW5byosRSDxYifRTVhKrVmECyZJdOyWwnE456yznU7+xHh6Ja7vD0/VScWHcnqFXk9VNXvRdPj6QqQl2NOtwyuOVzumtvmzNpu7jvL6hVSZKncO5HM/RR02KrERpWEykpIATAFHlG6skUbDoOvdajXgCVlNI2ClYdyUyMhGWF7l5zS6+yiqVFE/FEiAopJVr3KRxvuJ5kphTRMCc1eSkbvwgHUl2n+GNHvV3zaGNjqS4z7e64mq+y7b/DKrArj/ANZ/qCxa3/1Ojb7PX/njfn+DuigcmzoS5cVnpbI6qgKkqPVdzlUgxeM9lqFeXR8Op+NgFz/E3Q/XquPxnZLFUzZgqt5sInzab+kr0jMmzJ8dROKr+/yIyaXHPeqfl/aPKf8Apdf/AMer/t1f0SXqudMrfqpeAn9DDxZwMoKpTNRHRd+W6o8vpJqGaLavt9SGNxYpYl8scOhUYSqaFJhLZm3XaaOOcZR79jIq1LxyQioUx1ThKtlqQQeVI3qoVIFdMoydruQRtZzUTFYYmITLbgIDZMWwpMOjrK9CeqnRWATmAk1M5FluSvUdJXV9gHkVi02zNPq0gj2lcrT1XQcCMV6cW7w0tyWfNHrxyvwZqxZPd5oV4pfXb9z0WoI3UZrlDU/NQFcA9QSPqygLkKAoAMuQucmUZUEkmdJRJIA//9k=',
      name: 'Richarlison de Andrade',
      role: 'Jogador'
    },
    content: [
      { type: "paragraph", content: "Salve galera"},
      { type: "paragraph", content: "⚽ Preparados para mais um gol do pombo? Só jogar nos peito do pai que é voleio na certa."},
      { type: "link", content: "@richarlison", href: "https://www.instagram.com/richarlison/"},
    ],
    publishedAt: new Date('2022-12-02 14:30:40')
  },
  
  {
    id: 2,
    author: {
      avatarUrl: 'https://s2.glbimg.com/KijX0QgEENLEh2xN2h6bEyRnt_4=/500x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/e/EYKMBXR72tNdkUAgmZzQ/azul-caneta.jpg',
      name: 'Manoel Gomes',
      role: 'Cantor'
    },
    content: [
      {type: "paragraph", content: "Eai meus queridussss!"},
      {type: "paragraph", content: "Caneta azul, azul caneta"},
      {type: "link", content: "@manoelgomesbr", href:"https://www.instagram.com/manoelgomesbr/"}
    ],
    publishedAt: new Date('2022-12-06 14:53:26')
  },
];

export function App() {
 
  return(
    <div className='m-0 p-0 box-border '>
      <Header/>

      <div id='wrapper' className='max-w-[70rem] my-[2rem] mx-auto py-0 px-[1rem] grid grid-cols-[256px_1fr] gap-8 items-start '>

       <Sidebar/>

        <main>
          {posts.map(({id, author, publishedAt, content}) => {
            
            return (
              <Post
                key={id}
                author = {author}
                publishedAt = {publishedAt}
                content={content as Content[]}
              />
            )
          })}
         
        </main>

      </div>
    </div>
  ) 
}


