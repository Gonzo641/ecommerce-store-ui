"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import useCart from "@/hooks/UseCart";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {

    const cart = useCart();

    const onAddToCart = () => {
      cart.addItem(data);
    }

  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {data.name}
        </h1>
        <div className="mt-3 flex items-center justify-between">
            <p className="text-2xl text-gray-900 dark:text-white">
                <Currency value={data?.price} />
            </p>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black dark:text-white">
                    Taille:
                </h3>
                <div>
                    {data?.size?.name}
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black dark:text-white">
                    Couleur:
                </h3>
                <div 
                    className="h-6 w-6 rounded-full border"
                    style={{ backgroundColor: data?.color?.value }} 
                />
            </div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
            <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                Ajouté au panier
                <ShoppingCart size={20} />
            </Button>
        </div>
    </div>
  )
}
export default Info;