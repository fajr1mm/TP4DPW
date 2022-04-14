import React, { useState } from 'react';
import '../src/App.css';

function App() {

  const [name, setname] = useState(null);
  const [birth, setbirth] = useState(null);
  const [gender, setgender] = useState(null);
  const [religion, setreligion] = useState(null);
  const [pesan, setpesan] = useState(null);

  const [userinfo, setUserInfo] = useState({ 
    hobi: [], 
    response: [], 
  }); 
  const handleChange = (e) => { 
    // Destructuring 
    const { value, checked } = e.target; 
    const { hobi } = userinfo; 

    // Case 1 : The user checks the box 
    if (checked) { 
      setUserInfo({ 
        hobi: [...hobi, value], 
        response: [...hobi, value], 
      }); 
    } 
    // Case 2  : The user unchecks the box 
    else { 
      setUserInfo({ 
        hobi: hobi.filter((e) => e !== value), 
        response: hobi.filter((e) => e !== value), 
      }); 
    }
  } 
  const [print, setprint] = useState(false);

  function getname(e){
    setname(e.target.value)
    setprint(false)
  }

  function getbirth(e){
    setbirth(e.target.value)
    setprint(false)
  }

  function getgender(e){
    setgender(e.target.value)
    setprint(false)
  }

  function getreligion(e){
    setreligion(e.target.value)
    setprint(false)
  }

  function getpesan(e){
    setpesan(e.target.value)
    setprint(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <body>
        <div className="main-content" />
            <div className="headdata">
                    <h1>Biodata</h1>
            </div>
                    <div className='biodata' />
                            <form name="biodata" onSubmit={handleSubmit} required />
                                <div className="content">
                                    <label for="name">Nama Lengkap</label><br />
                                    <input type="text" id="name" name="name" onChange={getname} required  /><br />
                                </div>
                                <div className="content">
                                    <label for="date">Tanggal Lahir</label><br />
                                    <input type="date" id="birth" date="date" onChange={getbirth} required /><br />
                                </div>
                                <div className="gender" onChange={getgender} required />
                                    <label for="gender">Jenis Kelamin</label><br />
                                    <input type="radio" id="Laki-laki" name="gender" value="Laki-laki" />
                                    <label for="Laki-laki">Laki-laki</label>
                                    <input type="radio" id="Perempuan" name="gender" value="Perempuan" />
                                    <label for="Perempuan">Perempuan</label>
                                    <input type="radio" id="Other" name="gender" value="Other" />
                                    <label for="Other">Other</label>
                                <div />
                                
                                <div className="hobby" />
                                    <label for="hobi">Hobi</label><br />
                                    <input type="checkbox" id="Ngoding" name="hobi" value="hobi" onChange={handleChange} />
                                    <label for="Ngoding">Ngoding</label>
                                    <input type="checkbox" id="Rebahan" name="hobi" value="hobi" onChange={handleChange} />
                                    <label for="Rebahan">Rebahan</label>
                                    <input type="checkbox" id="Melamun" name="hobi" value="hobi" onChange={handleChange} />
                                    <label for="Melamun">Melamun</label>
                                    <input type="checkbox" id="BacaBuku" name="hobi" value="hobi" onChange={handleChange} />
                                    <label for="BacaBuku">Baca Buku</label>
                                    <input type="checkbox" id="NontonYoutube" name="hobi" value="hobi" onChange={handleChange} />
                                    <label for="NontonYoutube">Nonton Youtube</label>
                                    <input type="checkbox" id="DengerLagu" name="hobi" value="hobi" onChange={handleChange} />
                                    <label for="DengerLagu">Dengerin Lagu</label>
                                    <input type="checkbox" id="other" name="hobi" value="hobi" onChange={handleChange} />
                                    <label for="Other">Other</label>
                                <div />
                                
                                <div className="content">
                                    <label for="agama-select">Agama</label><br />
                                    <select id="agama" name="agama-select" onChange={getreligion} required>
                                    <option value="Buddha" selected>Budha</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Katolik">Katolik</option>
                                    <option value="Tao">Tao</option>
                                    <option value="Protestan">Protestan</option>
                                    <option value="Other">Other</option>
                                    </select>
                                </div> 

                                <div className="content">
                                    <label>Pesan</label><br />
                                    <textarea id="pesan" name="pesan" onChange={getpesan} required></textarea>
                                </div>
                    <div />


                {
                print?
                <div id="output">
                    <div className="header">
                    <h4>Label</h4>
                    <h4>Value</h4>
                    </div>
                    
                    <div className="out-content">
                    <h4>Name</h4>
                    <p className="out-result">{name}</p>
                    </div>
                    
                    <div className="out-content">
                    <h4>Tanggal Lahir</h4>
                    <p className="out-result">{birth}</p>
                    </div>
                    
                    <div className="out-content">
                    <h4>Jenis Kelamin</h4>
                    <p className="out-result">{gender}</p>
                    </div>
                    
                    <div className="out-content">
                    <h4>Hobi</h4>
                    <p className="out-result" onChange={handleChange}>{userinfo.response}</p>
                    </div>
                    
                    <div className="out-content">
                    <h4>Agama</h4>
                    <p className="out-result">{religion}</p>
                    </div>
                    
                    <div className="out-content">
                    <h4>Pesan</h4>
                    <p className="out-result">{pesan}</p>
                    </div>
                </div>
                :null
                }
                <button onClick={()=>setprint(true)}>Submit</button>
                <form />
            <div />
      </body>
  );
}

export default App;