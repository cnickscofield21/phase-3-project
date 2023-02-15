import {Route, Routes} from 'react-router-dom';

function ToolboxList() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4">

      <div className="card w-96 bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <h2 className="card-title">Phase 1</h2>
          <p>First Flatiron project. Vanilla JS. Added Bootstrap.</p>
          <ul className="">
            <li><a href="#">W3Schools</a></li>
            <li><a href="#">Mozilla Developer Network</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Markdown Guide</a></li>
            <li><a href="#">Bootstrap</a></li>
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <h2 className="card-title">Phase 2</h2>
          <p>Second Flatiron project. Introduces React. Added Tailwind CSS.</p>
          <ul className="">
            <li><a href="#">Tailwind CSS</a></li>
            <li><a href="#">daisyUI</a></li>
            <li><a href="#">React Docs (beta)</a></li>
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <h2 className="card-title">Phase 3</h2>
          <p>Third Flatiron project. Introduces Ruby.</p>
          <ul className="">
            <li><a href="#">Sinatra</a></li>
            <li><a href="#">Ruby Docs</a></li>
            <li><a href="#">Ruby on Rails Guides</a></li>
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <h2 className="card-title">Prework</h2>
          <p>Intro to web development. Many basic resources. Vanilla everything.</p>
          <ul className="">
            <li><a href="#">W3Schools</a></li>
            <li><a href="#">Mozilla Developer Network</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">FIS-Canvas</a></li>
          </ul>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border-2">
        <div className="card-body">
          <h2 className="card-title">Side Idea</h2>
          <p>Just brainstorming.</p>
          <ul className="">
            <li><a href="#">PHP Docs</a></li>
            <li><a href="#">SQLite Docs</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Markdown Guide</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default ToolboxList;
