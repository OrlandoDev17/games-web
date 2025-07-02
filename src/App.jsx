import './App.css'
function App() {
  return (
    <div ClassName="app">
      <header className="navbar">
        <div className="navbar-brand"><svg xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><ellipse cx="11.3" rx="8.28" ry="3.17" transform="rotate(45)" /><ellipse cy="11.3" rx="8.28" ry="3.17" transform="rotate(315)" /><path d="M8 8v0" /></g></svg>
          <span>GameHub</span>
        </div><nav className="nav-links">
          <a href="#" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 5.75v7.5h8.5v-7.5m-10.5 1.5L8 1.75l6.25 5.5" /></svg><span>Home</span></a>
          <a href="#" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 11L8 14.25L14.25 11M1.75 8L8 11.25L14.25 8M8 1.75L1.75 5L8 8.25L14.25 5z" /></svg><span>Catalogo</span></a>
          <a href="#" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.25 9.75c3 3.5 4.75 4.5 4.75 4.5s1.75-1 4.75-4.5s1-7-1.5-7s-3.25 3-3.25 3s-.75-3-3.25-3s-4.5 3.5-1.5 7z" /></svg><span>Favoritos</span></a>
          <a href="#" className="nav-link"><button><svg xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.25 9.75c3 3.5 4.75 4.5 4.75 4.5s1.75-1 4.75-4.5s1-7-1.5-7s-3.25 3-3.25 3s-.75-3-3.25-3s-4.5 3.5-1.5 7z" /></svg>Click me!</button></a>
        </nav>
            <button class="neu-button">Registrate</button>
          </header>
          <main className="main-content">
            <h1>¿que ofrecemos?</h1>
            <p>text description</p>
          </main>
          <footer>
            <div>
              <p>&copy; 2025 Juegos Uneti | Todos los derechos reservados.</p>
            </div>
          </footer>
        </div>
        );
}

        export default App