import { recently_played_data } from "../../assets/recently_played/index";

function RecentlyPlayed() {
  return (

    <section>
      <h2 className="section-title">Recently Played doganozgur</h2>
      <div className="grid grid-cols-7 gap-4">
        {recently_played_data.map(data => (
          <div className="flex flex-col bg-darkGray p-4 rounded-md hover:bg-active transition duration-300 ease cursor-pointer">
            { <img src={data.img} alt={data.title} className="mb-4 object-contain" /> }
            <div>
              <h4 className="item-title">{data.title}</h4>
              <p className="line-clamp-2">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default RecentlyPlayed