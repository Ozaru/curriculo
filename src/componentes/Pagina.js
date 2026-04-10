import foto from '../assets/foto.jpg'
import profile from '../assets/profile.json'
import qrcode from '../assets/qrcode.png'

export function Pagina({ children }) {

    return (
        <div className="pagina card shadow">
            <div className="card-header bg-primary">
                <Header />
            </div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer bg-primary">
                <Footer />
            </div>
        </div>
    )
}

function Header() {

    const { nome, profissao, stack } = profile.info

    const toListaPlana = (lista, separador) => {
        return lista.join(separador)
    }

    return (
        <div className="row">
            <div className="col-2">
                <img src={foto} className="img-fluid rounded-circle p-1 border border-3 border-white" alt="foto" />
            </div>
            <div className="col-8 d-flex flex-column justify-content-center">
                <h6 className="text-white fw-bold">{nome}</h6>
                <h5 className="text-white fw-bold">{profissao}</h5>
                <span className="text-white small">{toListaPlana(stack, " | ")}</span>
            </div>
            <div className="col-2">
                <img src={qrcode} className="img-fluid rounded" alt="perfil" />
            </div>
        </div>
    )
}

function Footer() {
    const {
        whatsapp,
        endereco,
        email,
        linkedin,
    } = profile.contato
    return (
        <div className="row">
            <div className="col-4 small fw-bold text-white"><i className="bi bi-whatsapp me-1"></i>{whatsapp}</div>
            <div className="col-8 small fw-bold text-white text-end"><i className="bi bi-geo-alt-fill me-1"></i>{endereco}</div>
            <div className="col-4 small fw-bold text-white"><i className="bi bi-envelope-fill me-1"></i>{email}</div>
            <div className="col-8 small fw-bold text-white text-end"><i className="bi bi-linkedin me-1"></i>{linkedin}</div>
        </div>
    )
}