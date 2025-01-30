'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const products = [
    {
        name: 'Подвесные пульты управления',
        description: 'Предлагаются готовые устройства или комплекты для сборки',
        href: '#',
        icon: ChartPieIcon,
    },
    {
        name: 'Концевые выключатели с поворотным механизмом',
        description: 'Предназначены для управления перемещением промышленного оборудования',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Позиционные концевые выключатели',
        description: 'Применяются для управления лебедками, подъемниками и рабочими органами машин',
        href: '#',
        icon: FingerPrintIcon,
    },
    {
        name: 'Троллейный шинопровод',
        description:
            'Системы подвода тока на различное оборудование (краны, мостовые краны, ленточные и цепные конвееры и т.д.)',
        href: '#',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Автоматизация',
        description: 'Build strategic funnels that will convert',
        href: '#',
        icon: ArrowPathIcon,
    },
];
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
            >
                <div className="flex ">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Альпарк</span>
                        <img alt="" src="/alpark.svg" className="h-10 w-auto" />
                    </a>
                </div>
                <div className="flex xl:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Открыть меню</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden xl:flex xl:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                            Каталог
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-400"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <a
                                                href={item.href}
                                                className="block font-semibold text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className="size-5 flex-none text-gray-400"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        О нас
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Доставка
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Стоимость
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Конфигуратор
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Контакты
                    </a>
                </PopoverGroup>
                <div className="hidden sm:flex sm:gap-x-6 sm:justify-end p-3 border rounded-md">
                    {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a> */}
                    <a href="mailto:zakaz@drives-vfd.ru" className="text-lg/6  text-gray-900">
                        zakaz@giovenzana.ru
                    </a>
                    <a href="tel:+74994031776" className="text-lg/6 font-semibold text-gray-900">
                        +7 (499) 403-17-76
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">ООО "Альпарк"</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Закрыть меню</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Каталог
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="size-5 flex-none group-data-open:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    О нас
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Стоимость
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Доставка
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Конфигуратор
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Контакты
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
