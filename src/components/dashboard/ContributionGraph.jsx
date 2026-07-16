export default function ContributionGraph(){

const blocks=Array.from({length:120});


return(

<div className="bg-[#151515]
border border-gray-800
rounded-xl
p-6
text-white">


<h2 className="text-xl font-semibold">
Contribution Activity
</h2>


<p className="text-gray-500">
Visualizing your coding frequency over the last year
</p>


<div className="grid grid-cols-20 gap-2 mt-10">

{
blocks.map((_,i)=>(

<div
key={i}
className="w-4 h-4 bg-green-500/40 rounded-sm"
/>

))
}

</div>


</div>

)

}