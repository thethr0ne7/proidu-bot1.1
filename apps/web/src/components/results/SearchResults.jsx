export default function SearchResults({ results, isLoading }) {
  if (isLoading) {
    return (
      <div className="results-loading">
        <div className="loading-spinner"></div>
        <p>Загрузка результатов...</p>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="results-empty">
        <div className="empty-icon">📭</div>
        <h3>Программы не найдены</h3>
        <p>Попробуйте изменить баллы или выбрать другой режим поиска</p>
      </div>
    );
  }

  return (
    <div className="results-container">
      <div className="results-header">
        <h2 className="results-title">Найдено программ: {results.length}</h2>
        <p className="results-subtitle">
          {results.filter(r => r.isVerified).length} проверенных
        </p>
      </div>

      <div className="results-list">
        {results.map((result, index) => (
          <div key={index} className="result-card">
            <div className="result-header">
              <h3 className="university-name">{result.universityName}</h3>
              {result.isVerified && (
                <span className="verified-badge">✓ Проверено</span>
              )}
            </div>
            
            <div className="program-info">
              <p className="program-name">{result.programName}</p>
              <p className="program-code">Код: {result.programCode}</p>
            </div>

            <div className="location-info">
              <span className="location">📍 {result.city}, {result.region}</span>
            </div>

            <div className="scores-info">
              <div className="score-item">
                <span className="score-label">Минимум:</span>
                <span className="score-value min">{result.minScore}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Проходной:</span>
                <span className="score-value cutoff">{result.cutoffScore}</span>
              </div>
            </div>

            {result.sourceLink && (
              <a 
                href={result.sourceLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Источник →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}