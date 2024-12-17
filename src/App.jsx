import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [articleTitle, setArticleTitle] = useState("");

  const handleAddArticle = (event) => {
    event.preventDefault();





    
    const newArticle = {
      id: Date.now(),
      title: articleTitle,
    };

    setArticles([...articles, newArticle]);
    setArticleTitle("");
  };

  const removeArticle = (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Gestione Articoli del Blog</h1>
      <form onSubmit={handleAddArticle} className="mb-4">
        <div className="mb-3">
          <label htmlFor="articleTitle" className="form-label">
            Titolo dell'articolo
          </label>
          <input
            type="text"
            id="articleTitle"
            className="form-control"
            placeholder="Inserisci il titolo dell'articolo"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Aggiungi Articolo</button>
      </form>
      <section>
        <h2>Lista degli Articoli</h2>
        {articles.length > 0 ? (
          <ul className="list-group">
            {articles.map((article) => (
              <li
                key={article.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {article.title}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeArticle(article.id)}
                >
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">Nessun articolo presente. Aggiungine uno!</p>
        )}
      </section>
    </div>
  );
}

export default App;
