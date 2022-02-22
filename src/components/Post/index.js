import "./style.css";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChat, BsEmojiSmile, BsBookmark  } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

export function Post() {
  return (
    <>
      <header className="header-post">
        <div className="infos-post">
          <img className='img-header-post' src="https://github.com/HeitorUrbanetz.png" />

          <p>heior.mp3</p>
        </div>
        <FiMoreHorizontal />
      </header>

      <div className="img-post">
        <img src="https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
      </div>

      <div className="footer-post">
          <IconContext.Provider value={{size: '30px'}}>
                <section className="engagement-post">

                    <div className="icons-1">
                <div className="icon"><IoMdHeartEmpty size={35} /></div>
                <div className="icon"><BsChat /></div>
                <div className="icon"><FiSend size={30}/></div>
            
                    </div>

                    <div className="icon"><BsBookmark /></div>

                </section>
          </IconContext.Provider>

          <section className="like">
              <span>100.000 curtidas</span>
          </section>

          <div className="legend">
            <strong>
                heior.mp3
            </strong> <span>Desenvolvo Projetos!</span>
          </div>

          <div className="time-post">
            <time>Há 1 hora</time>
          </div>

          <div className="comment">

            <div className="fake-comment">

              <IconContext.Provider value={{size: '25px'}}>
                <div className="icon">
                 <BsEmojiSmile/>
                </div>

              </IconContext.Provider>

              <input placeholder="Adicione um comentário..."/>
            </div>
                <button className="button">Publicar</button> 
          </div>
      </div>
    </>
  );
}

