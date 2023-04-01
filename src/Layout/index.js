import Background from './Background';

import Nav from './Nav';
import { MobileMenuPanelTarget } from './MobileMenu';
import MainView from './MainView';

function Layout({ title, children }) {
    return (
        <Background pattern gradient className="text-neutral-800">
            <Nav title={title} />
            <MobileMenuPanelTarget />
            <MainView>{children}</MainView>
        </Background>
    );
}

export default Layout;
