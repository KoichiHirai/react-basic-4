import './Home.scss';

function Home() {
  let goal:string = 'RailwayのRank4に到達する';
  
  let onetimeGoal1: string = 'TechTrainを契約する';
  let onetimeGoal2: string = '初回面談を申し込む'
  let onetimeGoals: Array<string> = [ onetimeGoal1, onetimeGoal2];

  let dailyGoal1: string = '毎日1時間プログラミングする';
  let dailyGoal2: string = '寝る前に翌日やることを確認する';
  let dailyGoals: Array<string> = [ dailyGoal1, dailyGoal2];

  return(
    <div className='disPlayArea'>
      <h2>目標</h2>
      <div className='goal'>{goal}</div>
      <h2>1回で完了するアクション</h2>
      {onetimeGoals.map((value, index) => (
        <div className='checkbox'>
          <input type='checkbox' key={index} /> {value}
        </div>
      ))}
      <h2>繰り返しのアクション</h2>
      {dailyGoals.map((value, index) => (
        <div className='checkbox'>
          <input type='checkbox' key={index} /> {value}
        </div>
      ))}
    </div>
  )
}

export default Home;