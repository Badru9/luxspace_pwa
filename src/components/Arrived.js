import ArrivedItems from "./ArrivedItems";

export default function Arrived({ items }) {
  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center mb-4 text-center">
          <h3 className="text-2xl font-semibold capitalize">
            Just Arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="px-4 overflow-x-hidden" id="carousel">
        <div className="container mx-auto"></div>
        {/* <!-- <div className="z-10 overflow-hidden"> --> */}
        <div className="relative flex flex-row -mx-4">
          {items.length > 0 &&
            items.map((data) => <ArrivedItems key={data.id} item={data} />)}
        </div>
      </div>
    </section>
  );
}
