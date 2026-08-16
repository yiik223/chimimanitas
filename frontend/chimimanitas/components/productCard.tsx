import Link from "next/link";

export  default function ProductCard(){
    return(
        <article>
            <div>
                Imagen del producto
            </div>
            <h2>Mimi</h2>

            <p>$15.000</p>

            <Link href="/catalogo">
                Ver producto 
            </Link>

        </article>
    );
}