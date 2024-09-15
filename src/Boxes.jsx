export default function Boxes({img,location,mapLink,dateRange,description,name}){
  return(
<div className="Hero--Cards">
<div className="Hero--img">
<img src={img}/>
</div>
<div className="Hero--content">
<div className="location">
<i className="fa-solid fa-location-dot"></i>
<span><bold>{location}</bold></span>
<span><a href={mapLink} target="blank">   View on google map</a></span>
</div>
<h1>{name}</h1>
<p><bold>{dateRange}</bold></p>
<p>
{description}
</p>
</div>
</div>)
}
