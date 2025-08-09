const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    const info = {
        part1: part1, exercises1: exercises1,
        part2: part2, exercises2: exercises2,
        part3: part3, exercises3: exercises3
    };

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
            <p>Part{data.order} - {data.name} has {data.numberOfExercises} exercises</p>
        )
    }

    const Content = (props) => {
        const data = props.data;
        const Part1 = {order: 1, name: part1, numberOfExercises: exercises1};
        const Part2 = {order: 2, name: part2, numberOfExercises: exercises2};
        const Part3 = {order: 3, name: part3, numberOfExercises: exercises3};
        return (
            // <>
            //     <p>Part1 - {data.part1} has {data.exercises1} exercises</p>
            //     <p>Part2 - {data.part2} has {data.exercises2} exercises</p>
            //     <p>Part3 - {data.part3} has {data.exercises3} exercises</p>
            // </>
            <div>
                <Part data={Part1}/>
                <Part data={Part2}/>
                <Part data={Part3}/>
            </div>
        );
    };

    const Total = (props) => {
        const data = props.data;
        return (
            <>
                <p>Number of exercises: {data.exercises1 + data.exercises2 + data.exercises3}</p>
            </>
        )
    }
    return (
        <div>
            <Header title={course}/>
            <Content data={info}/>
            <Total data={info}/>
        </div>
    )
}

export default App;