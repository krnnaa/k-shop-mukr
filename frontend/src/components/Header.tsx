'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white text-black border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-semibold tracking-tight">
                    K-shop
                </Link>

                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="hover:underline">
                        Главная
                    </Link>
                    <Link href="/catalog" className="hover:underline">
                        Каталог
                    </Link>
                    <Link href="/about" className="hover:underline">
                        О нас
                    </Link>
                </nav>

                <div className="flex items-center space-x-4 text-sm">
                    <Link href="/login" className="hover:underline">
                        Войти
                    </Link>
                    <Link
                        href="/register"
                        className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </header>
    );
}
