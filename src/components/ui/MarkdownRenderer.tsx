import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (props) => (
          <h1
            className="text-2xl sm:text-3xl font-bold mb-4 mt-6 pb-2 border-b border-border"
            {...props}
          />
        ),
        h2: (props) => (
          <h2
            className="text-xl sm:text-2xl font-semibold mb-3 mt-6"
            {...props}
          />
        ),
        h3: (props) => (
          <h3 className="text-lg sm:text-xl font-medium mb-3 mt-5" {...props} />
        ),
        h4: (props) => (
          <h4
            className="text-base sm:text-lg font-medium mb-2 mt-4"
            {...props}
          />
        ),
        p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
        a: (props) => (
          <a
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        ul: (props) => (
          <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />
        ),
        ol: (props) => (
          <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />
        ),
        li: (props) => <li className="mb-1" {...props} />,
        blockquote: (props) => (
          <blockquote
            className="border-l-4 border-accent pl-4 py-1 italic my-4 bg-bg-secondary rounded-r-md"
            {...props}
          />
        ),
        img: (props) => (
          <img className="max-w-full h-auto my-6 rounded-md" {...props} />
        ),
        hr: (props) => <hr className="my-6 border-border" {...props} />,
        table: (props) => (
          <div className="overflow-x-auto my-6">
            <table
              className="min-w-full border-collapse border border-border"
              {...props}
            />
          </div>
        ),
        thead: (props) => <thead className="bg-bg-secondary" {...props} />,
        tbody: (props) => <tbody {...props} />,
        tr: (props) => <tr className="border-b border-border" {...props} />,
        th: (props) => (
          <th className="px-4 py-2 text-left font-medium" {...props} />
        ),
        td: (props) => <td className="px-4 py-2" {...props} />,
        code: ({ className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <pre className="bg-bg-secondary p-4 rounded-md my-4 overflow-x-auto">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          ) : (
            <code
              className="bg-bg-secondary px-1.5 py-0.5 rounded-md text-accent"
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
