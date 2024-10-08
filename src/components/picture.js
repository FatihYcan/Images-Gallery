const Picture = ({ data }) => {
  return (
    <>
      <h1>Image Galery</h1>
      <div className="container">
        {data.map((item) => (
          <div key={item.index}>
            <div className="images">
              <img src={item.src} alt="" />
              <h3 className="names">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Picture;
