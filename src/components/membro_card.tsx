export interface MembroCardProps {
    img: string,
    name: string,
    cargo: string,
}

export default function MembroCard({img, name, cargo}: MembroCardProps) {
    return (
        <div className="card-membro">
            <img src={img} alt="Card Image"/>

            <div className="card-content">
                <div className="tag-label">
                    <h3>{cargo}</h3>
                </div>
                <h3>{name}</h3>
            </div>
        </div>
    )
}