const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                order: 1,
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                order: 2,
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                order: 3,
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    const Header = (props) => {
        return (
            <header>
                <h1>{props.title}</h1>
            </header>
        );
    };

    const Part = (props) => {
        const data = props.data;
        return (
            <p>Part{data.order} - {data.name} has {data.exercises} exercises</p>
        )
    }

    const Content = (props) => {
        const data = props.data;
        return (
            <div>
                <Part data={data[0]} />
                <Part data={data[1]} />
                <Part data={data[2]} />
            </div>
        );
    };

    const Total = (props) => {
        const data = props.data;
        return (
            <>
                <p>Number of exercises: {data[0].exercises + data[1].exercises + data[2].exercises}</p>
            </>
        )
    }

    return (
        <div>
            <Header title={course.name} />
            <Content data={course.parts}/>
            <Total data={course.parts} />
        </div>
    )
}

export default App;