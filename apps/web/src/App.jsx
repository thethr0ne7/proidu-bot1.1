import { useState } from 'react';
import SearchForm from './components/forms/SearchForm';
import SearchResults from './components/results/SearchResults';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (params) => {
    setIsLoading(true);
    setHasSearched(true);
    
    setTimeout(() => {
      setResults([
        {
          universityId: '1',
          universityName: 'НИУ ВШЭ',
          programName: 'Прикладная математика и информатика',
          programCode: '01.03.02',
          region: 'Москва',
          city: 'Москва',
          minScore: 60,
          cutoffScore: 280,
          isVerified: true,
          sourceLink: 'https://www.hse.ru',
          mode: 'route',
        },
        {
          universityId: '2',
          universityName: 'МФТИ',
          programName: 'Прикладная математика и физика',
          programCode: '01.03.02',
          region: 'Московская область',
          city: 'Долгопрудный',
          minScore: 65,
          cutoffScore: 290,
          isVerified: true,
          sourceLink: 'https://mipt.ru',
          mode: 'route',
        },
      ]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="logo">🎓 ПРОЙДУ?</h1>
          <p className="tagline">Федеральный навигатор для абитуриентов</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="glass-card">
            <SearchForm onSearch={handleSearch} />
          </div>
          {hasSearched && (
            <div className="glass-card">
              <SearchResults results={results} isLoading={isLoading} />
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        © {new Date().getFullYear()} ПРОЙДУ? — Навигатор для абитуриентов
      </footer>
    </div>
  );
}

export default App;