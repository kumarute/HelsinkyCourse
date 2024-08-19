const App= ()=> {
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3= 'State of a component';
  const exercises3= 14;
  const exercises= [
    {name:'Fundamentals of React',number_exercises:10},
    {name:'Using props to pass data',number_exercises:7},
    {name:'State of a component',number_exercises:14}
  ]

  return(
    <>
      <CourseHeader/>
      <Content/>
      <Total exercises={exercises}/>
    </>
  )
}

const CourseHeader=()=>{
  return(
    <div>
      <h1>Half Stack application development</h1>
    </div>
  )
}

const Content = ()=>{
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3= 'State of a component';
  const exercises3= 14;
  return(
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>      
    </div>

  )
}

const Total=(props)=>{
  const total_exercises=props.exercises[0].number_exercises+props.exercises[1].number_exercises + props.exercises[2].number_exercises
  console.log (total_exercises)
  return(
    <div>
      <p>The total nº of exercises is {total_exercises}</p>
    </div>
  )
}

export default App