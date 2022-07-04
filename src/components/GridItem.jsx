function GridItem({ data }) {
  return (
      <div className="flex flex-col bg-darkGray p-4 rounded-md hover:bg-active transition duration-300 ease cursor-pointer">
          { <img src={data.img} alt={data.title} className="mb-4 object-cover w-full h-full" /> }
          <div className="h-16">
            <h4 className="item-title line-clamp-1">{data.title}</h4>
            <p className="item-desc line-clamp-2">{data.desc}</p>
          </div>
      </div>
  )
}

export default GridItem