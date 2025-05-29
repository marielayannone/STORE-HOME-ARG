
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-orange-500 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Bienvenidos a E-Mart</h1>
        <p className="text-lg mt-2">Compra y vende a tu manera</p>
      </header>
      <main className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Tecnología", "Ropa", "Hogar"].map((cat) => (
            <div key={cat} className="p-4 bg-white rounded shadow-md border-t-4 border-orange-400 text-center">
              <h3 className="text-xl font-medium text-gray-700">{cat}</h3>
              <p className="text-sm text-gray-500 mt-2">Explorá productos de {cat}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mt-12 mb-4">Ofertas destacadas</h2>
        <div className="flex overflow-x-auto space-x-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[200px] bg-white p-4 rounded shadow-md">
              <div className="h-32 bg-orange-100 mb-2 rounded"></div>
              <p className="font-medium text-gray-700">Producto {i}</p>
              <p className="text-orange-500 font-bold">$ {i * 1000}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
