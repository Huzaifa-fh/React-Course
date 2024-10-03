import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
    const handleClick = () => {
        console.log('Clicked')
    };

    return (
        <div>
            <div>
                <Button success rounded outline onClick={handleClick}>
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded>Something!</Button>
            </div>
        </div>
    );
}

export default App;