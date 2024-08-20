const App= ()=> {
  const course = {
    name:'Half Stack application development',
    parts:[
    {name:'Fundamentals of React',number_parts:10},
    {name:'Using props to pass data',number_parts:7},
    {name:'State of a component',number_parts:14}
  ]
}

  return(
    <>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

const Header=(props)=>{
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part=(props)=>{
  return(
    <div>
      <p>{props.name}: {props.number_parts}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <>
    <Part name={props.parts[0].name} parts={props.parts[0].number_parts}/>
    <Part name={props.parts[1].name} parts={props.parts[1].number_parts}/>
    <Part name={props.parts[2].name} parts={props.parts[2].number_parts}/>

    </>
  );
}
const Total=(props)=>{
  let total_parts=0
  for (let i=0;i<props.parts.length;i++){
    total_parts+=props.parts[i].number_parts
  }
  console.log (total_parts)
  return(
    <div>
      <p>The total nº of exercises is {total_parts}</p>
    </div>
  )
}

export default App