import PortfolioLink from '../assets/PortfolioLink';

function Header() {
    return (
        <header className="flex flex-row justify-between">
            <h1 className="text-2xl font-medium">GPT-4 Quota Widget</h1>
            <PortfolioLink />
        </header>
    );
}

export default Header;
