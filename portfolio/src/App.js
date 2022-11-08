import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="container-fluid">

      <div className="container">
        <header className="App-header">
          <nav className="navbar navbar-expand-md py-4">
              <span className='text'>
                NavbarLogo
              </span>
              <button className='navbar-toggler icon' type='button' data-bs-toggle='collapse' data-bs-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse justify-content-end' id='navbarCollapse'>
                <div className='d-flex justify-content-end'>
                  <ul className='navbar-nav row'>
                    <li className='nav-item col'><a className="text" href="#projects">Projects</a></li>
                    <li className='nav-item col'><a className="text" href="#about">About</a></li>
                    <li className='nav-item col'><a className="text" href="#skills">Skills</a></li>
                    <li className='nav-item col'><a className="text" href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
          </nav>
        </header>
      </div>
      
      <div className="container d-flex justify-content-center py-5 prc1" id='projects'>
      
        <div className='card w-100'>
          <div className='pt-3 ps-4'>
            <h5 className='text title'>Most notable project</h5>
          </div>
          
          <div className='row d-flex justify-content-center g-5'>
            <div className='col-sm-4'>
              <img src={logo} alt='...'/>
            </div>
            <div className='col-sm-6'>
              <div className='card-body'>
                <h5 className='card-title text'>Online shop</h5>
                <p className='card-text text'>Project description</p>
                <a href='#projects-7'>Text for the link</a>
              </div>
            </div>
          </div>
        </div>
      
      </div>

      <div className='container d-flex justify-content-center px-0 py-5 prc1'>
        <div className='row w-100'>
        
        <div className='col'>
          <div className='card'>
            <div className='pt-3 ps-4'>
              <h5 className='text title'>Project 2</h5>
            </div>

            <img src={logo} className='card-img-top' alt='...'/>
            <div className='card-body'>
              <h5 className='card-title text'>Project Name</h5>
              <p className='card-text text'>Project description</p>
              <a href='#projects-7'>Text for the link</a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <div className='pt-3 ps-4'>
              <h5 className='text title'>Project 2</h5>
            </div>

            <img src={logo} className='card-img-top' alt='...'/>
            <div className='card-body'>
              <h5 className='card-title text'>Project Name</h5>
              <p className='card-text text'>Project description</p>
              <a href='#projects-7'>Text for the link</a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <div className='pt-3 ps-4'>
              <h5 className='text title'>Project 2</h5>
            </div>

            <img src={logo} className='card-img-top' alt='...'/>
            <div className='card-body'>
              <h5 className='card-title text'>Project Name</h5>
              <p className='card-text text'>Project description</p>
              <a href='#projects-7'>Text for the link</a>
            </div>
          </div>
        </div>

        </div>
      </div>

      <div className='container d-flex py-5 prc1' id='about'>
        <div className=''>
          <section className='abt-container py-5 px-4'>
            <h5 className='text title'>About me</h5>

            <div className='row'>
            <div className='col-sm-6'>
              <p className='text pt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna diam, sagittis quis hendrerit nec, feugiat eu lorem. Mauris tincidunt pharetra justo eu sodales. In porttitor metus id hendrerit dictum. Ut feugiat, nibh ut tincidunt blandit, ligula lorem varius mi, et tincidunt nulla nibh a enim. Cras id dui eget elit euismod gravida in non ipsum. Praesent dignissim a orci faucibus ultricies. Mauris molestie dui vel congue tempus. Donec posuere hendrerit mauris non venenatis. In sem lacus, ullamcorper a nulla vel, finibus malesuada erat. Nulla augue ligula, ornare sit amet lacus nec, maximus auctor ante.
              </p>
              <h5 className='text title'>Interests</h5>
              <ul className='abt-list'>
                <li className='text py-2 list-item'>First</li>
                <li className='text py-2 list-item'>Second</li>
                <li className='text py-2 list-item'>Third</li>
              </ul>
            </div>
            
            <div className='col-sm-6'>
              <img src={logo} alt='...'/>
            </div>
            </div>
            
          </section>
          
        </div>
        
        
      </div>

      <div className='container d-flex py-5 justify-content-center prc1' id='contact'>
        <section className='abt-container'>
          <h1 className='text ct-info'>Contact</h1>
          
          <p className='text ct-info'>
            Contact info for contacting
          </p>
        </section>
      </div>

      <footer className='container'>

      </footer>
    </div>
  );
}

export default App;
