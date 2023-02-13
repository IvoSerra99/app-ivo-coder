import { Container } from 'react-bootstrap'

const PaginaNoEncontrada = () => {
    return(
        <Container className='loadingPages'>
            <h2>ERROR 404</h2>
            <div>La pagina que ha solicitado no existe !</div>
        </Container>
    )
}

export default PaginaNoEncontrada