import LabelHarga from "./LabelHarga.jsx"

function KartuMenu({ nama, harga, kategori = "Makanan" }) {
    return (
    <div className="card">
        <h3>{nama}</h3>
        <p>{kategori}</p>
        <LabelHarga nilai={harga} />
    </div>
    );
}

export default KartuMenu
