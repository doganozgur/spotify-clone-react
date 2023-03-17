import { welcome_data } from "../../assets/data/welcome";

export default function Welcome() {
  return (
    <section>
      <h2 className="section-title">Good evening</h2>
      <div className="grid grid-cols-3 gap-5">
        {welcome_data.map((data) => (
          <div
            className="flex items-center h-20 bg-transparent hover:bg-[rgba(255,255,255,.2)] transition duration-300 ease-in rounded cursor-pointer"
            key={data.id}
          >
            <img
              src={data.img}
              alt={data.title}
              className="h-20 w-20 object-cover rounded-tl rounded-bl"
            />
            <div className="px-4">
              <div className="flex items-center">
                <p className="font-semibold">{data.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
