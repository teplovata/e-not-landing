import React, { useState } from 'react';
import { Button, Input } from 'antd';
import {
  FaTelegram,
//  FaVk,
  FaCheckCircle,
  FaArrowRight,
  FaShoppingCart,
  FaRocket,
  FaRegSmile,
} from 'react-icons/fa';
import { SiVk, SiGooglemessages } from 'react-icons/si';
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoMdPizza } from 'react-icons/io';
import { GiClothes, GiFlowers } from 'react-icons/gi';
import { BsShopWindow } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import myPhoto from './assets/foto.jpeg'

// Функция для уведомлений
const notify = (message: string) => {
  toast.success(message, { duration: 3000 });
};

// Типы для пропсов
interface ProblemItem {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

interface Niche {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg">
            🦝
          </div>
          <span className="font-bold text-xl text-gray-800">e-not</span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button
            type="text"
            onClick={() => notify('Скоро здесь будет демо!')}
            className="hidden sm:inline-flex"
          >
            Посмотреть как работает
          </Button>
          <Button
            type="primary"
            onClick={() => notify('Заявка отправлена (демо)!')}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Продавайте в Telegram, MAX и VK <br />
              <span className="text-blue-600">без комиссий и потери клиентов.</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Ваш интернет-магазин внутри любимых мессенджеров. Один клик — и заказ оформлен, покупатель не уходит из чата.
            </p>
            <div className="mt-8">
              <Button
                type="primary"
                size="large"
                onClick={() => notify('Начинаем тестирование!')}
                className="bg-blue-500 hover:bg-blue-600 text-base h-auto py-3 px-8"
                icon={<FaRocket className="mr-2" />}
              >
                Попробовать бесплатно
              </Button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl shadow-xl overflow-hidden border-4 border-white aspect-square md:aspect-video flex items-center justify-center">
            <div className="text-center p-4">
              <BsShopWindow className="text-6xl text-gray-400 mx-auto" />
              <p className="text-gray-500 mt-2 font-medium">Скриншот / гифка</p>
              <p className="text-sm text-gray-400">Интерфейс магазина</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem: React.FC = () => {
  const items: ProblemItem[] = [
    { icon: <FaShoppingCart className="text-red-500" />, title: 'Маркетплейсы берут 20%', desc: 'Вы работаете в убыток или задираете цены.' },
    { icon: <FaArrowRight className="text-orange-500" />, title: 'Переходы на сайты убивают конверсию', desc: 'Покупатель ушел по ссылке и не вернулся (залип в ленте).' },
    { icon: <FaRegSmile className="text-yellow-500" />, title: 'Свой интернет-магазин сложно продвигать', desc: 'Никто не вбивает адрес вручную.' },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Надоело терять деньги на комиссиях и переходах?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg font-medium text-gray-700 mt-8 bg-blue-50 p-4 rounded-xl">
          💡 Ваши клиенты уже здесь, в Telegram, MAX и VK. Нужно просто дать им удобную витрину.
        </p>
      </div>
    </section>
  );
};

const Solution: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Встречайте — мини-приложение e-not.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Это не ссылка на сайт. Это полноценный магазин, который живет прямо в вашем канале или чате. Клик — и корзина открывается, не выходя из мессенджера.
        </p>
        <div className="mt-8">
          <Button
            type="link"
            size="large"
            onClick={() => notify('Открываю демо-магазин...')}
            className="text-blue-600 text-lg"
            icon={<HiOutlineSparkles />}
          >
            👉 Нажмите сюда, чтобы увидеть, как ваши клиенты будут покупать ваш товар.
          </Button>
        </div>
        <div className="mt-8 max-w-md mx-auto bg-white p-4 rounded-2xl shadow-lg border">
          <p className="text-gray-500 mb-2">🖼️ Видео / гифка с работой магазина</p>
          <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
            <FaShoppingCart className="text-4xl text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

const KillerFeature: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Один магазин — <span className="text-blue-600">работает везде.</span>
            </h2>
            <p className="text-lg text-gray-600">
              Подключили один раз в админке. Продаете в Telegram, Max и VK. Ваши клиенты могут сидеть где угодно, а ваш бизнес всегда рядом.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center">
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="bg-white p-3 rounded-full shadow-md"><FaTelegram className="text-3xl text-blue-500" /></div>
              <FaArrowRight className="text-gray-400 text-xl" />
              <div className="bg-white p-3 rounded-full shadow-md"><SiVk className="text-3xl text-blue-600" /></div>
              <FaArrowRight className="text-gray-400 text-xl" />
              <div className="bg-white p-3 rounded-full shadow-md"><SiGooglemessages className="text-3xl text-blue-400" /></div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Ваше облако e-not</p>
            <p className="text-xs text-gray-400">Технологично и надежно</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks: React.FC = () => {
  const steps: string[] = [
    'Оставляете заявку.',
    'Я подключаю ваш магазин на своей стороне.',
    'Загружаете товары в простой админке.',
    'Получаете ссылку на мини-приложение и встраиваете её в описание канала / закрепляете сообщение.',
    'Продаете!',
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Подключение за 15 минут
        </h2>
        <div className="max-w-2xl mx-auto mt-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">{index + 1}</div>
              <p className="text-gray-700 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ForWhom: React.FC = () => {
  const niches: Niche[] = [
    { icon: <IoMdPizza className="text-3xl text-orange-500" />, title: 'Рестораны и кафе', desc: 'Сбор предзаказов, доставка.' },
    { icon: <GiClothes className="text-3xl text-pink-500" />, title: 'Розничные магазины', desc: 'Одежда, косметика, товары для дома.' },
    { icon: <GiFlowers className="text-3xl text-green-500" />, title: 'Локальный бизнес', desc: 'Цветы, сувениры, фермерские продукты.' },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Для кого это
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {niches.map((niche, index) => (
            <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{niche.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{niche.title}</h3>
              <p className="text-gray-600">{niche.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Никаких процентов с продаж. <br /> Только фиксированная плата.
        </h2>
        <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h3 className="text-2xl font-semibold text-gray-800">Старт (Полный доступ)</h3>
          <div className="text-4xl font-bold text-blue-600 my-4">5 000 ₽<span className="text-lg text-gray-500">/мес</span></div>
          <ul className="text-left space-y-3 mt-6">
            <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span>✔ Магазин в Telegram, VK, Max.</span></li>
            <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span>✔ Неограниченное кол-во товаров.</span></li>
            <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span>✔ Прием платежей.</span></li>
            <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span>✔ Простая админка.</span></li>
            <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span>✔ Поддержка при подключении.</span></li>
          </ul>
          <div className="mt-8 bg-yellow-100 text-yellow-800 p-3 rounded-lg text-sm font-medium">
            🎁 Первым 10 клиентам — настройка в подарок и месяц бесплатно!
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-blue-100">
            <img 
              src={myPhoto} 
              alt="Полина - основатель e-not"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              «Я — Полина. 7 лет в маркетинге, знаю, как бесят потери клиентов и высокие комиссии. Ушла из найма, выучила код (да, это возможно!) и с поддержкой мужа-программиста написала идеальный инструмент для продаж в мессенджерах. Сама подключаю, сама поддерживаю, сама отвечаю за результат».
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToAction: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    notify(`Спасибо, ${name || 'гость'}! Я свяжусь с вами в ближайшее время.`);
    setName('');
    setContact('');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы продавать там, где ваши клиенты?</h2>
        <p className="text-lg opacity-90 mb-8">Оставьте заявку, и я в течение дня подключу ваш магазин.</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            className="h-12 text-gray-800"
            size="large"
          />
          <Input
            placeholder="Telegram / WhatsApp"
            value={contact}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
            className="h-12 text-gray-800"
            size="large"
          />
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full bg-white text-blue-600 hover:bg-gray-100 border-none h-12 text-base font-semibold"
          >
            Хочу попробовать
          </Button>
        </form>
        <p className="text-sm opacity-75 mt-4">Или напишите мне лично: @teplovata (telegram)</p>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm">🦝</div>
          <span className="font-bold text-lg">e-not</span>
        </div>
        <p className="text-gray-400 text-sm">© 2024 Мини-приложение для продаж в мессенджерах.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <KillerFeature />
        <HowItWorks />
        <ForWhom />
        <Pricing />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;