import React from 'react';
import { Book, Code, Folder, TerminalSquare } from 'lucide-react';
import { getCategories, getSnippetsByCategory } from '../snippets';

const Sidebar = ({ activeSnippetId, onSelectSnippet }) => {
    const categories = getCategories();

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <TerminalSquare className="text-accent-color" size={24} />
                <h1>JS Library</h1>
            </div>

            <div className="sidebar-content">
                {categories.map(category => (
                    <div key={category} className="category">
                        <h3 className="category-title flex items-center gap-2">
                            <Folder size={14} />
                            {category}
                        </h3>

                        <div className="category-items">
                            {getSnippetsByCategory(category).map(snippet => (
                                <div
                                    key={snippet.id}
                                    className={`snippet-item ${activeSnippetId === snippet.id ? 'active' : ''}`}
                                    onClick={() => onSelectSnippet(snippet.id)}
                                >
                                    <div className="flex items-center gap-2">
                                        <Code size={14} />
                                        <span>{snippet.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside >
    );
};

export default Sidebar;
