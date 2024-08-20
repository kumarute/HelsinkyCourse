const App= ()=> {
  const course = 'Half Stack application development'
  const exercises= [
    {name:'Fundamentals of React',number_exercises:10},
    {name:'Using props to pass data',number_exercises:7},
    {name:'State of a component',number_exercises:14}
  ]

  return(
    <>
      <Header course={course}/>
      <Content exercises={exercises}/>
      <Total exercises={exercises}/>
    </>
  )
}

const Header=(props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part=(props)=>{
  return(
    <div>
      <p>{props.name}: {props.exercises}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <>
    <Part name={props.exercises[0].name} exercises={props.exercises[0].number_exercises}/>
    <Part name={props.exercises[1].name} exercises={props.exercises[1].number_exercises}/>
    <Part name={props.exercises[2].name} exercises={props.exercises[2].number_exercises}/>

    </>
  );
}
const Total=(props)=>{
  let total_exercises=0
  for (let i=0;i<props.exercises.length;i++){
    total_exercises+=props.exercises[i].number_exercises
  }
  console.log (total_exercises)
  return(
    <div>
      <p>The total nº of exercises is {total_exercises}</p>
    </div>
  )
}

export default App