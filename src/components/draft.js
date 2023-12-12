// src/TextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
      ['align', 'alignCenter', 'alignRight', 'alignLeft'],
      ['code-block'],
      [{'script': 'sub'}, {'script': 'super'}],
      [{'color': []}, {'background': []}],
      [{'font': []}],
      [{'align': []}]
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'align', 'alignCenter', 'alignRight', 'alignLeft',
    'code-block',
    'script', 'color', 'background', 'font'
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={(value) => setEditorHtml(value)}
      />
    </div>
  );
};

export default TextEditor;
