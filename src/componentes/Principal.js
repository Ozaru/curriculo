import aws_1 from '../assets/aws_1.jpg'
import aws_2 from '../assets/aws_2.jpg'
import profile from '../assets/profile.json'
import { Pagina } from './Pagina'

export function Principal() {
    return (
        <Pagina>
            <Tags />
            <Sobre />
            <Certificados />
        </Pagina>
    )
}

function Tags() {
    const { tags } = profile.info
    return (
        <div>
            <ul className='small lh-sm'>
                {tags.map(tag => {
                    return <li>{tag}</li>
                })}
            </ul>
        </div>
    )
}

function Sobre() {
    const { sobre } = profile.info
    return (
        <div>
            <div className="fundo py-1 border-top border-bottom border-primary mb-2">
                <span className="fw-bold text-primary">Apresentação:</span>
            </div>
            <p className='lh-sm' style={{ "white-space": "pre-wrap" }}>
                {sobre.join('\n')}
            </p>
        </div>
    )
}

function Certificados() {
    return (
        <div>
            <div className="fundo py-1 border-top border-bottom border-primary mb-4">
                <span className="fw-bold text-primary">Informações:</span>
            </div>
            <div className='row'>
                <div className='col-4 d-flex'>
                    <ul className='lh-sm small my-auto'>
                        <li>Sistemas de informação (superior)</li>
                        <li>Informática (técnico)</li>
                        <li>Excel avançado (visual basic)</li>
                        <li>Inglês básico (somente leitura)</li>
                        <li>Auditoria contábil</li>
                        <li>Entusiasta Linux</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <img src={aws_2} className="w-100" alt="certificado-2" />
                </div>
                <div className='col-4'>
                    <img src={aws_1} className="w-100" alt="certificado-1" />
                </div>
            </div>
        </div>
    )
}