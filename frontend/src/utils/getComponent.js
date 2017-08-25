import MainPage from '../components/MainPage';
export default function getComponent(type) {
    const typesComponents = {
        "mainPage": MainPage
    };
    return typesComponents[type];
}
