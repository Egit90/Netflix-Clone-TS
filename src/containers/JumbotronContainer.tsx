import { Jumbotron } from '../components'
import jumbData from '../fixtures/jumbo.json'

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumbData.map((item) => (
                <Jumbotron
                    key={item.id}
                    dir={item.direction === 'row' ? 'row' : 'col'}
                >
                    <Jumbotron.Pane>
                        <Jumbotron.Title> {item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image} alt={item.alt} />
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    )
}
