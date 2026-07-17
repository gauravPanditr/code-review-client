import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";

export default function Layout({children}){

return(

<div className="flex bg-black min-h-screen">
  <Sidebar />

  <div className="flex-1 ml-72">
    <Header />
    {children}
  </div>
</div>

)

}