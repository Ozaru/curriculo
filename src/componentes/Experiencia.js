import profile from '../assets/profile.json'
import { Pagina } from './Pagina'

export function Experiencia() {
    const experiencias = [
        ...profile.experiencia,
        ...profile.outros,
    ]

    const completo = experiencias.length % 2 === 0
    const divisor = completo ? experiencias.length : experiencias.length + 1
    const count = divisor / 2

    const pages = []
    for (let i = 0; i < count; i++) {
        const primeiro = i * 2
        pages.push(
            Page({
                registro_1: {
                    experiencia: experiencias[primeiro],
                    index: primeiro,
                    length: experiencias.length,
                },
                registro_2: {
                    experiencia: experiencias[primeiro + 1],
                    index: primeiro + 1,
                    length: experiencias.length,
                },
            })
        )
    }

    return pages
}

function Page({
    registro_1,
    registro_2,
}) {
    return (
        <Pagina>
            <div className='d-flex flex-column h-100'>
                <div>
                    <Registro {...registro_1} />
                </div>
                <div className='my-auto'>
                    <Registro {...registro_2} />
                </div>
            </div>
        </Pagina>
    )
}

function Registro({
    experiencia,
    index,
    length,
}) {
    if(!experiencia){
        return null
    }
    const {
        cargo,
        empresa,
        inicial,
        final,
        descricao,
    } = experiencia
    return (
        <>
            <div className="fundo py-1 border-top border-bottom border-primary mb-2 row">
                <div className="col-9 d-flex flex-column">
                    <span className="fw-bold text-primary">{cargo}</span>
                    <span className="small text-primary">{empresa}</span>
                    <span className="small text-secondary">{inicial} - {final}</span>
                </div>
                <div className='col-3'>
                    <span class="badge rounded-pill text-bg-primary p-2 mt-1 w-100">Experiencia: {index + 1}/{length}</span>
                </div>
            </div>
            <p className='lh-sm' style={{ "white-space": "pre-wrap" }}>
                {descricao.join('\n')}
            </p>
        </>
    )
}