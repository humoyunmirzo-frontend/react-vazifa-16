import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <a href="#">WIX</a>
        </div>
        <div className="links-bar">
          <div className="responsive">
            <a href="#">
              <i className="fas fa-desktop active-responsive"></i>
            </a>
            <div className="slash"></div>
            <a href="#">
              <i className="fas fa-mobile"></i>
            </a>
          </div>
          <div className="links">
            <p>Click edit and create your own amazing website</p>
            <a href="#" className="more-link">Подробнее</a>
            <button className="edit-btn">Редактировать</button>
          </div>
        </div>
      </header>
      <main>
        <div className="user-name">Олег Марков</div>
        <div className="sections">
          <button className="active">Главная</button>
          <button>Обо мне</button>
          <button>Связаться</button>
        </div>
        <div className="gallery">
          <div>
            <img src="https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg" alt="" />
            <img src="https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_3eea4c192eed4667a602ead5652459c5.jpg" alt="" />
            <img src="https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b9747effc3074458a295cf5674f8c73c.jpg" alt="" />
          </div>
          <div>
            <img src="https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_302,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_9f4f79dd27814710b261e3acb931156e.jpg" alt="" />
            <img src="https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b572be78b8984e2db58978eb21e433d7.jpg" alt="" />
            <img src="https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_394a136048754355ad8432b30522c761.jpg" alt="" />
          </div>
          <div>
            <img src="https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg" alt="" />
            <img src="https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_afe9335eb67640c988d648f7671308e5.jpg" alt="" />
            <img src="https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg" alt="" />
          </div>

        </div>
      </main>
      <footer>
        <div className="container">
          <p>© 2035 Олег Марков. Сайт создан на <a href="#"> Wix.com.</a></p>
          <div className="footer-links">
            <a href="#"><img src="https://static.wixstatic.com/media/8d2c2a4846503b9067e2fd2f590445c2.wix_mp/v1/fill/w_19,h_19,al_c,usm_0.66_1.00_0.01,enc_auto/8d2c2a4846503b9067e2fd2f590445c2.wix_mp" alt="" /></a>
            <a href="#"><img src="https://static.wixstatic.com/media/f33e5c8ff44ad726a15419f6ff97b3fd.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f33e5c8ff44ad726a15419f6ff97b3fd.png" alt="" /></a>
            <a href="#"><img src="https://static.wixstatic.com/media/fe7017590fbd384c7502a64601c7b444.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe7017590fbd384c7502a64601c7b444.png" alt="" /></a>
            <a href="#"><img src="https://static.wixstatic.com/media/a0a5617532c029a9bcc4b6490606cc49.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a0a5617532c029a9bcc4b6490606cc49.png" alt="" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
