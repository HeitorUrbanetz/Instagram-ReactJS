import { useEffect, useState } from "react";
import "./style.css";

export function Suggestion() {

  const [suggestions, setSuggestion] = useState([]);

  const [limitUsers, setLimitUsers] = useState(5);

  const slice = suggestions.slice(0, limitUsers)

  useEffect(() => {
    fetch(`https://api.github.com/users/gabrieldiasss/followers`)
    .then((response) =>{
      return response.json()
    })
    .then((result) => {
        setSuggestion(result)
    })
    .catch((err) => {
      throw new Error (err)
    })
  }, [])

  return (
    <div className="container-suggestion">
      <div className="header-suggestion">
        <img
          className="img-user"
          src="https://github.com/HeitorUrbanetz.png"
          alt="eu"
        />

        <div className="user-infos-suggestion">

            <div className="infos">
                <span>heior.mp3</span>
                <p>HeitorUrbanetz</p>
            </div>
            
            <button className="switch">Mudar</button>

        </div>
        </div>
        <div className="header-main-suggestion">
            <p>Sugestões para você</p>
            <span>Ver tudo</span>
      </div>

      <div className="users-suggestion">

          {slice.map((suggestion, key) => (
              <div className="infos-suggestion" key={key}>
              <img
              className="img-user"
              src={`https://github.com/${suggestion.login}.png`}
              
              />
              <div className="info-suggestion">
                  <span>{suggestion.login}</span>
                  <p>Seguido por HeitorUrbanetz</p>
              </div>
              <button className="follow">Seguir</button>
        </div>
          ))}
        
      </div>

      <footer className="footer-suggestion">
            <p>Sobre &bull; Imprensa &bull; API &bull; Carreiras  &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hastags &bull; Idioma</p>
            <p>&copy; 2021 INSTAGRAM FOR HEITOR URBANETZ</p>
      </footer>
    </div>
  );
}
