import { useState } from 'react';
import SearchForm from './components/forms/SearchForm';
import SearchResults from './components/results/SearchResults';
import { searchPrograms } from './services/supabase';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (params) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      // Пока используем тестовые данные, пока не подключим Supabase
      // const data = await searchPrograms(params);
      // setResults(data);
      
      // Тестовые данные для демонстрации
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
          sourceLink: 'https://www.hse.ru/abitur/bakalavr/',
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
          sourceLink: 'https://mipt.ru/education/programs/',
          mode: 'route',
        },
      ]);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
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
          <SearchForm onSearch={handleSearch} />
          
          {hasSearched && (
            <SearchResults 
              results={results} 
              isLoading={isLoading}
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2026 ПРОЙДУ? — Сделано с ❤️ для абитуриентов</p>
      </footer>
    </div>
  );
}

export default App;