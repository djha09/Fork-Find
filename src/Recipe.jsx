import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import './App.css'

function Recipe(props) {
  return (
    <>
    <div className="recipe-markdown">
      <ReactMarkdown rehypePlugins={[remarkGfm]}>
        {props.recipe}
      </ReactMarkdown>
    </div>
    </>
  );
}

export default Recipe;
