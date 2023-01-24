
function ImageFullWidth(props) {
    return (
      <div className="ImageFullWidth">
          <img src={props.src} style={{width: "100%", borderRadius: "15px", marginBottom: "30px"}}/>
      </div>
    );
  }
  
  export default ImageFullWidth;