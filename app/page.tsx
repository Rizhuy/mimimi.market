import Image from "next/image"
import Link from "next/link"
import { Heart, Phone } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Белый зайчик",
    color: "Белый",
    image: "/product-white.png",
  },
  {
    id: 2,
    name: "Красный зайчик",
    color: "Красный",
    image: "/product-red.png",
  },
  {
    id: 3,
    name: "Розовый зайчик",
    color: "Розовый",
    image: "/product-pink.png",
  },
]

const additionalImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.1.PNG-oJ8A0JlvztZ1D5bA5u4vFAl2GQ6EjD.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.PNG-Is6mNJzrUeGxvmiluiLrlcsO7kLvwR.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.PNG-Rg6iwcJ1sYPy2yAvzfitDA20deXPN1.jpeg",
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header - только логотип */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-start">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-12-12_15-53-48-KkSaVxvEsndwE6PIf3faIITxXjv9YJ.jpg"
              alt="mimimi.market"
              width={150}
              height={50}
              className="h-14 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-3 md:py-4">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-5">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 text-balance">
              Плюшевая упаковка для цветов
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Милые коробочки-зайчики с мягким плюшем. Идеальный подарок, который хочется обнять.
            </p>
          </div>

        </div>
      </section>

      {/* Доступные цвета */}
      <section className="py-3 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="bg-background rounded-2xl p-4 text-center">
                <div className="aspect-[3/4] relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">
                  Цвет: {product.color}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Дополнительные фото */}
      <section className="py-3">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={image}
                  alt={`Фото ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О товаре */}
      <section className="py-3 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              О нашей упаковке
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-2">
              <p>В комплекте всё есть. Собственное производство.</p>
              <p>Видеоинструкция доступна по ссылкам на площадках или в карточке Ozon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Для партнеров */}
      <section className="py-3">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-5">
              Выгодные условия для партнеров
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6 text-left max-w-xl mx-auto">
              <div className="bg-card rounded-xl p-5">
                <p className="text-muted-foreground text-sm mb-1">Оптовая цена</p>
                <p className="text-foreground text-xl font-semibold">900 ₽ / комплект</p>
              </div>
              <div className="bg-card rounded-xl p-5">
                <p className="text-muted-foreground text-sm mb-1">Минимальный заказ</p>
                <p className="text-foreground text-xl font-semibold">от 10 комплектов</p>
              </div>
              <div className="bg-card rounded-xl p-5">
                <p className="text-muted-foreground text-sm mb-1">Качество</p>
                <p className="text-foreground text-xl font-semibold">Премиальное исполнение</p>
              </div>
              <div className="bg-card rounded-xl p-5">
                <p className="text-muted-foreground text-sm mb-1">Отгрузка</p>
                <p className="text-foreground text-xl font-semibold">В течение 24 часов</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link
                href="https://max.ru/join/0_hby1OX2XdeSj4smcBKY9OL6YLeZQ_DZ2FMUey8SCQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Оформить заказ в MAX
              </Link>
              <Link
                href="https://t.me/mimimimarket"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Оформить заказ в TG
              </Link>
              <Link
                href="https://www.ozon.ru/product/komplekt-floristicheskoy-upakovki-plyushevyy-zayka-belyy-4044623700/?from_sku=4044610400&oos_search=false&sh=JkEN5GOmqQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border-2 border-border text-foreground px-8 py-4 rounded-full text-base font-medium hover:border-primary/50 transition-colors"
              >
                Мы на Ozon
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <Link href="tel:89082304120" className="text-lg font-medium hover:text-primary transition-colors">
                8 908 230-41-20
              </Link>
            </div>
            <p className="mt-3 text-foreground text-lg font-semibold">Гарантированный WOW-эффект!</p>
          </div>
        </div>
      </section>

      {/* Footer - простой */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-12-12_15-53-48-KkSaVxvEsndwE6PIf3faIITxXjv9YJ.jpg"
            alt="mimimi.market"
            width={100}
            height={40}
            className="h-10 w-auto mx-auto mb-4"
          />
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 mb-2">
            Сделано с <Heart className="w-4 h-4 text-primary" fill="currentColor" /> для вас
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} mimimi.market
          </p>
        </div>
      </footer>
    </main>
  )
}
