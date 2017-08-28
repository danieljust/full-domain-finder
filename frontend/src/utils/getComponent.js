import MainPage from '../components/MainPage';
import Profile from '../components/Profile';
import DomainFinder from '../components/DomainFinder';
export default function getComponent(type) {
    const typesComponents = {
        "mainPage": MainPage,
        "profile": Profile,
        "domainFinder": DomainFinder
    };
    return typesComponents[type];
}
