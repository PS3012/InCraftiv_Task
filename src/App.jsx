import 'primeicons/primeicons.css';
import './App.css'
import { useState } from 'react';
import { kidsInfantsDrop, menDrop, womenDrop } from './DropdownList';

function App() {
  const [drop, setDrop] = useState('')
  return (
    <>

      {/* HEADER */}
      <header>
        <div className="inner-grid">
          <div className="left-block">
            <div className="logo">
              <img src="/logo.jpg" alt="..." />
            </div>
            <div className="menu-links">
              <div
                className={`menu-item ${drop === "Men" ? "active" : ""}`}
                onMouseEnter={() => setDrop('Men')}
                onMouseLeave={() => setDrop('')}
              >
                MEN
              </div>
              {drop === "Men" &&
                <div className='mega-drop' onMouseEnter={() => setDrop('Men')} onMouseLeave={() => setDrop('')}>
                  <div className="inner-grid seven-grid">
                    {menDrop.map((item, index) => (
                      <div className="block" key={index}>
                        <div className="block-head">{item.head}</div>
                        {item.child &&
                          <div className="block-list">
                            {item.child.map((ele, index) => (
                              <a href="#" key={index}>{ele}</a>
                            ))}
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              }
              <div
                className={`menu-item ${drop === "Women" ? "active" : ""}`}
                onMouseEnter={() => setDrop('Women')}
                onMouseLeave={() => setDrop('')}
              >
                WOMEN
              </div>
              {drop === "Women" &&
                <div className='mega-drop' onMouseEnter={() => setDrop('Women')} onMouseLeave={() => setDrop('')}>
                  <div className="inner-grid seven-grid">
                    {womenDrop.map((item, index) => (
                      <div className="block" key={index}>
                        <div className="block-head">{item.head}</div>
                        {item.child &&
                          <div className="block-list">
                            {item.child.map((ele, index) => (
                              <a href="#" key={index}>{ele}</a>
                            ))}
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              }
              <div
                className={`menu-item ${drop === "Kids Infants" ? "active" : ""}`}
                onMouseEnter={() => setDrop('Kids Infants')}
                onMouseLeave={() => setDrop('')}
              >
                KIDS & INFANTS
              </div>
              {drop === "Kids Infants" &&
                <div className='mega-drop' onMouseEnter={() => setDrop('Kids Infants')} onMouseLeave={() => setDrop('')}>
                  <div className="inner-grid four-grid">
                    {kidsInfantsDrop.map((item, index) => (
                      <div className="block" key={index}>
                        <div className="block-head">{item.head}</div>
                        {item.child &&
                          <div className="block-list">
                            {item.child.map((ele, index) => (
                              <a href="#" key={index}>{ele}</a>
                            ))}
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              }
              <a href="" className="menu-item">BEST SELLER</a>
              <a href="" className="menu-item">DISCOUNT ZONE</a>
              <a href="" className="menu-item">WINTER WEAR</a>
            </div>
          </div>
          <div className="right-block">
            <div className="search">
              <i className="pi pi-search"></i>
            </div>
            <div className="login">
              <i className="pi pi-user"></i>
              <div>Login</div>
            </div>
            <div className="wishlist super-icon">
              <i className="pi pi-heart"></i>
              <div className="count">0</div>
            </div>
            <div className="cart super-icon">
              <i className="pi pi-shopping-cart"></i>
              <div className="count">0</div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default App
