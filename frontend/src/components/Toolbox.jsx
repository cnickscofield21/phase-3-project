function Toolbox() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <ul className="">
            <li><a href="#">W3Schools</a></li>
            <li><a href="#">Mozilla Developer Network</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Markdown Guide</a></li>
            <li><a href="#">Bootstrap</a></li>
          </ul>
        </div>
      </div>
  )
}

export default Toolbox;
