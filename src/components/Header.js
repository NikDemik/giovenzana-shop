import React from 'react';

export default function Header() {
    return (
        <div>
            <div class="container">
                <div className="flex flex-row justify-between">
                    <div className="flex items-center py-4 ">
                        <img className="w-52 mr-2.5" src="./alpark.svg" alt="Логотип компании" />
                        <a href="index.html" class="logo">
                            АЛЬПАРК
                            <br />
                            <span>поставщик продукции GIOVENZANA</span>
                        </a>
                    </div>

                    <nav class="header__nav">
                        <ul class="flex justify-between">
                            <li class="header__nav-item">
                                <a
                                    href="index.html"
                                    class="header__link main-link header__link--current"
                                >
                                    Главная
                                </a>
                            </li>
                            <li class="header__nav-item">
                                <a href="catalog.html" class="main-link header__link">
                                    Товары
                                </a>
                            </li>
                            <li class="header__nav-tem">
                                <a href="index.html#about" class="main-link header__link">
                                    О нас
                                </a>
                            </li>
                            <li class="header__nav-item">
                                <a href="price.html" class="main-link header__link" target="_blank">
                                    Стоимость
                                </a>
                            </li>
                            <li class="header__nav-item">
                                <a href="index.html#contact" class="main-link header__link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div class="header__contacts">
                        <div class="header__phone">
                            <a href="tel:+74994031776">+7 (499) 403-17-76</a>
                        </div>
                        <div class="header__mail">
                            <a href="mailto:zakaz@drives-vfd.ru">zakaz@drives-vfd.ru</a>
                        </div>
                    </div>
                </div>
            </div>
            Header
        </div>
    );
}
