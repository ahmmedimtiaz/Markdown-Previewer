const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!
<br><br>

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks

<br>

\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
<br>

> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 
<br>

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
<br>

Coded by [**Ahmmed Imtiaz**](https://ahmmedimtiaz.com), 2023 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;

// Line breaks allowed 
marked.setOptions({
  breaks: true,
});

// Line breaks allowed 
marked.setOptions({
  breaks: true,
});


class App extends React.Component {
  state = {
    text: defaultMarkdown
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  
  render() {
    return (
      <div className="App">
        <h1 id="title">Markdown Previewer</h1>
        <textarea 
          id="editor" 
          value={ this.state.text } 
          onChange={ this.onChange } 
          placeholder="Enter Markdown..." />
        <div 
          id="preview"
          dangerouslySetInnerHTML = {{ __html: marked(this.state.text) }}>
        </div> 
      </div>
    );
  };
};


ReactDOM.render(<App />, document.getElementById('root'));
