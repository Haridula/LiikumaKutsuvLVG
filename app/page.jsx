import Feed from '@components/Feed';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Liikumine on rõõm!
        </h1>
        <br className="max-md:hidden" />
            <span className="head_text text-center blue_gradient">Liigume, LVG õpilased!
            </span>
            <p className="desc text-center">
                Leiage oma endale kasulikud nõuanned, et koguaeg terveks jääda.
            </p>
    </section>
  )
}

export default Home