const Sidebar = () => {
  return (
    <div className="h-screen w-[272px] bg-white">
      <div className="px-8 pt-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>
      <div className="flex flex-col gap-2">
        <button>Dashboard</button>
        <button>Produtos</button>
        <button>Vendas</button>
      </div>
    </div>
  );
};

export default Sidebar;
