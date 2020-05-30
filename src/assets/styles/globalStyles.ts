import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-indigo-900 bg-white`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }

  p + p {
    ${tw`mt-3`};
  }
  
  .un-reset {
    a {
      ${tw`text-blue-700 underline`}
    }
    
    p {
      ${tw`my-4`}
    }

    blockquote,
    figure {
      ${tw`my-4 mx-10`}
    }

    hr {
      ${tw`border`};
    }
    
    h1 {
      ${tw`text-2xl font-bold my-2`}
    }
    
    h2 {
      ${tw`text-xl font-bold my-3`}
    }

    h3 {
      ${tw`text-lg font-bold my-4`}
    }

    h4 {
      ${tw`text-base font-bold my-5`}
    }

    h5 {
      ${tw`text-sm font-bold my-6`}
    }

    h6 {
      ${tw`text-xs font-bold my-10`}
    }
    
    article,
    aside,
    nav,
    section {
      h1 {
        ${tw`text-2xl font-bold my-3`}
      }

      article,
      aside,
      nav,
      section {
        h1 {
          ${tw`text-lg font-bold my-4`}
        }

        article,
        aside,
        nav,
        section {
          h1 {
            ${tw`text-base font-bold my-5`}
          }

          article,
          aside,
          nav,
          section {
            h1 {
              ${tw`text-sm font-bold my-6`}
            }

            article,
            aside,
            nav,
            section {
              h1 {
                ${tw`text-xs font-bold my-10`}
              }
            }
          }
        }
      }
    }

    ul,
    menu {
      ${tw`list-disc my-1 pl-10`}
    }

    ol {
      ${tw`list-decimal my-4 pl-10`}
    }

    ul,
    ol {
      ul {
        list-style-type: circle;
      }

      ul,
      ol {
        ul {
          list-style-type: square;
        }
      }
    }

    dd {
      ${tw`pl-10`}
    }

    dl {
      ${tw`my-4`}
    }

    ul,
    ol,
    menu,
    dl {
      ul,
      ol,
      menu,
      dl {
        margin: 0;
      }
    }

    legend {
      ${tw`py-0 px-1`}
    }

    fieldset {
      ${tw`my-0 mx-1 pt-0 px-1 pb-2`}
    }

    b,
    strong {
      font-weight: bold;
    }

    pre {
      ${tw`my-4`}
    }
  }
    
`;
