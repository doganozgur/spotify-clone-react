import { madefor_data } from "../../assets/madefor/index";

function MadeFor() {
  return (
    <div>
      <h2 className="section-title">Made For doganozgur</h2>
      <div className="grid grid-cols-7 gap-4">
        {madefor_data.map(data => (
          <div className="flex flex-col">
            { <img src={data.img} alt={data.title} className="mb-4 w-44 h-44 object-cover" /> }
            <div>
              <h4>{data.title}</h4>
              <p className=" line-clamp-2">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MadeFor