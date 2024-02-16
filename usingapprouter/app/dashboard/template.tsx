import NavLinks from "@/componets/nav";

export default function Template({ children }: { children: React.ReactNode }) {
    return (<div>
        <h1 className="bg-slate-200	 color-white">This is template the states doesnt remain consistant accross different routes, state is not preserved</h1>
        <NavLinks/>
        {children}
        </div>
        )
  }