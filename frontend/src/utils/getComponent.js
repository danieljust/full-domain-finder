import MainPage from '../components/MainPage';
import Profile from '../components/Profile';
import DomainFinder from '../components/DomainFinder';
import Login from '../components/login/Login';

export default function getComponent(type) {
  const typesComponents = {
    'mainPage': MainPage,
    'profile': Profile,
    'domainFinder': DomainFinder,
    'login': Login
  };
  return typesComponents[type];
}
