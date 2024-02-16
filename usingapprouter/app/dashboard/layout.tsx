import Buttonfun from "@/componets/button"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (<section >
        <h1 className="bg-sky-500/100">Layout for dashboard, state remains unchanged in different routes </h1>
        
        {children}
        </section>)
  }