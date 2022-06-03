export default function Colors() {
  return (
    <div className='container' >
      <h2 className="pattern-title">Colors</h2>
      <ul className='sgcolors'>
        <li>
          <span className="sg-swatch " style={{background: '#0082BA'}}></span>
          <span className="sg-label">Name: $primary-color</span>
          <span className="sg-label">Code: #0082BA</span>
        </li>
        <li>
          <span className="sg-swatch " style={{background: '#999'}}></span>
          <span className="sg-label">Name: $secondary-color</span>
          <span className="sg-label">Code: #999</span>
        </li>
      </ul>

      <h2 className="pattern-title">Background Color</h2>
      <ul className="sgcolors">
        <li>
          <span className="sg-swatch bg--white text--dark"></span>
          <span className="sg-label">Class: bg--white text--dark</span>
          <span className="sg-label">Code: #ffffff</span>
        </li>
      </ul>
    </div>
  )
}
