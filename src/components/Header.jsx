import React from 'react';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { Link } from 'react-router-dom';
import { logOutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logoPlatzi from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
// Componente presentacional

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logOutRequest({});
  }
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logoPlatzi} alt="PlatziVideo" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? 
            <img src={gravatar(user.email)} alt={user.email} />
            :
            <img src={userIcon} alt="User logo" />
        }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? <li><Link to="">{user.email}</Link></li>:
            null
          }

          {hasUser ? 
            <li><a href="#logout" onClick={handleLogOut}>Cerrar Sesión</a></li> 
              :
            <li><Link to="/login">Iniciar Sesión</Link></li>}
        </ul>
      </div>
    </header>
  
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logOutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
