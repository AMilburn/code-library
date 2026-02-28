import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import EditorPanel from './components/EditorPanel';
import { codeSnippets } from './snippets';
import './App.css';

function App() {
  const [activeSnippetId, setActiveSnippetId] = useState(codeSnippets[0].id);

  const activeSnippet = codeSnippets.find(s => s.id === activeSnippetId);

  return (
    <div className="app-container">
      <Sidebar
        activeSnippetId={activeSnippetId}
        onSelectSnippet={setActiveSnippetId}
      />

      <main className="main-content">
        <EditorPanel snippet={activeSnippet} />
      </main>

      <aside className="right-panel">
        <h2>{activeSnippet ? activeSnippet.title : 'Select a snippet'}</h2>
        <p>{activeSnippet ? activeSnippet.description : 'Explore algorithms, data structures, and utilities.'}</p>
      </aside>
    </div>
  );
}

export default App;
