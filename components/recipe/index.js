import styled from 'styled-components'
import Tabs from '../tabs/tabs'
import Tab from '../tabs/tab'

const Container = styled.article`
  width: 90%;
  margin: 6em auto 2em;
`

const Recipe = ({beer}) => (
  <Tabs class='tabs'>
    <Tab tabName='Info' tabClass='tab' linkClass='link'>
      <Container>
        <h2>#{beer.id} {beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.description}</p>
        <h4>Food Pairing</h4>
        <br/>
        <ul>
          {beer.food_pairing.map(pair => <li>{pair}</li>)}
        </ul>
      </Container>
    </Tab>
    <Tab tabName='Ingredients' tabClass='tab' linkClass='link'>
      <Container>
        <h2>#{beer.id} {beer.name}</h2>
        <h3>Ingredients</h3>
        <h4>Malt</h4>
        <br/>
        <ul>
          {beer.ingredients.malt.map(cur => {
            return (
              <li>
                <p><span><strong>{cur.name}: </strong>{cur.amount.value} {cur.amount.unit}</span></p>
              </li>
            )
          })}
        </ul>
        <h4>Hops</h4>
        <br/>
        <ul>
          {beer.ingredients.hops.map(cur => {
            return (
              <li>
                <p><span><strong>{cur.name}: </strong>{`${cur.amount.value} ${cur.amount.unit} at ${cur.add}`}</span></p>
              </li>
            )
          })}
        </ul>
        <h4>Yeast</h4>
        <br/>
        <ul>
          <li>{beer.ingredients.yeast}</li>
        </ul>
      </Container>
    </Tab>
    <Tab tabName='Method' tabClass='tab' linkClass='link'>
      <Container>
        <h2>#{beer.id} {beer.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit cum fugiat magni totam, iste quibusdam nulla eum laudantium corporis autem fuga ipsa nobis vero, adipisci, cupiditate nostrum doloribus id natus sapiente reiciendis. Nam expedita asperiores sapiente, molestias explicabo quae, voluptatibus soluta, esse deserunt voluptatem ad omnis! Harum rem et non ullam, sunt quos ad, veniam tempore optio fugiat aliquid minima dolorum doloribus, veritatis odit autem ipsum assumenda itaque iste quas a repudiandae nobis aut nihil. Perferendis, veniam, ut? Aut excepturi autem ratione necessitatibus accusantium, deserunt nihil vel veniam! Et laboriosam nostrum nesciunt ipsum similique accusamus, sint quidem veritatis natus blanditiis.</p>
      </Container>
    </Tab>
    {/* <pre>{JSON.stringify({beer}, null, 2)}</pre> */}
  </Tabs>
)

export default Recipe
