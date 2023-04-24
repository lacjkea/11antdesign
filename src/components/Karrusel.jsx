import { Carousel } from "antd";

export default function Karrusel() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    // lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const m0 = {
    /*     margin: 0,
        padding: 0, */
  };
  return (
    <Carousel
      effect="fade"
      dotPosition="left"
      dots={true}
      autoplay={true}
      goTo="3" /* ??? */
    >
      {/* https://ant.design/components/carousel */}
      <div>
        <div style={contentStyle}>
          <h3>It's messy from slide 3</h3>
          <p>the more content I put here</p>
          {/*        <img
          src="https://picsum.photos/id/684/1600/400"
          alt=""
          style={{ zIndex: -1000 }}
        /> */}
          {/*    <h3 style={m0}>1</h3> */}
          {/*      <p style={m0}>dsjfbdsahjfh</p>
        <section style={m0}>
          <p style={m0}>dakjfhkdsaf</p>
        </section> */}
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}
