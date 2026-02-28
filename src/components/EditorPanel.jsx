import React, { useState, useEffect } from 'react';
import { Play, Code2, FileJson, Terminal } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-tomorrow.css'; // Dark theme

const EditorPanel = ({ snippet }) => {
    const [code, setCode] = useState('');
    const [args, setArgs] = useState('');
    const [output, setOutput] = useState('');
    const [status, setStatus] = useState('idle'); // idle, success, error

    // Reset local state when snippet changes
    useEffect(() => {
        if (snippet) {
            setCode(snippet.code || '');
            setArgs(snippet.argsModel || '{}');
            setOutput('');
            setStatus('idle');
        }
    }, [snippet]);

    const handleExecute = () => {
        setOutput('');
        setStatus('idle');

        // Create a safe environment to capture console.log
        let logs = [];
        const originalConsoleLog = console.log;

        const mockConsole = {
            log: (...args) => {
                const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
                logs.push(msg);
            }
        };

        try {
            // Parse arguments
            let parsedArgs;
            try {
                parsedArgs = JSON.parse(args);
            } catch (e) {
                throw new Error(`Failed to parse Arguments JSON:\n${e.message}`);
            }

            // We need to destructure the top-level keys of parsedArgs into the function scope
            // so that variables like \`tree\` and \`targetValue\` are available.
            const argKeys = Object.keys(parsedArgs);
            const argValues = Object.values(parsedArgs);

            // Override console locally
            const funcBody = `
        const console = mockConsole;
        ${code}
      `;

            // The function signature includes mockConsole, then all argument keys
            const sandboxFn = new Function('mockConsole', ...argKeys, funcBody);

            // Execute the sandbox
            const result = sandboxFn(mockConsole, ...argValues);

            // Build final output string
            let finalOutput = '';
            if (logs.length > 0) {
                finalOutput += '-- Console Output --\n' + logs.join('\n') + '\n\n';
            }

            finalOutput += '-- Return Value --\n';
            finalOutput += result !== undefined ? JSON.stringify(result, null, 2) : 'undefined';

            setOutput(finalOutput);
            setStatus('success');

        } catch (err) {
            setOutput(err.toString());
            setStatus('error');
        }
    };

    if (!snippet) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-secondary">
                <Code2 size={48} className="mb-4 opacity-50" />
                <h2>Select a snippet to get started</h2>
            </div>
        );
    }

    return (
        <div className="workspace">

            {/* Function Body Editor */}
            <div className="panel">
                <div className="panel-header">
                    <span className="panel-title"><Code2 size={16} /> Function Definition</span>
                </div>
                <div className="code-editor" style={{ overflow: 'auto', padding: 0 }}>
                    <Editor
                        value={code}
                        onValueChange={code => setCode(code)}
                        highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
                        padding={16}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            minHeight: '200px',
                            width: '100%',
                            outline: 'none'
                        }}
                    />
                </div>
            </div>

            <div className="flex gap-4">
                {/* Arguments Editor */}
                <div className="panel flex-1">
                    <div className="panel-header">
                        <span className="panel-title"><FileJson size={16} /> Execution Arguments (JSON)</span>
                    </div>
                    <div className="code-editor arguments-editor" style={{ overflow: 'auto', padding: 0 }}>
                        <Editor
                            value={args}
                            onValueChange={args => setArgs(args)}
                            highlight={code => Prism.highlight(code, Prism.languages.json, 'json')}
                            padding={16}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.9rem',
                                minHeight: '100px',
                                width: '100%',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Execution Controls & Output */}
                <div className="panel flex-1">
                    <div className="panel-header">
                        <span className="panel-title"><Terminal size={16} /> Execution Output</span>
                        <button className="btn btn-primary" onClick={handleExecute}>
                            <Play size={16} /> Execute
                        </button>
                    </div>

                    {status !== 'idle' && (
                        <div className={`output-status ${status === 'success' ? 'status-success' : 'status-error'}`}>
                            {status === 'success' ? 'Execution Successful' : 'Execution Failed'}
                        </div>
                    )}

                    <div className="output-area">
                        {output || <span style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>No output yet. Click Execute...</span>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EditorPanel;
