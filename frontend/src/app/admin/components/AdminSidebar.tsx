import Link from 'next/link';

export default function AdminSidebar  () {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white">
            <div className="p-6">
                <h2 className="text-xl font-semibold">Админ панель</h2>
            </div>
            <nav className="mt-6">
                <ul>
                    <li>
                        <Link className="block px-4 py-2 text-sm hover:bg-gray-700" href="/admin/products">
                            Товары
                        </Link>
                    </li>
                    <li>
                        <Link className="block px-4 py-2 text-sm hover:bg-gray-700" href="/admin/categories">
                            Категории
                        </Link>
                    </li>
                    <li>
                        <Link className="block px-4 py-2 text-sm hover:bg-gray-700" href="/admin/subcategories">
                           Подкатегории
                        </Link>
                    </li>
                    <li>
                        <Link className="block px-4 py-2 text-sm hover:bg-gray-700" href="/admin/orders">
                            Заказы
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};