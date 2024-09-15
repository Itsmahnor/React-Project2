import Navbar from "./NavBar"
import locations from "./Data"
import Boxes from "./Boxes"
export default function Cards(){
  console.log(locations);
  let Element=locations.map((items)=>{
    return <Boxes 
 key={items.id}
    img={items.image}
    location={items.location}
    mapLink={items.mapLink}
    description={items.description}
   dateRange={items.dateRange}
   name={items.name}
/>
  })
  return(
<div className="Hero--section">
  <Navbar />

{Element}
</div>
  )
}

