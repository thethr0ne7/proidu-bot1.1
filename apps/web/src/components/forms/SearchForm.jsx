import { useState } from 'react';
import SubjectInput from '../ui/SubjectInput';
import { SUBJECTS, SEARCH_MODES, REGIONS } from '../../types';

export default function SearchForm({ onSearch }) {
  const [scores, setScores] = useState({});
  const [selectedMode, setSelectedMode] = useState('route');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleScoreChange = (subjectId, score) => {
    setScores(prev => ({ ...prev, [subjectId]: score }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валидация: хотя бы один предмет должен быть заполнен
    const hasScores = Object.values(scores).some(score => score > 0);
    if (!hasScores) {
      alert('Введите баллы хотя бы по одному предмету');
      return;
    }

    setIsLoading(true);
    
    try {
      const params = {
        subjects: SUBJECTS
          .filter(s => scores[s.id] > 0)
          .map(s => ({ ...s, score: scores[s.id] })),
        region: selectedRegion,
        mode: selectedMode,
      };
      
      await onSearch(params);
    } catch (error) {
      console.error('Search failed:', error);
      alert('Ошибка поиска. Попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setScores({});
    setSelectedRegion('');
    setSelectedMode('route');
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2 className="form-title">Введите ваши баллы ЕГЭ</h2>
        <p className="form-subtitle">
          Мы найдём программы, куда вы можете поступить
        </p>
      </div>

      {/* Режим поиска */}
      <div className="mode-selector">
        <label className="section-label">Режим поиска</label>
        <div className="mode-options">
          {SEARCH_MODES.map(mode => (
            <button
              key={mode.id}
              type="button"
              className={`mode-button ${selectedMode === mode.id ? 'active' : ''}`}
              onClick={() => setSelectedMode(mode.id)}
            >
              <span className="mode-name">{mode.name}</span>
              <span className="mode-description">{mode.description}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Предметы ЕГЭ */}
      <div className="subjects-section">
        <label className="section-label">Баллы по предметам</label>
        <div className="subjects-grid">
          {SUBJECTS.map(subject => (
            <SubjectInput
              key={subject.id}
              subject={subject}
              value={scores[subject.id] || 0}
              onChange={handleScoreChange}
            />
          ))}
        </div>
      </div>

      {/* Регион */}
      <div className="region-selector">
        <label className="section-label">Регион (опционально)</label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="region-select"
        >
          <option value="">Все регионы</option>
          {REGIONS.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>

      {/* Кнопки действий */}
      <div className="form-actions">
        <button
          type="submit"
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Ищем программы...
            </>
          ) : (
            ' Найти программы'
          )}
        </button>
        <button
          type="button"
          className="reset-button"
          onClick={handleReset}
        >
          Сбросить
        </button>
      </div>
    </form>
  );
}