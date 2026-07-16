export default function StatCard({
 title,
 value,
 subtitle,
 icon
}){

return(

<div className="bg-[#151515] 
border border-gray-800
rounded-xl
p-6
text-white">

<div className="flex justify-between">

<h3 className="text-gray-300">
{title}
</h3>

<span>
{icon}
</span>

</div>


<h1 className="text-4xl font-bold mt-8">
{value}
</h1>


<p className="text-gray-500 mt-2">
{subtitle}
</p>


</div>

)

}