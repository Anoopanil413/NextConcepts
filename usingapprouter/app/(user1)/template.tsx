export default function Groupedtemplate({
    children,
  }:{ children: React.ReactNode }) {
    return (
      <>
       
        <body>
        <h1>Grouped  template</h1>
          {children}
          <footer className='bg-sky-300 '>This is template footer for grouped routes</footer>
        </body>
          
        </>
    );
  }
  