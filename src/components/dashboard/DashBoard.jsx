import StatCard from "./StatCard";
import ContributionGraph from "./ContributionGraph";


export default function DashBoard(){

return(

<main className="flex-1 bg-black p-8">


<h1 className="text-4xl text-white font-bold">
Dashboard
</h1>

<p className="text-gray-500">
Overview of your coding activity and AI reviews
</p>



<div className="grid grid-cols-4 gap-6 mt-10">


<StatCard
title="Total Repository"
value="30"
subtitle="Connected repositories"
icon="⑂"
/>


<StatCard
title="Total Commits"
value="2180"
subtitle="In the last year"
icon="⌁"
/>


<StatCard
title="Pull Requests"
value="341"
subtitle="All time"
icon="⑂"
/>


<StatCard
title="AI Reviews"
value="44"
subtitle="Generated"
icon="AI"
/>


</div>



<div className="mt-8">
<ContributionGraph/>
</div>


</main>

)

}