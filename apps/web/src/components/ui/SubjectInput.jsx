import { useState } from 'react';

export default function SubjectInput({ subject, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const score = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
    onChange(subject.id, score);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score > 0) return 'text-red-600';
    return 'text-gray-400';
  };

  return (
    <div className={`subject-input ${isFocused ? 'focused' : ''}`}>
      <div className="subject-header">
        <label className="subject-name">
          {subject.name}
          {subject.isMandatory && <span className="mandatory-badge">обязательный</span>}
        </label>
        <span className={`score-display ${getScoreColor(value)}`}>
          {value > 0 ? `${value} баллов` : '—'}
        </span>
      </div>
      <input
        type="number"
        min="0"
        max="100"
        value={value || ''}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Введите балл"
        className="score-input"
      />
      <div className="score-slider">
        <input
          type="range"
          min="0"
          max="100"
          value={value || 0}
          onChange={handleChange}
          className="slider"
        />
      </div>
    </div>
  );
}