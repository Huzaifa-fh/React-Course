import Accordian from './components/Accordion';

function App() {
    const items = [
        {
            id: "dsfdfsda",
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: "43twegeff",
            label: 'Can I use Javascript on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: "3264yrgewf",
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.You can use React on any project you want. You can use React on any project you want.'
        },
    ]

    return (
        <Accordian items={items} />
    );
}

export default App;